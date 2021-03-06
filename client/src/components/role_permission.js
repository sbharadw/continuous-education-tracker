import jwt_decode from "jwt-decode";
import { useAuth0 } from "@auth0/auth0-react";

  export default {

    // Get acccess token along with the user permission provided via Auth0
    //Decode access token using jwt_decode package

    roleToken: async function() {
      
      const { getAccessTokenSilently } = useAuth0();

      const token = await getAccessTokenSilently();
      console.log(token)

      let decoded = jwt_decode(token);

      console.log(decoded)
  
      let role = decoded;
  
      return role;

    }
    
  };