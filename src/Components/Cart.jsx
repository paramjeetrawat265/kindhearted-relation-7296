import { useEffect, useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import axios from "axios"
import { useParams } from "react-router-dom"


function getData(query) {
    console.log(query)
    return axios.get(`https://cyclic-server.onrender.com/BlueflyProduct?q=${query}`)
        .then(res => {
            return res
        })
}

function Cart() {
    const params=useParams()
    const [data, setData] = useState({})

        useEffect(() => {
            getData(params.id).then(res => {
                setData(res.data[0])
            })
                .catch(error => {
                    console.log(error)
                })
        }, [])

        const save = data.price / 100 * data.discount
        const sellprice = Math.floor(data.price - save)
    return (
        <div>
            <div><Navbar /></div>
            <div className='main-div'>
                {
                    data && data.map((el) => {
                        return <div >
                            <div>
                                <div className="submain-div">
                                    <img className="img" src={data.img} />
                                    <p className="name">{data.title}</p>
                                    <p className="price">{data.price}</p>
                                    <p className="rating">{data.discount}</p>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Cart;