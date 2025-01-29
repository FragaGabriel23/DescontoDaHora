import { RolesGuard } from './roles.guard';

export const rolesProviders = [
  {
    provide: 'APP_GUARD',
    useClass: RolesGuard,
  },
];
