import React from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';


function Services() {
  return (
    
    <Container>
        <Wrap>
            <Slide right>
            <Content>
                <div>
                    <h2>
                        Let's try our service now!
                    </h2>
                    <p>
                        Everything you need to accept card payments <br /> and grow your business anywhere on the planet.
                    </p>
                </div>

                <div>
                     <button type='button'><a href="/">Get Started</a></button>
                </div>
            </Content>
                </Slide>
        </Wrap>
    </Container>
  )
}

const Container = styled.section`

width:100%;
min-height:20vh;
margin-top:10rem;
overflow:hidden;

@media screen and (min-width:768px){

    margin-top:7rem;
}


@media screen and (min-width:1200px){

    margin-top:10rem;
  }

`;
const Wrap = styled.article`

width:90%;
margin:0 auto;

@media screen and (min-width:768px){
    width:80%;
margin:0 auto;
}

@media screen and (min-width:1024px){
    width:50%;
margin:0 auto;
}

`;
const Content = styled.div`

background: linear-gradient(
    144.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:2rem 3rem;
  border-radius:1rem;


  h2{

    font-size: clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem);
    padding-bottom:1rem;


}

p{
    padding-bottom:1.5rem;
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

    flex-direction:row;
    justify-content:space-between;

}

`;

export default Services