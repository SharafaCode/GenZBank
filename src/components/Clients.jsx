import React from 'react';
import styled from 'styled-components';
import {clients} from './data';
import Bounce from 'react-reveal/Bounce';



function Clients() {
  return (
    <Container>
      <Wrap>
        <Content>
        
              {clients.map(({id, logo})=>(
                <Items key={id}>
                   <Bounce bottom>
                  <div>
                 
                    <img src={logo} alt={logo} />
                   
                  </div>
                  </Bounce>
                </Items>

              ))}
          
        </Content>
      </Wrap>
    </Container>
  )
}

const Container = styled.section`
width:100%;
min-height:15vh;
margin-top:10rem;
overflow:hidden;

`
const Wrap = styled.article`

max-width:90%;
margin:0 auto;


@media screen and (min-width:1024px){
  max-width:75%;
  margin:0 auto;
}


@media screen and (min-width:1280px){
  max-width:70%;
  margin:0 auto;
}

`
const Content = styled.div`
display:flex;
gap:2rem;
align-items:center;
justify-content:center;
flex-direction:column;



@media screen and (min-width:768px){
flex-direction:row;
justify-content:space-between;

}

`

const Items = styled.div`


img{

  height:7rem;
  object-fit:contain;
}

@media screen and (min-width:768px){
img{

  height:3rem;
  object-fit:contain;
}

}


`

export default Clients