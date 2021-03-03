import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

// CSS
import './login-styles.css'

// Components 
import PopUpRegister from '../../components/popup-register/popup-register'
import axios from 'axios'

// Redux

// Actions Redux
import {loginOnError, loginClearError, loggedIn} from '../../redux/actions/actions'
import {registerClearError, registerOnError} from '../../redux/actions/actions'
import {successLoggedIn} from '../../redux/actions/actions'

const LoginPage = () => {

    const dispatch = useDispatch()
    const isLoginError = useSelector(state => state.loginError)
    const isRegisterError = useSelector(state => state.registerError)

    const [isRegister, setIsRegister] = useState(false)
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: ""
    })

    const closeForm = () => {
        setIsRegister(false)
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const info = await axios.post(`https://oishi-fh-api-react.herokuapp.com/oishi/api/v1/login`, login)

            dispatch(loginClearError())
            dispatch(loggedIn())
            dispatch(successLoggedIn(info.data.user))
            window.localStorage.setItem('token', info.data.token)
        } catch (err) {
            dispatch(loginOnError(err.response.data))
            setLogin({
                email: "",
                password: ""
            })
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault()

        try {
            const info = await axios.post(`https://oishi-fh-api-react.herokuapp.com/oishi/api/v1/signup`, register)

            dispatch(registerClearError())
            dispatch(loggedIn())
            dispatch(successLoggedIn(info.data.user))
            window.localStorage.setItem('token', info.data.token)
        } catch (err) {
            dispatch(registerOnError(err.response.data))
            setRegister({
                name: "",
                email: "",
                password: ""
            })
        }
    
    }

    const handleChangeLogin = e => {
        const { value, name } = e.target

        setLogin({
            ...login,
            [name]: value
        })
    }

    const handleChangeRegister = e => {
        const { value, name } = e.target

        setRegister({
            ...register,
            [name]: value
        })
    }

    return (
        <div className="loginbox">
            <div className="login1">
                <h1> Tastely Uniquely </h1>
            </div>

            <div className="login2">
                <form onSubmit={handleLogin}>
                    <h1> Login </h1>
                    {isLoginError ? isLoginError.error.map(error => {
                        return (
                            <p key={error.error.msg} style={{color: `red`}}> {error.error.msg} </p>
                        )
                    }) : "" }
                    <input type="email" name="email" placeholder="Email" value={login.email} onChange={handleChangeLogin} />
                    <input type="password" name="password" placeholder="Password" value={login.password} onChange={handleChangeLogin} />

                    <div className="loginbtns">
                    <button type="submit"> Login </button>
                    <p onClick={() => {
                        setIsRegister(true)
                    }}> Don't have a account? <span className="regisnow"> Register now! </span> </p>
                    </div>
                </form>
                <PopUpRegister trigger={isRegister} isRegisterError={isRegisterError} closeform={closeForm} register={register} handleChangeRegister={handleChangeRegister} handleRegister={handleRegister}/>
            </div>
        </div>
    )
}

export default LoginPage