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
min-height:100vh;
width:100%;
overflow:hidden;

display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:50%;
left:50%;
z-index:-10;
transform:translate(-18%, -63%);




 

// Media Query Section




 @media screen and (min-width:360px){

    position:absolute;
    top:50%;
    left:50%;
    z-index:-10;
    transform:translate(-18%, -61%);
    }

 @media screen and (min-width:390px){

    position:absolute;
    top:50%;
    left:50%;
    z-index:-10;
    transform:translate(-18%, -60%);
    }

 @media screen and (min-width:400px){

    position:absolute;
    top:50%;
    left:50%;
    z-index:-10;
    transform:translate(-18%, -60%);
    }

 @media screen and (min-width:500px){

    position:absolute;
    top:50%;
    left:50%;
    z-index:-10;
    transform:translate(-18%, -65%);
    }
    
 @media screen and (min-width:550px){

    position:absolute;
    top:50%;
    left:50%;
    z-index:-10;
    transform:translate(-25%, -65%);
    }

 @media screen and (min-width:650px){

    position:absolute;
    top:50%;
    left:50%;
    z-index:-10;
    transform:translate(-30%, -65%);
    }

 @media screen and (min-width:700px){

    position:absolute;
    top:50%;
    left:50%;
    z-index:-10;
    transform:translate(-34%, -65%);
    }
 @media screen and (min-width:750px){

    position:absolute;
    top:50%;
    left:50%;
    z-index:-10;
    transform:translate(-36%, -65%);
    }


 @media screen and (min-width:768px){

    position:absolute;
    top:50%;
    left:50%;
    z-index:-10;
    transform:translate(18%, -60%);
    }


 @media screen and (min-width:1024px){

    position:absolute;
    top:50%;
    left:50%;
    z-index:-10;
    transform:translate(10%, -62%);
    }
 @media screen and (min-width:1200px){

    position:absolute;
    top:50%;
    left:50%;
    z-index:-10;
    transform:translate(12%, -62%);
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