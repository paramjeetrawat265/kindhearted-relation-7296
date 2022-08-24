import axios from "axios";
export function Create(){
    axios.post("",{
        firstName:fname,
        lastName:lname,
        email:em,
        password:pass,
    })
}