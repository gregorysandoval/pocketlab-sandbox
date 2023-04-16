import { OIDC } from '@models/oidc';

export const mockAuth: Partial<OIDC.ValidateRequest> = {
  client_id: 'test',
  login_hint: 'test',
  redirect_uri: '',
  redirect_url: '',
}

export const mockLaunch: Partial<OIDC.LaunchRequest> = {
  id_token: 'test'
}
