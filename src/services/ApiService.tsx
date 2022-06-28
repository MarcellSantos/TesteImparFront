import axios from "axios";


export const linkApi="https://localhost:44303/";

export const axiosCon = axios.create({
    baseURL: linkApi,
    timeout: 5000,    
  });

//teste https://localhost:44303/
//prod  https://app-marcel-nascimento-api.azurewebsites.net



export default axiosCon;