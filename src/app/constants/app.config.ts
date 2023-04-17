import { OIDC } from '@models/oidc';

export const mockToolValidationRequest: Partial<OIDC.ValidateRequest> = {
  client_id: 'test',
  login_hint: 'test',
  redirect_uri: '',
  redirect_url: '',
}

export const mockToolLaunchRequest: Partial<OIDC.LaunchRequest> = {
  id_token: 'test'
}
