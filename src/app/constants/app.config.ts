import { OIDC } from '@models/oidc';

export const mockAuth: Partial<OIDC.AuthRequest> = {
  client_id: 'test',
  login_hint: 'test',
  redirect_uri: '',
  redirect_url: '',
}
