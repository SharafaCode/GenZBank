import React from 'react';
import styled from 'styled-components';
import {stats} from './data';

function Stats() {
  return (
    <Container>
        <Wrap>
            {stats.map(({id, title, value})=>(

                <div key={id}>
                    <h2>{value} {" "} <span className='fs-sm text-color1'>{title}</span> </h2>
                </div>


            ))}

        </Wrap>
    </Container>
  )
}

const Container = styled.section`

max-width:100%;
min-height:5vh;

`;


const Wrap = styled.article`


max-width:90%;
margin:0 auto;
display:flex;
gap:3rem;
flex-direction:column;
align-items:center;
justify-content:space-between;


h2{
   font-size: clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem);
   
}


@media screen and (min-width:768px){
    max-width:80%;
margin:0 auto;
flex-direction:row;
transform: translateY(3.5rem);


}
@media screen and (min-width:915px){
    transform: translateY(-1rem);

}

@media screen and (min-width:960px){
    transform: translateY(-2.5rem);

}
@media screen and (min-width:1000px){
    transform: translateY(-3rem);

}

@media screen and (min-width:1024px){
    max-width:60%;
margin:0 auto;
transform: translateY(-6rem);
flex-direction:row;

}


@media screen and (min-width:1280px){
    max-width:50%;
margin:0 auto;
transform: translateY(-4rem);
}


@media screen and (min-width:1366px){
    max-width:50%;
margin:0 auto;
transform: translateY(-5rem);
}
`;


export default Stats;