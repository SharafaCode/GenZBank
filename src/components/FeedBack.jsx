import React from 'react';
import styled  from 'styled-components';
import {feedback} from './data';
import {quotes} from '../assets';

function FeedBack() {
  return (
    <>
    <Container>
        <Wrap>
            <TextWrap>
                <div>
                  <h2>What people are saying <br /> about us</h2>
                </div>
                <div>
                  <p>Everything you need to accept card payments <br /> and grow your business anywhere on the planet.</p>
                </div>
            </TextWrap>
            <ContentItem>


                {feedback.map(({id, name, content, img, title})=>(
                    <Item key={id}>
                        <div>
                            <img src={quotes} alt="" />
                        </div>
                        <div>
                            <p>{content}</p>
                        </div>
                        <div className='flex2'>
                            <img src={img} className='img' alt="client" />
                            <div>
                                <h5>{name}</h5>
                                <small> {title} </small>
                            </div>
                        </div>
                    </Item>
                ))}
              
            </ContentItem>
        </Wrap>
    </Container>

    </>
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
// margin-bottom:5rem;


@media screen and (min-width:1024px){

   max-width:85%;
margin:0 auto;
}
@media screen and (min-width:1280px){

   max-width:80%;
margin:0 auto;
}

`;

const TextWrap = styled.div`

display:flex;
align-items:left;
justify-content:center;
flex-direction:column;

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



`;



const ContentItem = styled.div`

display:grid;
place-items:center;

@media screen and (min-width:768px){

   
    grid-template-columns:repeat(3, 1fr);
    column-gap:2.5rem;
}

@media screen and (min-width:1024px){

   
    grid-template-columns:repeat(3, 1fr);
    column-gap:5rem;
}


`;


const Item = styled.div`

display:grid;
align-items:center;
row-gap:3rem;
padding:2.5rem;
margin-bottom:2rem;
background:red;
width:100%;
height:fit-content;
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

  p{
      width:100%;
      font-size: clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem);
  }
  small{
    
  }
  h5{
    font-size: clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem);
  }

    
`;




export default FeedBack