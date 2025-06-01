import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useState } from 'react';
import axios from 'axios';

const Signup = ({setMainPage})=>{
    const url = process.env.REACT_APP_URL
    
    const [ inpFild,setInpFild ] = useState({
        uemail:'',
        ufullname:'',
        ulogo:'',
        ugender:'',
        uname:'',
        upass:'',
        uterm:'',
    })
    
    const cngInpValFun = (e)=>{
        const oldDta = {...inpFild}
        const inpName = e.target.name;
        const inpVal = e.target.value;
        
        oldDta[inpName]=inpVal;
        setInpFild(oldDta);
    }
    
    const signupSubFun = (e)=>{
        e.preventDefault();
        
        axios.post(`${url}/admin/signup`,inpFild)
        .then(()=>{
            alert('Register sucsess');
            setMainPage('login');
        })
        .catch((err)=>alert('Ragister failed.....'));
        
        setInpFild({
            uemail:'',
            ufullname:'',
            ulogo:'',
            ugender:'',
            uname:'',
            upass:'',
            uterm:'',
        })
    }
    
    return(
        <div className='bg-slate-800 text-white w-screen min-h-[100vh]'>
            
            <div className='flex justify-between items-center px-4 py-2'>
                <h2 className='text-2xl font-bold'>Register Form</h2>
                <IoArrowBackCircleOutline onClick={()=>setMainPage('login')}fontSize={30}/>
            </div>
            
            <div className='w-screen min-h-[70vh] flex justify-center items-center p-4'>
                <form onSubmit={signupSubFun} className='w-[100%] flex flex-col gap-4 md:w-[70%]'>
                    <div>
                        <div>Email :</div>
                        <input onChange={cngInpValFun} value={inpFild.uemail} type='email' name='uemail' placeholder='email' required className='outline-none bg-white text-black rounded px-4 py-2 w-[100%]'/>
                    </div>
                    <div>
                        <div>Full Name :</div>
                        <input onChange={cngInpValFun} value={inpFild.ufullname} type='text' name='ufullname' placeholder='full name' required className='outline-none bg-white text-black rounded px-4 py-2 w-[100%]'/>
                    </div>
                    <div>
                        <div>
                            Profile Image :<input onChange={cngInpValFun} value={inpFild.ulogo} type='file' name='ulogo' className='shadow border rounded w-[100%] px-4 py-2'/>
                        </div>
                    </div>
                    <div>
                        <div>Gender :</div>
                        <div className='flex justify-center items-center gap-4'>
                            <div className='flex justify-center items-center gap-1'>
                                <input onChange={cngInpValFun} type='radio' name='ugender' id='male' value='male'/>
                                <label for='male' className='font-bold'>Male</label>
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <input onChange={cngInpValFun} type='radio' name='ugender' id='female' value='female'/>
                                <label for='female' className='font-bold'>Female</label>
                            </div>
                            <div className='flex justify-center items-center gap-1'>
                                <input onChange={cngInpValFun} type='radio' name='ugender' id='other' value='other'/>
                                <label for='other' className='font-bold'>Other</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>User Name :</div>
                        <input onChange={cngInpValFun} value={inpFild.uname} type='text' name='uname' placeholder='user name' required className='outline-none bg-white text-black rounded px-4 py-2 w-[100%]'/>
                    </div>
                    <div>
                        <div>Password :</div>
                        <input onChange={cngInpValFun} value={inpFild.upass} type='password' name='upass' placeholder='password' required className='outline-none bg-white text-black rounded px-4 py-2 w-[100%]'/>
                    </div>
                    <div className='flex items-center gap-1 mt-6'>
                        <input onChange={cngInpValFun}  value='yes' type='checkbox' name='uterm' required/>I agree accept all <span className='font-bold text-blue-700'>Term & Condition</span>
                    </div>
                    <div>
                        <button type='submit' className='bg-cyan-700 text-white font-bold w-[100%] py-2 rounded'>Register</button>
                    </div>
                </form>
            </div>
            <div className='text-center py-8'>
                Have already an account ? <span onClick={()=>setMainPage('login')} className='font-bold text-blue-700 border-b'>Log In</span>
            </div>
        </div>
    )
}

export default Signup;