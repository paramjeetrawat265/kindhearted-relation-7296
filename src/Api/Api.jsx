import axios from "axios";
export function Create(){
    axios.post("https://chalo-api.herokuapp.com/BlueflyUsers",{
        fName:firstname,
        lName:lastname,
        email:em,
        password:pass,
    })
}