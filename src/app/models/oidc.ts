export module OIDC {

  export interface AuthRequest {
    // pre registered identifier of the Tool
    client_id: string; 
    login_hint: string;
    // redirects browser to the Platform /authorize endpoint
    redirect_url: string;
    redirect_uri: string;
    // binds auth requests to the browser (set as cookie) to prevent xss attacks
    nonce: string;
  }

  export interface LaunchResponse {
    // JWT + custom user data from Platform
    token: any;
  }

}