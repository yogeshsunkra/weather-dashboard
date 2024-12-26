
import React from 'react';
import { useState, useEffect } from 'react';
import './navbar.css'
import './utility.css'
import { getGeoCode } from '../api/apiCalling';
import { FaSearch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Logo from '../assets/logo.png';
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import OutsideClickHandler from 'react-outside-click-handler';




const Navbar = ({ handleSearch }) => {

  const [input, setInput] = useState();
  const [data, setData] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState(false);



  useEffect(() => {


    getGeoCode(input).then(response => setData(response.data))
      .catch(error => console.log("error :", error));


  }, [input]);


  const toggleSearchBar = () => {

    if (search) {
      enablePageScroll()
      setSearch(false);
    }
    else {
      disablePageScroll()
      setSearch(true);
    }


  }

  return (
    <div className='navContainer'>

      <div className='primaryNavbar'>

        <div className='logoContainer'>

          <img src={Logo} alt='Weather Dashboard'></img>

        </div>
        <div className='searchContainer'

        >


          <div className='searchBar primary'>

            <div className=' flex web-searchBar'>

              <FaSearch />

              <input type='search' id='search '
                placeholder='Search City'
                onChange={(e) => {
                  setInput(e.target.value);
                  e.preventDefault();
                }}
                autoComplete='off'
                onFocus={() => setActive(true)}

              >

              </input>
            </div>



            {active && (



              <div className='dropdown'>

                <OutsideClickHandler onOutsideClick={() => setActive(false)}>

                  {data !== undefined && (

                    console.log("Suugestions", data),

                    data.map((item, i) =>
                      <div className='suggestions' key={i}  >

                        <div className='text-sm font-500' onClick={() => {

                          handleSearch(item.latitude, item.longitude)
                          setLat(item.latitude);
                          setLon(item.longitude);
                          console.log(`lat:${item.latitude} lon : ${item.longitude}`)
                          setActive(false);
                        }}>

                          {item.name},{item.region},{item.country.toUpperCase()}</div>

                      </div>
                    )
                  )}

                </OutsideClickHandler>




              </div>



            )}

          </div>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div className='mob-searchBar' onClick={() => toggleSearchBar()}>
            <FaSearch />
          </div>

          <div className='gitBox'>
            <FaGithub /> </div>
        </div>





      </div>


      {
        search && (
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            background: '#181616',
            height: '100vh'
          }}>
            <div className='mob-search'>

              <div style={{ display : "flex",alignItems:"center"}}>

                <input type='search' id='search '
                  placeholder='Search City'
                  onChange={(e) => {
                    setInput(e.target.value);
                    e.preventDefault();
                  }}
                  autoComplete='off'


                >

                </input>

                <IoClose onClick={()=>toggleSearchBar()}/>

              </div>





              <div className='dropdown'>



                {data !== undefined && (

                  console.log("Suugestions", data),

                  data.map((item, i) =>
                    <div className='suggestions' key={i}  >

                      <div className='text-sm font-500' onClick={() => {

                        handleSearch(item.latitude, item.longitude)
                        setLat(item.latitude);
                        setLon(item.longitude);
                        console.log(`lat:${item.latitude} lon : ${item.longitude}`)
                        toggleSearchBar();
                      }}>

                        {item.name},{item.region},{item.country.toUpperCase()}</div>

                    </div>
                  )
                )}






              </div>





            </div>
          </div>
        )
      }









      {/* <div className='flex searchBar secondary'>
            <FaSearch />


            <input  type='text' id='search '
              placeholder='Search City'
              onChange={(e) => {
                setInput(e.target.value);
                e.preventDefault();
              }}
              autoComplete='off'
              onFocus={() => setActive(true)}

            >

            </input>


            {active && (

              <div className='dropdown'

              // onBlur = {()=>setActive(false)}


              >

                {data !== undefined && (

                  console.log("Suugestions", data),

                  data.map((item, i) =>
                    <div className='suggestions' key={i}  >

                      <div onClick={() => {

                        handleSearch(item.latitude, item.longitude)
                        setLat(item.latitude);
                        setLon(item.longitude);
                        console.log(`lat:${item.latitude} lon : ${item.longitude}`)
                        setActive(false);
                      }}>

                        {item.name},{item.region},{item.country.toUpperCase()}</div>

                    </div>
                  )
                )}


              </div>

            )}

          </div> */}







    </div>




  )
}

export default Navbar
