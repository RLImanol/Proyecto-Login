import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Registro.css'

function Login() {

    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/login', values)

        .then(res => { return navigate('/') })
        // } console.log("Entrando...")) 
        .catch(err => console.log(err))
        // .then(res => {
        //     if(res.data.Status === "Success"){
        //         navigate('/')
        //     } else {
        //         alert(res.data.Error);
        //     }
        // })
        // .then(err => console.log(err));
    }

  return (
    <div className='login'>
    <h1 className='login__heading'>Login</h1>
    <form  onSubmit={handleSubmit} className='login__form'>

        <div className='mb-3'>
            <label className='user-label' htmlFor='name'>Email</label>
            <div className="input-group">
                <input required="" type="email" name="email"  className="input" onChange={e => setValues({...values, email: e.target.value})} />
            </div>
        </div>

        <div className='mb-3'>
            <label className='user-label' htmlFor='name'>Password</label>
            <div className="input-group">
                <input required="" type="password" name="password"  className="input" onChange={e => setValues({...values, password: e.target.value})}  />
            </div>
        </div>

        <button type='submit' className='btn-login'> Log in </button>
        <Link to = "/register" className='btn-sing-Up'>Sing Up</Link>


    </form>
    
    <span className='login__circuit-mask'></span>
  </div>
  )
}

export default Login