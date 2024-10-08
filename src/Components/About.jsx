import React, { useState } from 'react'
import './About.css'


function About() {

  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
  
    <div className='div' id='about' style={{backgroundColor: isDarkTheme ? "#000" : "#fff",color: isDarkTheme ? "#fff" : "#000",transition: "background-color 0.3s ease"}}>
    <button className='btn btn-secondary' onClick={toggleTheme} style={{ padding: "10px 20px",marginLeft:"700px"}}></button>
        <div className="row">
            <div className="col-6">
      <h3 className='cols'>ABOUT ME</h3>
      <p className='para1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio vero esse illo dolor optio ullam quisquam aliquid fugiat eligendi officia ducimus, saepe facilis explicabo magni architecto soluta voluptatem culpa.
      Nihil, maxime voluptate perspiciatis, dolore eaque nisi aspernatur dolor quis natus saepe aliquam vel reiciendis ratione necessitatibus. Et libero qui, adipisci delectus sequi consequatur voluptate odit, autem unde, laborum nostrum?</p>
            </div>
            <div className="col-6">
                <img className='pic' src="https://media.licdn.com/dms/image/v2/C5603AQG3F7hZRdm1MA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1549150589077?e=2147483647&v=beta&t=QCQ5UlH4ki1qDJ0yQRMxOsjv_xE0jcKcNmK04N15DuU" alt="" />
            </div>
        </div>
    </div>


    <div className='bg-dark' id='projects'>
      <h3 className='text-light text-center mt-5'>PROJECTS</h3>
      <div className='mb-4 m-5'>
        <img className='ms-5 slide-in' width={"300px"} height={"400px"} src="https://i.pinimg.com/564x/2c/98/e0/2c98e0a427e272d9dc51b74de7fdf17c.jpg" alt="" />
        <img className='ms-5 slide-in' width={"300px"} height={"400px"} src="https://i.pinimg.com/564x/fb/26/76/fb26766e1aafffb561de00d5d7351d2e.jpg" alt="" />
        <img className='ms-5 slide-in' width={"300px"} height={"400px"} src="https://i.pinimg.com/564x/8e/e1/80/8ee1800da1d41552b8c93e028482f5fa.jpg" alt="" />
        <img className='ms-5 slide-in' width={"300px"} height={"400px"} src="https://i.pinimg.com/474x/e7/2a/a8/e72aa80e1e494b97d8a66bc42448de08.jpg" alt="" />
      </div>
      <div className='m-5'>
        <img className='ms-5 slide-out' width={"300px"} height={"400px"} src="https://i.pinimg.com/564x/4f/86/dc/4f86dc29322e6ecbe206f8809724dca6.jpg" alt="" />
        <img className='ms-5 slide-out' width={"300px"} height={"400px"} src="https://i.pinimg.com/474x/73/15/de/7315de110f9bdd25aa0eb7dff3b35142.jpg" alt="" />
        <img className='ms-5 slide-out' width={"300px"} height={"400px"} src="https://i.pinimg.com/474x/0d/f3/a7/0df3a78d5899b65bfbcc2f40e5f20457.jpg" alt="" />
        <img className='ms-5 slide-out' width={"300px"} height={"400px"} src="https://i.pinimg.com/564x/08/ea/87/08ea8765072ac0757d2b6f184252e2d5.jpg" alt="" />
      </div>
    </div>



<div className='contact' id='contact'>
<h3 className='text-center text-light mt-3 pt-5'>CONTACT ME</h3>
    <div className='div1 pt-5'>
        <i class="fa-solid fa-location-dot i"></i>
        <i class="fa-solid fa-phone i"></i>
        <i class="fa-solid fa-envelope i"></i>
    </div>

    <div className='div2'>
        <p style={{marginLeft:40}}>ADDRESS</p>
        <p style={{marginLeft:15}}>CONTACT NUMBER</p>
        <p style={{marginRight:70}}>EMAIL ADDRESS</p>
    </div>

    <div className='div3 pb-5'>
        <a className='a' style={{marginLeft:10}} href="">Ernakulam,Kerala</a>
        <a className='a' href=""> 9956789457</a>
        <a className='a' style={{marginRight:40}} href=""> jasonmartin@gmail.com</a>
    </div>

<br /><br />
    <div className='row'>
      <div className="col-3"></div>
      <div className='col-6'>
        <input type="text" placeholder="Your Name" className='form-control' style={{height:"15px"}}/><br />
        <input type="text" placeholder="Your Email" className='form-control' style={{height:"15px"}}/><br />
        <textarea name="" id="" rows="8" cols="23" placeholder="Message" className='form-control' style={{height:"100px"}}></textarea><br />
        <div className='text-center'>
        <button className='mb-4 p-2 ps-4 pe-4' style={{borderRadius:"20px"}}>Send</button>
        </div>
      </div>
      <div className="col-3"></div>
    </div>
    </div>
    </>
  )
}

export default About
