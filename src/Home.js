//import {useState} from 'react';
//import BlogList from './BlogList';
import Blog from './Blog'

const Home = () => {


   /* const[Name, setName] = useState ('Thairu');
    const[Age, setAge] = useState (20);

    const handleClick = () =>{
        alert("Hello User");
    }
    const clickAgain = (name) =>{
        console.log("hello" + name);
    }
    
    const newClick = () =>{
        setName("Robin");
        setAge(21);
    }
*/
    return(
       
        <div className="bg-gray-200">
        <div><Blog/></div>

            <div>
           {/* <button onClick={handleClick} className="p-4"> Click me</button>
            <button onClick={()  => clickAgain("Robin")}  className="p-4">Click again</button>
            <button onClick={newClick}  className="p-4">
            <p>{Name} is {Age} years old</p>
            </button>*/}
            </div>

            </div>



    );
}

export default Home;