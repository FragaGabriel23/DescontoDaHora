import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from 'src/modules/users/services/users.service';
import { FirebaseService } from 'src/modules/firebase/services/firebase.service';

@Injectable()
export class PreauthMiddleware implements NestMiddleware {
  constructor(
    private readonly usersServices: UsersService,
    private readonly firebaseService: FirebaseService,
  ) {}

  async use(req: Request, res: Response, next: () => void) {
    const token = req.headers.authorization;

    if (token != null && token != '') {
      try {
        const decodedToken = await this.firebaseService.verifyToken(token);

        const user = await this.usersServices.findOneUserByEmail(
          decodedToken.email,
        );

        req['user'] = user;
        next();
      } catch (error) {
        this.accessDenied(req.url, res);
        throw new Error(`Access Denied: ${error.message}`);
      }
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
