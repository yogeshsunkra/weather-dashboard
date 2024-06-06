
import React from 'react';
import { useState, useEffect } from 'react';
import './navbar.css'
import './utility.css'
import { getGeoCode } from '../api/apiCalling';
import { FaSearch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Logo from '../assets/logo.png';



const Navbar = () => {

  const [input, setInput] = useState();
  const [data, setData] = useState();



 



  useEffect(() => {

    const timeOutId = setTimeout(() => console.log(input), 500);

    // getGeoCode(input).then(response =>  setData(response.data))
    //   .catch(error => console.log("error :", error));

      return () => clearTimeout(timeOutId);

  }, [input]);


  return (
    <div className='navContainer'>

      <div className='primaryNavbar'>

        <div className='logoContainer'>

          <img src={Logo} alt='Weather Dashboard'></img>

        </div>
        <div className='flex searchBar'>
          <FaSearch />
          <input type='text' id='search '
            placeholder='Search City'
            onChange={(e) => {
              setInput(e.target.value);
              e.preventDefault();
            } }
            autoComplete='off'
          >

          </input>

          <div className='dropdown'>

            {data !== undefined &&(

              console.log("Suugestions",data),

              data.map((item, i) =>
                <div className='suggestions' key={i}  >

                  <div onClick={()=> console.log(`lat:${item.latitude} lon : ${item.longitude}`)}>

                    {item.name},{item.country}</div>

                </div>
              )
            )}


          </div>
        </div>
        <div className='gitBox'><FaGithub /></div>
      </div>







    </div>
  )
}

export default Navbar
