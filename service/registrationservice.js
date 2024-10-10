
import axios  from 'axios'

const baseURl = "http://localhost:4000";
export async function registrationService(data)
{

 let p =  await axios.post(`${baseURl}/auth/signup`,data)

 return p;
}

export async function loginservice(data)
{

 let p =  await axios.post(`${baseURl}/accounts/authenticate`,data)

localStorage.setItem("token",JSON.stringify(p.data.jwtToken));
 return p;
}