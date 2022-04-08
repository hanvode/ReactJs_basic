import { useState } from "react";



const DemoApp3 = () => {
 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const register = () =>{
        //call API
        console.log({
            name, email
        })
         
  }
  return (
    <div style={{ padding: 32 }}>
        <input 
        value={name}
        onChange={e => setName(e.target.value)}
        />
        <br/>
        <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <br/>
        <button onClick={register}>Register</button>
    </div>
  );
};

export default DemoApp3;
