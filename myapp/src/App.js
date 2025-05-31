import { useState } from 'react';
import Login from './login.js';
import Signup from './signup.js';
import Home from './home.js';

const App = ()=>{
    
    const [ mainPage,setMainPage ] = useState('');
    
    const mainPageFun = ()=>{
        switch (mainPage){
            case 'login':
                return <Login setMainPage={setMainPage}/>
            case 'signup':
                return <Signup setMainPage={setMainPage}/>
            case 'home':
                return <Home setMainPage={setMainPage}/>
            default:
                return <Home setMainPage={setMainPage}/>
        }
    }
    
    return(
        <div className='relative'>
            {mainPageFun()}
        </div>
    );
}

export default App;
