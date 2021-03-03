import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

// CSS
import './carts-styles.css'

// Actions Redux
import {removeItem} from '../../redux/actions/actions'

const CartsPage = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.carts)

    return (
        <div className="itemrootbox">
            <h1> My Cart </h1>

            {cartItems.carts.length > 0 ? cartItems.carts.map(item => {
                return (
                    <div className="itembox" key={item._id}>
                        <div className="itemname">
                            <h5> <strong> {item.name} </strong> </h5>
                        </div>

                        <div className="itemprice">
                            <p> Price: </p> <p> <strong> ${item.price} </strong> </p>
                        </div>

                        <div className="itemqty">
                            <p> Quantity: </p> <p> <strong> {item.quantity} </strong> </p>
                        </div>

                        <div className="itemdelete">
                            <button onClick={(e) => {
                                e.preventDefault()
                                dispatch(removeItem(item))
                            }}> <strong> X </strong> </button>
                        </div>
                    </div>
                )
            }) : <h5 className="noitems"> No Items, Shop now </h5>}

            {/* {cartItems.carts.map(item => {
                return (
                    <div className="itembox" key={item._id}>
                        <div className="itemname">
                            <h5> Name: <strong> {item.name} </strong> </h5>
                        </div>

                        <div className="itemprice">
                            <p> Price: <strong> ${item.price} </strong> </p>
                        </div>

                        <div className="itemqty">
                            <p> Quantity: <strong> {item.quantity} </strong> </p>
                        </div>

                        <div className="itemdelete">
                            <button onClick={(e) => {
                                e.preventDefault()
                                dispatch(removeItem(item))
                            }}> <strong> X </strong> </button>
                        </div>
                    </div>
                )
            })} */}
        </div>
    )
}

export default CartsPage