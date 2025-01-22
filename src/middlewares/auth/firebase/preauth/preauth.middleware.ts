import { Injectable, NestMiddleware } from '@nestjs/common';
import { app } from 'firebase-admin';
import { Request, Response } from 'express';
import { initializeFirebaseApp } from 'src/core/firebase/firebase-config';
import { UsersService } from 'src/modules/users/services/users.service';

@Injectable()
export class PreauthMiddleware implements NestMiddleware {
  private defaultApp: app.App | null = null;

  constructor(private readonly UsersServices: UsersService) {}

  async use(req: Request, res: Response, next: () => void) {
    if (!this.defaultApp) {
      this.defaultApp = await initializeFirebaseApp();
    }

    const token = req.headers.authorization;

    if (token != null && token != '') {
      this.defaultApp
        .auth()
        .verifyIdToken(token.replace('Bearer', ''))
        .then(async (decodedToken) => {
          const user = await this.UsersServices.findOneUserByEmail(
            decodedToken.email,
          );

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
