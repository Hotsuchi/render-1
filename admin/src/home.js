import axios from 'axios';
import { useEffect,useState } from 'react';

const Home = ({setMainPage})=>{
    const url = process.env.REACT_APP_URL
    const [ userInfo,setUserInfo ] = useState({});
    
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('adminjwtoken'));
        if(!token){
            setMainPage('login');
        }else{
            axios.get(`${url}/admin`,{headers:{Authorization:`Bearer ${token}`}})
            .then((resp)=>{
                setUserInfo({...resp.data})
            })
            .catch((err)=>{
                setMainPage('login');
            })
        }
    },[])
    
    const logout = ()=>{
        localStorage.removeItem('jwtoken');
        setMainPage('login');
    }
    
    return(
        <div className='w-screen min-h-[100vh] bg-slate-800 text-white'>
            admin home page
        </div>
    )
}

export default Home;