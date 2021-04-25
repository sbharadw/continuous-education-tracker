import jwt_decode from "jwt-decode";
import { useAuth0 } from "@auth0/auth0-react";

  export default {

    // Get acccess token along with the user permission provided via Auth0

    roleToken: async function() {
      
      const { getAccessTokenSilently } = useAuth0();

      const token = await getAccessTokenSilently();

      var decoded = jwt_decode(token);
  
      let role = decoded;
  
      return role;

    }
    
  };