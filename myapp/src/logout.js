const Logout = ({setMainPage})=>{
    const logoutFun = ()=>{
        localStorage.removeItem('jwtoken');
        setMainPage('login');
    }
    return(
        <div className='bg-black p-2 absolute right-[1rem] top-[4rem]'>
            <button onClick={logoutFun}className='bg-red-400 px-4 py-2 rounded font-bold'>Log Out</button>
        </div>
    )
}

export default Logout;