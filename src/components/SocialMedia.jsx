import React from 'react';
import styled from 'styled-components';
import {socialMedia} from './data'

function SocialMedia() {
  return (
    
    <Container>
        <Wrap>
                <Reserve>
                    <div>
                        <h2>
                        Copyrights  &copy; 2022 GenZBank. All Rights Reserved.
                        </h2>
                    </div>

                </Reserve>
            <Content>

                {socialMedia.map(({id, icon, link})=>(

                    <Items key={id}>

                        <div >
                            <a href={link}>
                                <img src={icon} alt="" />
                            </a>
                        </div>

                    </Items>


                    
                ))}
            </Content>
        </Wrap>
    </Container>
  )
}

const Container = styled.section`
width:100%;
margin-top:5rem;

@media screen and(min-width:768px){
    margin-top:0;
}

`


const Wrap = styled.article`
max-width:90%;
margin:0 auto;
display:flex;
flex-direction:column;
align-items:center;
gap:3rem;
border-top:0.1rem solid rgba(255, 255, 255, 0.7);
padding-top:3rem;


@media screen and (min-width:768px){

    flex-direction:row;
    justify-content:space-between;
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


const Content = styled.div`
display:flex;
align-items:center;
gap:3rem;



`
const Items = styled.div`

cursor:pointer;
  transition: all 0.8s linear;
  :hover{
    transform:scale(1.5);
  }

`
const Reserve = styled.div`

h2{
   font-size: clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem);
   font-weight:500;
}


`


export default SocialMedia