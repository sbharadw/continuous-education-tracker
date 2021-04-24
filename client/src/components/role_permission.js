import jwt_decode from "jwt-decode";
import { useAuth0 } from "@auth0/auth0-react";

  async function callSecureApi () {

  const { getAccessTokenSilently } = useAuth0();

    const token = await getAccessTokenSilently();
    var decoded = jwt_decode(token);
    console.log(`this is my token #####################     ${JSON.stringify(decoded)}`);

    let role = decoded.permissions;




    return role;

  }

  


  export default callSecureApi;