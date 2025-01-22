import { Injectable, NestMiddleware } from '@nestjs/common';
import { app } from 'firebase-admin';
import { Request, Response } from 'express';
import { initializeFirebaseApp } from 'src/core/firebase/firebase-config';
import { UsersService } from 'src/modules/users/services/users.service';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';

@Injectable()
export class PreauthMiddleware implements NestMiddleware {
  private defaultApp: app.App | null = null;

  constructor(private readonly usersServices: UsersService) {}

  async use(req: Request, res: Response, next: () => void) {
    if (!this.defaultApp) {
      this.defaultApp = await initializeFirebaseApp();
    }

    const token = req.headers.authorization;

    if (token != null && token != '') {
      this.defaultApp
        .auth()
        .verifyIdToken(token.replace('Bearer', '').trim())
        .then(async (decodedToken) => {
          let user = await this.usersServices.findOneUserByEmail(
            decodedToken.email,
          );

          if (!user) {
            user = await this.usersServices.createUser({
              uid: decodedToken.uid,
              email: decodedToken.email,
            } as CreateUserDto);
          }

          req['user'] = user;
          next();
        })
        .catch((error) => {
          console.log(error);
          this.accessDenied(req.url, res);
        });
    } else {
      next();
    }
  }

  private accessDenied(url: string, res: Response) {
    res.status(403).json({
      statusCode: 403,
      timestamp: new Date().toISOString(),
      path: url,
      message: 'Access Denied',
    });
  }
}
