import axios from "axios";
export function Create(data = {}) {
    console.log(data)
    return axios.post("https://cyclic-server.onrender.com/BlueflyUsers", {
        fname: data.firstName,
        lname: data.lastName,
        email: data.em,
        password: data.pass,
    })
}

export function Loged(params = {}) {
    return axios.get("https://cyclic-server.onrender.com/BlueflyUsers", {
        params: {
            _sort: params.sort,
            _order: params.order
        }
    }).then(res => { return (res) })
}