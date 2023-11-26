/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react";

const Login = (token) => {
    const [error, setError] = useState(null);

    const handleClick = async () => {

        try {
            const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login',{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: 'ssmithi@example.com',
                    password: 'sam345'
                })
            })
            const jsonResponse = response.json();
            
            console.log("hi");

        } catch (error){
            setError(error.message)
        }

    }
    
  return (
    <div className="login">
      <h1>Login</h1>

      {error && <p>{error}</p>}

      <button onClick={() => {handleClick()}}>Authenticate Token</button>
    </div>
  );
};

export default Login;
