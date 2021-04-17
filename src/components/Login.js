import './Login.css'
import { Link, useHistory } from "react-router-dom"
import { useState } from 'react';
import { auth } from '../firebase';

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then( auth => {
            history.push('./')
        }).catch(error => alert(error.message))

    }

    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            console.log(auth);
        })
        .catch(error => alert(error.message));

        if(auth) {
            history.push('./')
        }
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt necessitatibus ad quaerat! Placeat saepe eaque mollitia unde eos reprehenderit, magni error consequuntur atque. Voluptas reprehenderit aliquam sed vitae, earum molestias?</p>

                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>

                
            </div>
        </div>
        
    );
}
 
export default Login;