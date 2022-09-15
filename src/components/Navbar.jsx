import React, {useState} from 'react';

import styled from 'styled-components';
import {navLinks} from './data';
import {close, menu} from '../assets'

function Navbar() {
 const [toggle, setToggle] = useState(false);

 const ToggleBtn = () =>{

    setToggle((toggle)=>{
        return !toggle;
    })
    toggle?document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden'
    
 }
  


  return (
    <>
    <Container className='NavContainer'>
        <Wrap>
            <div>
                <h1 className='fs-3xl'>
                    <a href='/' className='text-color4'>

                    GenZ<span className='text-color1'>Bank</span>

                    </a>
                </h1>
            </div>


            <div>
                <ul className={`${toggle ? " active" : "inactive"} sidebar`}>
                   {navLinks.map(({id, title})=>(
                

                        <li key={id} className='fs-lg'>
                            <a href={`${title}`} className='text-color4'>{title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <MenuIcon >
               
                 <div>

                    <img src={toggle ? close : menu}  alt="Menu"  onClick={()=> ToggleBtn()}/>
                    
                </div>
            </MenuIcon>

       </Wrap>
    </Container>
    </>
  )
}

const Container = styled.nav`

width:100%;
min-height:10vh;
overflow:hidden;
z-index:10;

}



`

const Wrap = styled.div`


max-width: 90%;
margin: 0.8rem auto;
display: flex;
align-items:center;
justify-content:space-between;
padding:1rem;
z-index:10;


ul{
    
    flex-direction:column;
    gap:3rem;
    padding:2rem;
    border-radius:1rem;
    position: fixed;
    top:8rem;
    right:0;
    margin-right:3.5rem;
    background: linear-gradient(
    144.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%);
    z-index:10;

 
    li{
        a:hover{
            color: #00f6ff;
        }
    }
    
}


 @media screen and (min-width:768px){
  
    ul{

        display:flex;
        flex-direction:row;
        background: transparent;
        position:relative;
        top:0;
        margin-right:0;
        


 }

`

const MenuIcon = styled.div`

justify-self:end;
cursor:pointer;

img{
    width:3rem;
    height:2.5rem;
    object-fit:contain;
    
 
}

@media screen and (min-width:768px){ 

 
    img{
    width:3.5rem;
    height:3rem;
    object-fit:contain;
    
 
}
   
}

@media screen and (min-width:768px){ 

    display:none;
   
}

`

export default Navbar