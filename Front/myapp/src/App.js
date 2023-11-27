import Login from './Login';
import { useState } from 'react';

function App() {
    const [logged, setlogged] = useState(false)
    const [userEmail, setEmail] = useState("")
    
    return (
        <div className="App">

            {logged ? `Welcome ${userEmail}` :"not logged"}
            <Login  logged={setlogged} setEmail={setEmail}/>
        </div>
    );
}

export default App;
