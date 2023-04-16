import { OIDC } from '@models/oidc';

export const mockAuth: Partial<OIDC.AuthRequest> = {
  client_id: 'test',
  login_hint: 'test',
  nonce: '0123456789',
}
