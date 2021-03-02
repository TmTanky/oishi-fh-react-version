import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'

// CSS 
import './home-styles.css'

const HomePage = () => {

    const token = window.localStorage.getItem('token')

    axios.interceptors.request.use(
        config => {
            config.headers.auth = `Bearer ${token}`
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )

    const [products, setProducts] = useState([])
    const user = useSelector(state => state.user)

    useEffect(() => {

        const source = axios.CancelToken.source()

        const getProducts = () => { 
            axios.get(`http://localhost:8000/oishi/api/v1/getproductsall`, { cancelToken: source.token }).then((response) => {
                setProducts(response.data.data)
            }).catch(err => {
                console.log(err)
            }) 
        }
        getProducts()
        return () => source.cancel()
    })

    return (
        <div className="homebox">
            <div className="home1">
                <h1 className="prodtitle"> Products </h1>
                {products.map(product => {
                    return <div className="mainproductbox" key={product._id}>
                        <div className="productsbox">
                            <div className="product">
                                <form>
                                    <img src="https://img.freepik.com/free-vector/happy-birthday-cake-design-vector_53876-61836.jpg?size=338&ext=jpg&uid=R33294599" alt="product"/>
                                    <h1> {product.name} </h1>
                                    <p> ${product.price} </p>
                                    <button> Add to Cart </button>
                                </form>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default HomePage