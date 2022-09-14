import React from 'react';
import styled from 'styled-components';
import {card} from '../assets'
import Zoom from 'react-reveal/Zoom';

function CardDeal() {
  return (
    <Container>
        <Wrap>
            <LeftCol>
                <Zoom>
                    <div>
                        <h2>
                            Find a better card deal <br />
                            in few easy steps.
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores est ipsum excepturi cumque corrupti recusandae reiciendis a quasi repellat velit!</p>

                        <button type='button'><a href="/">Get Started</a></button>

                    </div>
                </Zoom>
            </LeftCol>
            <RightCol>
                <Zoom>

                  <img src={card} alt="card" />
                </Zoom>
            </RightCol>
        </Wrap>
    </Container>
  )
}


const Container = styled.section`

width:100%;
min-height:45vh;
margin-top:10rem;
overflow:hidden;

@media screen and (min-width:768px){

    margin-top:4rem;
}


`
const Wrap = styled.article`

max-width:90%;
margin:0 auto;
display:grid;
place-items:center;
align-items:center;
justify-content:center;



@media screen and (min-width:768px){

    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:5rem;
}

@media screen and (min-width:1024px){

    max-width:85%;
    margin:0 auto;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:3rem;
}

@media screen and (min-width:1280px){

    max-width:80%;
    margin:0 auto;
  
}

`
const LeftCol = styled.div`

h2{

    font-size: clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem);
    padding-bottom:2rem;


}

p{
    padding-bottom:3rem;
    font-size: clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem);
     font-weight:100;
     width:95%;
    
}

button{
    background:#00f6ff;
    padding:0.8rem 2rem;
    border-radius:1rem;

    a{
        color:#00040f;
        font-weight:600;
    }
}


@media screen and (min-width:768px){


    h2{

   font-size: clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem);
    padding-bottom:2rem;


}

    p{
        
        width:100%;
    }

    
}

@media screen and (min-width:1024px){


    p{
        
        width:95%;
    }

    
}


@media screen and (min-width:1280px){


   h2{
        font-size: clamp(1.70rem, calc(1.08rem + 3.63vw), 3.66rem);
        padding-bottom:2rem;

     }

     
    p{
        width:75%;
    }
}
    
}


@media screen and (min-width:1366px){


   h2{
   font-size: clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem);
        padding-bottom:2rem;

    }

    p{
        
        width:75%;
    }


}


`
const RightCol = styled.div`
margin-top:5rem;
img{
    width:100%;
}

`
export default CardDeal