import axios from "axios"
export function GetProduct(params = {}) {
    return axios.get(`https://chalo-api.herokuapp.com/${params.db}`, {
        params: {
            _sort:params.sort,
            _order:params.order
        }
    }).then(res => { return (res) })
}