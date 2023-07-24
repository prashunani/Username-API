import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const LogOut=()=>{

    const navigation=useNavigate()
    const baseUrl='http://65.2.51.31:9001'
    const handleLogout = async (e) => {
      e.preventDefault();
      const token=Cookies.get('jwtToken')
      navigation('/login') 
      
    };
    return(
        <button onClick={handleLogout}>LogOut</button>
    )
}
export default LogOut;