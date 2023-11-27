/* TODO - add your code to create a functional React component that renders a registration form */
import { useState } from "react";

const Register = ({setToken}) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
      
      event.preventDefault()
      
      try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            })
        } );
        const jsonResponse = await response.json();
        console.log(jsonResponse);

        setToken(jsonResponse.token);



     } catch (error){
        setError(error.message)
     }
    }

  return (
    <div className="register">
      <h1>Register</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        
        <label>
          First Name:<input value={firstname} onChange={(event)=> {setFirstname(event.target.value)}} />
        </label>

        <label>
          Last Name:<input value={lastname} onChange={(event)=> {setLastname(event.target.value)}} />
        </label>

        <label>
          Email:<input value={email} onChange={(event)=> {setEmail(event.target.value)}} />
        </label>

        <label>
          Password:<input value={password} onChange={(event) => {setPassword(event.target.value)}}/>
        </label>

        <button>Submit</button>

      </form>
    </div>
  );
};

export default Register;
