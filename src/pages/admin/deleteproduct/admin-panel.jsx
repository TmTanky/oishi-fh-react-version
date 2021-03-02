import React, {useEffect, useState} from 'react'
import axios from 'axios'

// CSS
import './admin-panel-styles.css'

// Components
import PopUpAddProduct from '../../../components/popup-add-product/popup-add-product'

const AdminPanelPage = () => {

    const [products, setProducts] = useState([])
    const [isAddProduct, setIsAddProduct] = useState(false)

    const [addProduct , setAddProduct] = useState({
        name: "",
        price: "",
        description: ""
    })

    const [isError, setIsError] = useState({
        error: []
    })

    const handleAddProduct =  async e => {
        e.preventDefault()

        try {
            await axios.post(`http://localhost:8000/oishi/api/v1/addproduct`, addProduct)
        } catch (err) {
            setIsError({error: [err.response.data]})
        }

        setAddProduct({
            name: "",
            price: "",
            description: ""
        })
    }

    const handleChange = e => {
        const {value, name} = e.target

        setAddProduct({
            ...addProduct,
            [name]: value
        })
    }

    const closeForm = () => {
        setIsError({error: []})
        setIsAddProduct(false)
    }

    useEffect(() => {

        const source = axios.CancelToken.source()

        const getProducts = () => { 
            axios.get(`http://localhost:8000/oishi/api/v1/getproductsall`, { cancelToken: source.token }).then((response) => {
                setProducts(response.data.data)
            }).catch(err => {
                return 
            }) 
        }
        getProducts()
        return () => source.cancel()
    })

    return (
        <div className="adminbox">
            <h1 className="allproductstitle"> All Products </h1>
            {products.length > 0 ? products.map(product => {
                return <div className="admindeletebox" key={product._id}>
                    
                    <div className="admindeleteproduct">
                        <div className="admindeletename">
                            <h1> {product.name} </h1>
                        </div>

                        <div className="admindeleteprice">
                            <p> ${product.price} </p>
                        </div>

                        <div className="admindeletebtn">
                            <button onClick={ async () => await axios.delete(`http://localhost:8000/oishi/api/v1/deleteproduct/${product._id}`)}> <strong> X </strong> </button>
                        </div>
                    </div>
                </div>
            }) : <h5 className="noprods"> No Products </h5> }
            
            <div className="adminaddbox">
                <button className="addprodbtn" onClick={() => {
                    setIsAddProduct(true)
                }}> Add Product </button>
            </div>
            <PopUpAddProduct isError={isError} closeForm={closeForm} trigger={isAddProduct} addProduct={addProduct} handleChange={handleChange} handleAddProduct={handleAddProduct} />
        </div>
    )
}

export default AdminPanelPage