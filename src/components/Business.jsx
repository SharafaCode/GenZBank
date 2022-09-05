import React from 'react';
import {features} from './data';
import styled from 'styled-components';


function Business() {
  return (
    <Container>
        <Wrap>
            <LeftCol>
                <h2>
                    You do the business, <br/>
                    we'll handle the money.
                </h2>
                <p>
                    with the right credit card, you can improe your finance life by building credit carring, reward and saving money but we hundred of credits card on the market.
                </p>

                <button type='button'><a href="/">Get Started</a></button>

            </LeftCol>



            <RightCol>

                {features.map(({id, icon, title, content})=>(

                <FeatureItem key={id}>
                    
                    <div>

                        <img src={icon} alt="" />

                    </div>
                    <div>
                        <h3>{title}</h3>
                        <p>{content}</p>
                    </div>

                </FeatureItem>

                ))}


            </RightCol>
        </Wrap>
    </Container>
  )
}

const Container = styled.section`

width:100%;
min-height:45vh;
margin-top:7rem;



`;

const Wrap = styled.article`

max-width:90%;
margin:0 auto;
display:grid;
justify_content:center;
place-items:center;




@media screen and (min-width:768px){

    grid-template-columns: repeat(2, 1fr);
    column-gap:3rem;
}

@media screen and (min-width:1024px){
    max-width:85%;
    margin:0 auto;
    grid-template-columns: repeat(2, 1fr);
    
}


@media screen and (min-width:1280px){
max-width:80%;
margin:0 auto;
    grid-template-columns: repeat(2, 1fr);
   
   
}


`;
const LeftCol = styled.div`

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

    
}

@media screen and (min-width:1280px){

    h2{
        font-size: clamp(1.70rem, calc(1.08rem + 3.63vw), 3.66rem);
        padding-bottom:2rem;

     }




}

@media screen and (min-width:1366px){

    h2{
   font-size: clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem);
        padding-bottom:2rem;

    }



}

`;
const RightCol = styled.div`

margin-top:5rem;
display:grid;
row-gap:4rem;
align-items:center;


img{

    width:100%;
}

@media screen and (min-width:768px){
    margin-top:0;

}


@media screen and (min-width:1024px){
    margin-top:0;
    transform:translateX(2.2rem);
}


@media screen and (min-width:1280px){
    margin-top:0;
    transform:translateX(5rem);
}



@media screen and (min-width:1366px){
    margin-top:0;
    transform:translateX(5rem);
}

`;

const FeatureItem = styled.div`

display:flex;
gap:2rem;
align-items:center;
padding:2.4rem;
background: linear-gradient(
    144.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  border-radius:1rem;
  cursor:pointer;
  transition: all 0.8s linear;
  :hover{
    transform:scale(1.1);
  }
 box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);

h3{
    font-size: clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem);
    font-weight:600;
    padding-bottom:1.7rem;
}
p{
    font-size: clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem);
     font-weight:100;
      width:100%;
}


@media screen and (min-width:768px){


    h3{
        font-size: clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem);
        font-weight:600;
    }

   
}



`;


export default Business