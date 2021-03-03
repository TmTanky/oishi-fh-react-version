import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {Link, useRouteMatch} from 'react-router-dom'

// CSS 
import './home-styles.css'

// Actions Redux
import {addItem} from '../../redux/actions/actions'

const HomePage = () => {

    const dispatch = useDispatch()
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

    useEffect(() => {

        const source = axios.CancelToken.source()

        const getProducts = () => { 
            axios.get(`https://oishi-fh-api-react.herokuapp.com/oishi/api/v1/getproductsall`, { cancelToken: source.token }).then((response) => {
                setProducts(response.data.data)
            }).catch(err => {
                console.log(err)
            }) 
        }
        getProducts()
        return () => source.cancel()
    })

    let {url} = useRouteMatch()

    return (
        <div className="homebox">
             <div className="home1">
                 <h1 className="prodtitle"> Products </h1>
                 {products.map(product => {
                     return <div className="mainproductbox" key={product._id}>
                         <div className="productsbox">
                             <div className="product">
                                 <form onSubmit={e => {
                                     e.preventDefault()
                                 }}>
                                     <img src="https://img.freepik.com/free-vector/happy-birthday-cake-design-vector_53876-61836.jpg?size=338&ext=jpg&uid=R33294599" alt="product"/>
                                     {/* <h1> {product.name} </h1> */}
                                     <Link to={`${url}/${product._id}`}> {product.name} </Link>
                                     <p> ${product.price} </p>
                                     <button onClick={() => {
                                         dispatch(addItem(product))
                                     }}> Add to Cart </button>
                                 </form>
                             </div>
                         </div>
                     </div>
                 })}
             </div>
         </div>
    )

    // return (
    //     <div className="homebox">
    //         <div className="home1">
    //             <h1 className="prodtitle"> Products </h1>
    //             {products.map(product => {
    //                 return <div className="mainproductbox" key={product._id}>
    //                     <div className="productsbox">
    //                         <div className="product">
    //                             <form>
    //                                 <img src="https://img.freepik.com/free-vector/happy-birthday-cake-design-vector_53876-61836.jpg?size=338&ext=jpg&uid=R33294599" alt="product"/>
    //                                 <h1> {product.name} </h1>
    //                                 <p> ${product.price} </p>
    //                                 <button> Add to Cart </button>
    //                             </form>
    //                         </div>
    //                     </div>
    //                 </div>
    //             })}
    //         </div>
    //     </div>
    // )
}

export default HomePage