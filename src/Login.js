import React, { useState } from 'react'
import { auth, googleprovider,db } from './console/firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { async } from '@firebase/util'
import { useNavigate } from 'react-router-dom'
import {max} from './images/max.jpg'
const Login = () => {
    let navigate = useNavigate()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const submitHandler = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
        navigate("/home")
    }
    const signIngoogle = async () => {
        await signInWithPopup(auth, googleprovider)
        navigate("/home")
    }
    console.log(auth)
    return (
        <div style={{ height: "100vh", width: "100%", backgroundImage: "url('http://localhost:3000/static/media/max.4855b4f9385e8774b841.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", alignContent: "center", justifyContent: "center", alignItems: "center" }}>
            <div className='card' style={{ backgroundColor: "#000", opacity: "0.7", height: '100vh', width: '100%', }}>
            {/* <img src={'/static/media/max.4855b4f9385e8774b841.jpg'}></img> */}
                <div className='card' style={{ backgroundColor: "#000", width: "18rem", opacity: "0.7", padding: "10px", top: "200px", left: "500px", boxShadow: "20px 5px 5px red" }}>
                    <h3 style={{ color: "white" }}>Login</h3>
                    <div style={{ width: "fit-content", padding: "10px", outlineColor: "#000", outlineWidth: "1px", border: "1px solid", borderRadius: "40px", height: "fit-content",backgroundColor:"white" }}>

                        <input style={{ outline: "none", border: "0px" }} type="text" name="user" id="user" onChange={(e) => { setemail(e.target.value) }} required placeholder='email'></input>
                    </div>

                    <br></br>
                    <div style={{ width: "fit-content", padding: "10px", outlineColor: "#000", outlineWidth: "1px", border: "1px solid", borderRadius: "40px", height: "fit-content",backgroundColor:"white" }}>

                        <input style={{ outline: "none", border: "0px", }} type="password" name="user" id="user" onChange={(e) => { setpassword(e.target.value) }} required placeholder='password'></input>
                    </div>
                    <br>
                    </br>
                    <button onClick={() => {
                        signIngoogle()
                    }}>signIn with google</button>
                    <br></br>
                    <button className='btn btn-outline-danger' onClick={() => submitHandler()}>Submit</button>

                </div>
            </div>
        </div >
    )
}
export default Login;