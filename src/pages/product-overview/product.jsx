import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

// CSS
import './product-styles.css'

const ProductOverviewPage = () => {

    const {productid} = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const source = axios.CancelToken.source()

        const getProduct = () => { 
            axios.get(`https://oishi-fh-api-react.herokuapp.com/oishi/api/v1/getoneproduct/${productid}`, { cancelToken: source.token }).then((response) => {
                setProduct(response.data.data)
            }).catch(err => {
                console.log(err)
            }) 
        }
        getProduct()
        return () => source.cancel()
    })

    return (
        <div className="oneproductbox">
            <h1> {product.name} </h1>
            <p> ${product.price} </p>
            <p> {product.description} </p>
        </div>
    )
}

export default ProductOverviewPage