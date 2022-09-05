import React from 'react';
import styled from 'styled-components';
import {bill, apple, google} from '../assets'


function Billings() {
  return (
    <Container>
        <Wrap>
            <LeftCol>
                <div>
                    <img src={bill} alt="" />
                </div>

            </LeftCol>
            <RightCol>

                <div>
                    <h2>
                        Easily control Your <br /> billings and invoicing.
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam praesentium in exercitationem modi architecto sunt ut quas vitae harum! Eaque?
                    </p>

                </div>

                <Image>
                    <div>
                        <img src={apple} alt="" />
                    </div>
                    <div>
                        <img src={google} alt="" />
                    </div>
                </Image>

            </RightCol>
        </Wrap>
    </Container>
  )
}
const Container = styled.section`

width:100%;
min-height:45vh;
margin-top:7rem;


@media screen and (min-width:768px){

    margin-top:4rem;
}

`
const Wrap = styled.article`

max-width:90%;
margin:0 auto;
display:grid;
place-items:center;


@media screen and (min-width:768px){
    grid-template-columns:repeat(2, 1fr);
    column-gap:5rem;
}
@media screen and (min-width:1024px){
   max-width:85%;
margin:0 auto;
}
@media screen and (min-width:1280px){
   max-width:80%;
margin:0 auto;
}



`
const LeftCol = styled.div`

img{
    width:100%;
}
`
const RightCol = styled.div`


display:grid;
margin-top:5rem;


 h2{
    font-size: clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem);
    padding-bottom:2rem;
 }
 p{
    padding-bottom:3rem;
    font-size: clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem);
     font-weight:100;
     width:100%;
 }


 @media screen and (min-width:768px){
    margin-top:0;
     h2{
     font-size: clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem);
    padding-bottom:2rem;
 }
 p{
    padding-bottom:3rem;
    font-size: clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem);
     font-weight:100;
    
 }
}


 @media screen and (min-width:1024px){
    margin-top:0;
    transform:translateX(2.2rem);
}


@media screen and (min-width:1280px){
    margin-top:0;
    transform:translateX(5rem);


     h2{
        font-size: clamp(1.70rem, calc(1.08rem + 3.63vw), 3.66rem);
        padding-bottom:2rem;

     }

    
}



@media screen and (min-width:1366px){
    margin-top:0;
    transform:translateX(6rem);

   h2{
   font-size: clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem);
        padding-bottom:2rem;

    }

 


}

`
const Image = styled.div`
display:flex;
gap:2rem;
img{
    width:100%;
}

`
export default Billings