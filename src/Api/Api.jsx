import axios from "axios";
export function Create(datas={}){
    console.log(datas)
    return axios.post("https://chalo-api.herokuapp.com/BlueflyUsers",{
        fname:datas.firstName,
        lname:datas.lastName,
        email:datas.em,
        password:datas.pass,
    })
}

export function Loged(params={}){
    return axios.get("https://chalo-api.herokuapp.com/BlueflyUsers",{
        params:{
            email:params.em,
            password:params.pass
        }
    }).then(res=>{return (res)})
}