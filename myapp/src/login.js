import axios from 'axios';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useState } from 'react';

const Login = ({setMainPage})=>{
    const url = process.env.REACT_APP_URL
    
    const [ inpFild,setInpFild ] = useState({
        uname:'',
        upass:''
    })
    
    const cngInpValFun = (e)=>{
        const oldDta = {...inpFild}
        const inpName = e.target.name;
        const inpVal = e.target.value;
        
        oldDta[inpName]=inpVal;
        setInpFild(oldDta);
    }
    
    const loginSubFun = (e)=>{
        e.preventDefault();
        
        axios.post(`${url}/user/login`,inpFild)
        .then((resp)=>{
            alert('login sucsess');
            localStorage.setItem('jwtoken',JSON.stringify(resp.data));
            setMainPage('home');
        })
        .catch((err)=>alert('Login failed.....'))
        
        setInpFild({
            uname:'',
            upass:''
        })
    }
    
    return(
        <div className='bg-slate-800 text-white w-screen min-h-[100vh]'>
            
            <div className='flex justify-between items-center px-4 py-2'>
                <h2 className='text-2xl font-bold'>Log In</h2>
                <IoArrowBackCircleOutline onClick={()=>setMainPage('signup')}fontSize={30}/>
            </div>
            
            <div className='w-screen min-h-[70vh] flex justify-center items-center p-4'>
                <form onSubmit={loginSubFun} className='w-[100%] flex flex-col gap-4 md:w-[70%]'>
                    <div>
                        <div>User Name :</div>
                        <input onChange={cngInpValFun} value={inpFild.uname} type='text' name='uname' placeholder='user name' required className='outline-none border-b px-2 py-2 w-[100%]'/>
                    </div>
                    <div>
                        <div>Password :</div>
                        <input onChange={cngInpValFun} value={inpFild.upass} type='password' name='upass' placeholder='password' required className='outline-none border-b px-2 py-2 w-[100%]'/>
                    </div>
                    <div className='text-right'>
                        Forgot my password : <span className='font-bold text-blue-700'>Forgot password?</span>
                    </div>
                    <div className='flex items-center gap-1 mt-6'>
                        <input type='checkbox'/>Keep Remember
                    </div>
                    <div>
                        <button type='submit' className='bg-cyan-700 text-white font-bold w-[100%] py-2 rounded'>Sign In</button>
                    </div>
                </form>
            </div>
            <div className='text-center py-8'>
                I have't any account yet ? <span onClick={()=>setMainPage('signup')} className='font-bold text-blue-700 border-b'>Sign Up</span>
            </div>
        </div>
    )
}

export default Login;