export module OIDC {

  export interface AuthRequest {
    client_id: string; // pre registered identifier for the Tool
    login_hint: string;
    redirect_url: string; // redirects browser to the Platform /authorize endpoint
    redirect_uri: string;
  }

  export interface AuthResponse {
    client_id: string; // pre registered identifier for the Tool
    login_hint: string;
    nonce: string; // binds auth requests to the browser (set as cookie) to prevent xss attacks
  }

  export interface LaunchRequest {
    // JWT token + claims (see "what is available" doc)
    // LACID 
    id_token: any;
  }

}