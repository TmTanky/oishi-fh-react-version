import React from 'react'

// CSS
import './popup-add-product-styles.css'

const PopUpAddProduct = ({trigger, addProduct, closeForm, handleChange, handleAddProduct, isError}) => {
    // isError.error.map(err => {
    //     console.log(err)
    // })
    // isError.error.map(item => {
    //     console.log(item.error.msg)
    // })
    return (trigger) ? (
        <div className="popupaddproduct">
            <div className="popupadd1">
                <button onClick={closeForm}> X </button>
            </div>

            <div className="popupadd2">
                <form onSubmit={handleAddProduct}>
                    <h1> Add Product </h1>
                    {isError ? isError.error.map(err => {
                    return <p key={err.error.status} style={{color: 'red'}}> {err.error.msg} </p>
                    }): ""}
                    <input type="text" name="name" placeholder="Name" value={addProduct.name} onChange={handleChange} />
                    <input type="text" name="price" placeholder="Price" value={addProduct.price} onChange={handleChange} />
                    <input type="text" name="description" placeholder="Description" value={addProduct.description} onChange={handleChange} />
                    <button type="submit"> Add Product </button>
                </form>
            </div>
        </div>
    ) : ""
}

export default PopUpAddProduct