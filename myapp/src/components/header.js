import { MdMenu } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react';
import Navbar from './navbar.js';
import Searchbar from './searchbar.js';
import Logout from '../logout.js';

const Header = ({setMainPage})=>{
    const [ headerComp,setHeaderComp ] = useState('');
    
    const renderFun = ()=>{
        switch (headerComp){
            case 'navbar':
                return <Navbar setHeaderComp={setHeaderComp}/>
            case 'searchbar':
                return <Searchbar setHeaderComp={setHeaderComp}/>
            case 'logout':
                return <Logout setMainPage={setMainPage}/>
            default:
                return ''
        }
    }
    
    return(
        <div>
            <div className='flex justify-between items-center shadow px-4 py-2'>
                <div className='md:hidden'>
                    <MdMenu onClick={()=>setHeaderComp('navbar')} fontSize={30}/>
                </div>
                <div className='font-bold text-2xl'>
                    <h2>Tk Furniture</h2>
                </div>
                <div className='hidden md:block'>
                    <div className='flex justify-center items-center bg-white text-black rounded px-2 py-1'>
                        <input type='text' name='search' placeholder='search' className='outline-none'/>
                        <IoMdSearch />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <div className='md:hidden'>
                        <IoMdSearch onClick={()=>(!headerComp)?setHeaderComp('searchbar'):setHeaderComp('')} fontSize={20}/>
                    </div>
                    <div>
                        <span onClick={()=>(!headerComp)?setHeaderComp('logout'):setHeaderComp('')} className='font-bold bg-white text-slate-700 rounded-full px-2 py-1'>T</span>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex justify-between items-center bg-white text-slate-700'>
                <div className='px-2'>
                    <MdKeyboardArrowLeft fontSize={30}/>
                </div>
                <div className='flex items-center list-none my-2 gap-2 overflow-hidden'>
                    <li className='border rounded px-2 capitalize font-bold'>list1</li>
                    <li className='border rounded px-2 capitalize font-bold'>list1</li>
                    <li className='border rounded px-2 capitalize font-bold'>list1</li>
                    <li className='border rounded px-2 capitalize font-bold'>list1</li>
                    <li className='border rounded px-2 capitalize font-bold'>list1</li>
                    <li className='border rounded px-2 capitalize font-bold'>list1</li>
                    <li className='border rounded px-2 capitalize font-bold'>list1</li>
                    <li className='border rounded px-2 capitalize font-bold'>list1</li>
                    <li className='border rounded px-2 capitalize font-bold'>list1</li>
                    <li className='border rounded px-2 capitalize font-bold'>list1</li>
                </div>
                <div className='px-2'>
                    <MdKeyboardArrowRight fontSize={30}/>
                </div>
            </div>
            <div className='md:hidden'>
                {renderFun()}
            </div>
        </div>
    )
}

export default Header;