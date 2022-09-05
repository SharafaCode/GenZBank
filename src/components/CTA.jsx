import React from 'react';
import styled from 'styled-components';
import {arrowUp} from '../assets';


function CTA() {
  return (
    <>
    

    <Container>
        <Button>
            <div>
               
               <a href="/" className='text-color1'>
                <span className='flex'>Get{" "} <img src={arrowUp} alt="get-started" /></span> 
                Started
               </a>

            </div>
        </Button>
    </Container>


    </>
  )
}

const Container = styled.section`

display:flex;
align-items:center;
justify-content:center;
position:absolute;
z-index:-10;
transform:translateY(-12.5rem);
margin-right:5rem;
right:0;



 

// Media Query Section




 @media screen and (min-width:768px){
     margin-right:38rem;
       
    }


 @media screen and (min-width:850px){
     margin-right:42rem;
       
    }


 @media screen and (min-width:950px){
     margin-right:48rem;
       
    }



    @media screen and (min-width:1024px){
      
          margin-right:0rem;
       }



// End of Media Query Section


`



const Button = styled.button`

    width:8rem;
    height:8rem;
    border-radius:50%;
    border:0.1rem solid  #00f6ff;
    background:transparent;
   

    a{
     font-size: clamp(1.4rem, calc(0.92rem + 0.39vw), 1.20rem);
     
    }

    
`

export default CTA;