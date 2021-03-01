import React from 'react'
// import {useDispatch, useSelector} from 'react-redux'

// CSS
import './popup-register-styles.css'

const PopUpRegister = ({trigger, closeform, register, handleChangeRegister, handleRegister, isRegisterError}) => {

    // const isError = useSelector(state => state.errors)

    return (trigger) ? (
        <div className="popupregister">
            {/* <div className="papi"> */}
            <div className="popup1">
                <button onClick={closeform}> X </button>
            </div>

            <div className="popup2">
                <form onSubmit={handleRegister}>
                    <h1> Register </h1>
                    {isRegisterError ? isRegisterError.error.map(error => {
                        console.log(error.error.msg)
                        return <p key={error.error.msg} style={{color: `red`}}> {error.error.msg} </p>
                    }) : "" }
                    <input type="email" name="email" placeholder="Email" value={register.email} onChange={handleChangeRegister} />
                    <input type="password" name="password" placeholder="Password" value={register.password} onChange={handleChangeRegister} />
                    <button type="submit"> Register </button>
                </form>
            </div>
        </div>
    ) : ""
}

export default PopUpRegister