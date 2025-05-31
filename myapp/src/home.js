import axios from 'axios';
import Header from './components/header.js';
import Content from './components/content.js';
import { useEffect,useState } from 'react';

const Home = ({setMainPage})=>{
    const url = process.env.REACT_APP_URL
    const [ userInfo,setUserInfo ] = useState({});
    
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem('jwtoken'));
        if(!token){
            setMainPage('login');
        }else{
            axios.get(`${url}/user`,{headers:{Authorization:`Bearer ${token}`}})
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
            <Header setMainPage={setMainPage}/>
            <Content userInfo={userInfo}/>
        </div>
    )
}

export default Home;