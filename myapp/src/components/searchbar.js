import { IoMdSearch } from "react-icons/io";

const Searchbar = ()=>{
    return(
        <div className='flex justify-center items-center bg-black p-2'>
            <div className='flex justify-center items-center bg-white text-black rounded px-2 py-1'>
                <input type='text' name='search' placeholder='search' className='outline-none'/>
                <IoMdSearch />
            </div>
        </div>
    )
}

export default Searchbar;