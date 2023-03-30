import { async } from '@firebase/util'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './console/firebase'
import { useNavigate } from 'react-router-dom'
import {db} from './console/firebase'
import { getDocs } from 'firebase/firestore'
const Home = () => {
  let navigate = useNavigate()
  let logOut = async () => {

    await signOut(auth)
    navigate(-1)
  }

  console.log(auth)
  return (
    <div>
      <button className='btn btn-outline-success' onClick={() => {
        logOut()
      }}>Log Out</button>
    </div>
  )
}

export default Home;
