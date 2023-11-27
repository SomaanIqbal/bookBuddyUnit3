/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";

const Login = ({setToken}) => {
    const [error, setError] = useState(null);
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleClick = async () => {

        try {
            const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const jsonResponse = await response.json();
            
            setSuccessMessage(jsonResponse.message);
            setToken(jsonResponse.token)
            

        } catch (error){
            setError(error.message)
        }

    }
    
  return (
    <div className="login">
      <h1>Login</h1>

      {error && <p>{error}</p>}

      <label>
          Email:<input value={email} onChange={(event)=> {setEmail(event.target.value)}} />
        </label>

        <label>
          Password:<input value={password} onChange={(event) => {setPassword(event.target.value)}}/>
        </label>

      <button onClick={() => {handleClick()}}>Login</button>

      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Login;
