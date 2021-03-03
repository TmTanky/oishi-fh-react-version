export const addItemtoCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(
        cartItem => cartItem._id === cartItemToAdd._id
    )

    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem._id === cartItemToAdd._id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemtoCart = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find(
        cartItem => cartItem._id === cartItemToRemove._id
    )

    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem._id !== cartItemToRemove._id)
    }

    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem._id === cartItemToRemove._id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)
    }

    return [...cartItems]
}