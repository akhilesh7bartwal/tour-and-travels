import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        try{          
            await axios.post('/login',{email,password})
            .then(res => {
                console.log('successfully done ho gaya',res)
            });
            alert('Login successful.');
        }
        catch(error){
            alert('Login failed.')
        }
        
    } 
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">LOGIN</h1>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}> 
                <input type="email" placeholder='abc@gmail.com' 
                value={email}
                onChange={event => setEmail(event.target.value)}/>
                <input type="password" placeholder="password"
                value={password}
                onChange={event => setPassword(event.target.value)}/>
                <button className="primary">Login</button>
                <div className="text-center py-2 text-gray-500">
                    Don't have an account yet?
                    <Link className="underline text-black" to={'/register'}> Register now </Link>
                </div>
            </form>
            </div>

        </div>
    )
}