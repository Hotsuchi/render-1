import axios from 'axios';
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
        <div>
            {userInfo.uid}
            <button onClick={logout} className='border bg-red-700'>Log Out</button>
        </div>
    )
}

export default Home;