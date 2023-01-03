import { useState } from "react";
//import About from "./About";

const Navbar = () =>{

    const[myName, setmyName] = useState ('Robin');
    const onClickname = () =>{
        setmyName('Thairu');
    }

    return(
        <nav className="bg-cyan-900 ">
            <div className="flex flex-row gap-4 justify-between p-2 font-semibold ml-4 font-mono text-2xl text-orange-500 " >
                <h1 className = "text-amber-500 text-2xl md:text-3xl">

                <button onClick={onClickname} className='hover:text-orange-700'>{myName}</button></h1>
                
                {/*Links*/}
                <div className="  ">
                <a href = "/" className=" p-2 hover:text-lime-300 ">Home</a>
                <a href = "/about" className=" p-2 hover:text-lime-400 " >About</a>
                <a href = "/blogs" className=" p-2 hover:text-lime-500 " >Blogs</a>
                </div>
            </div>

        </nav>

    );
}
export default Navbar;