import { MdKeyboardBackspace } from "react-icons/md";

const Navbar = ({setHeaderComp})=>{
    return(
        <div className='bg-black w-[50%] min-h-[100vh] absolute top-0 left-0'>
            <div className='flex justify-between items-center px-4 py-2 shadow'>
                <h2>Navbar</h2>
                <MdKeyboardBackspace onClick={()=>setHeaderComp('')} />
            </div>
            <div className='flex flex-col gap-4 p-2 mt-4'>
                <li className='list-none px-2 py-1 border rounded'>List1</li>
                <li className='list-none px-2 py-1 border rounded'>List1</li>
                <li className='list-none px-2 py-1 border rounded'>List1</li>
                <li className='list-none px-2 py-1 border rounded'>List1</li>
                <li className='list-none px-2 py-1 border rounded'>List1</li>
                <li className='list-none px-2 py-1 border rounded'>List1</li>
                <li className='list-none px-2 py-1 border rounded'>List1</li>
                <li className='list-none px-2 py-1 border rounded'>List1</li>
            </div>
        </div>
    )
}

export default Navbar;