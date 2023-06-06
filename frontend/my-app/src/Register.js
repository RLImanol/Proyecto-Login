import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Registro.css'

function Register() {

    const [values, setValues] = useState({
        name:'',
        email:'',
        password:''
    })

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/register', values)
        .then(res => console.log("Registro Exitoso"))
        .catch(err => console.log(err))
        // .then(res => {
        //     if(res.data.Status === "Success"){
        //         navigate('/login')
        //     } else {
        //         alert("Error")
        //     }
        // })
        // .then(err => console.log(err))
    }

  return (
    <div className='login'>
    <h1 className='login__heading'>Sing Up</h1>
    <form onSubmit={handleSubmit} className='login__form'>
        
        <div className='mb-3'>
            <label className='user-label' htmlFor='name'>User</label>
            <div className="input-group">
                <input required="" type='text' name='name' className='input' onChange={e => setValues({...values, name: e.target.value})} />
            </div>
        </div>

        <div className='mb-3'>
            <label className='user-label' htmlFor='name'>Email</label>
            <div className="input-group">
                <input required="" type="email" name="email"  className="input" onChange={e => setValues({...values, email: e.target.value})} />
            </div>
        </div>

        <div className='mb-3'>
            <label className='user-label' htmlFor='name'>Password</label>
            <div className="input-group">
                <input required="" type="password" name="password"  className="input" onChange={e => setValues({...values, password: e.target.value})} />
            </div>
        </div>

        <Link to = "/login" className='btn-login'> Log in </Link>
        <button type='submit' className='btn-sing-Up'> Sing Up </button>
        <p>Hola mundo</p>

    </form>
    
    <span className='login__circuit-mask'></span>
  </div>
  )
}

export default Register

