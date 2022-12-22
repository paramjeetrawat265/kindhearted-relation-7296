import axios from "axios"
export function GetProduct(params = {}) {
    return axios.get(`https://cyclic-server.onrender.com/${params.db}`, {
        params: {
            _sort:params.sort,
            _order:params.order
        }
    }).then(res => { return (res) })
}