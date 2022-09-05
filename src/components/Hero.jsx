import React from 'react';
import styled from 'styled-components';
import {robot, discount} from '../assets';
import CTA from '../components/CTA'

function Hero() {
  return (
  <>
  <Container>

    <Wrap>


        <LeftCol>
            
            <Discounts>  
                <img src={discount} alt="discount" />
                <p className='text-color2 fs-sm'>
                    <span className='text-color4'>20%</span> {' '} Discount For <span className='text-color4'>1 Month</span> {" "} Account.
                </p>

            </Discounts>

            <Text>
                <div>
                    <h1 className='text-color4'>
                        The Next <br/> 
                        <span className='text-color1' >Generation</span> <br/>
                        
                    </h1>
                <div className='position'>
                     <h1>Payment Method.</h1>
                </div>
                    <p>
                        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage ratess, annual fees.
                    </p>
                </div>
                <div>
                    <CTA />
                </div>
            </Text>



        </LeftCol>



        <RightCol>

            <div>
                <img src={robot} alt="robot" />
            </div>

        </RightCol>
        


    </Wrap>

  </Container>
  
  </>
  )
}


const Container = styled.section`

    width 100%;
    min-height:65vh;

`

const Wrap= styled.article`

    display:grid;
    align-items:center;
    row-gap:4rem;
    margin-top:4rem;


@media screen and (min-width:768px){

    grid-template-columns: repeat(2, 1fr);
    row-gap:0rem;
}


@media screen and (min-width:1024px){

    grid-template-columns: repeat(2, 1fr);
    row-gap:0rem;
}

`;


const LeftCol = styled.div`
    width 87%;
    margin:0 auto;
    display:grid;
    row-gap:2rem;


    @media screen and (min-width:768px){
        width 75%;
        margin:0 auto;
        margin-top:4rem;
      
        
        
    }


    @media screen and (min-width:1024px){
        width 75%;
        margin:0 auto;
        
        transform:translateY(-3rem)
    }
    @media screen and (min-width:1280px){
        width 75%;
        margin:0 auto;
        
        transform:translateY(-7rem)
    }


`;


const Discounts = styled.div`

display:flex;
gap:0.5rem;
align-items:center;
background: linear-gradient(
    144.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  width:fit-content;
  border-radius:0.5rem;
  padding:0 1rem;



`;


const Text = styled.div`
display:flex;
align-items:center;
p{
    margin-top:7rem;
}
// Media Query Section


@media screen and (min-width:425px){


    h1{
       width:100%;
        font-size: clamp(5rem, calc(1.08rem + 3.63vw), 3.66rem);
        line-height:5.5rem;
    }

    p{
        width:97%;
        padding-top:2.5rem;
        font-size: clamp(1.2rem, calc(0.92rem + 0.39vw), 1.20rem);
        
        
     }
}

@media screen and (min-width:320px){


    h1{
       width:100%;
        font-size: clamp(3rem, calc(1.08rem + 3.63vw), 3.66rem);
        line-height:5.5rem;
    }

    p{
        width:98%;
        padding-top:2.5rem;
        font-size: clamp(1.2rem, calc(0.92rem + 0.39vw), 1.20rem);
        
        
     }
}
@media screen and (min-width:360px){


    h1{
       width:100%;
        font-size: clamp(3rem, calc(1.08rem + 3.63vw), 3.66rem);
        line-height:5.5rem;
    }

    p{
        width:100%;
        padding-top:2.5rem;
        font-size: clamp(1.2rem, calc(0.92rem + 0.39vw), 1.20rem);
        
        
     }
}
@media screen and (min-width:500px){


    h1{
       width:100%;
        font-size: clamp(4.6rem, calc(1.08rem + 3.63vw), 3.66rem);
        line-height:7rem;
    }

    p{
        width:100%;
        padding-top:2.5rem;
        font-size: clamp(1.4rem, calc(0.92rem + 0.39vw), 1.20rem);
        
        
     }
}
@media screen and (min-width:600px){


    h1{
       width:100%;
        font-size: clamp(5.2rem, calc(1.08rem + 3.63vw), 3.66rem);
        line-height:7rem;
    }

    p{
        width:100%;
        padding-top:2.5rem;
        font-size: clamp(1.4rem, calc(0.92rem + 0.39vw), 1.20rem);
        
        
     }
}
@media screen and (min-width:768px){


  h1{
       width:100%;
        font-size: clamp(4.2rem, calc(1.08rem + 3.63vw), 3.66rem);
        line-height:7rem;
    }


    p{
        width:100%;
        padding-top:2.5rem;
        font-size: clamp(1.2rem, calc(0.92rem + 0.39vw), 1.20rem);
        
        
     }
}


@media screen and (min-width:1024px){


    h1{
       width:100%;
        font-size: clamp(4rem, calc(1.08rem + 3.63vw), 2.66rem);
        line-height:7rem;
    }

    p{
        width:100%;
        padding-top:2.5rem;
        font-size: clamp(1.5rem, calc(0.92rem + 0.39vw), 1.20rem);
        
        
     }
}
@media screen and (min-width:1280px){


    h1{
        font-size: clamp(5.1rem, calc(1.03rem + 4.98vw), 3.58rem);
        line-height:7rem;
    }

    p{
        width:100%;
        padding-top:2.5rem;
        font-size: clamp(1.7rem, calc(0.92rem + 0.39vw), 1.20rem);
        
        
     }
}


// End of Media Query Section



`;


const RightCol = styled.div`

img{
    width:100%;
}

@media screen and (min-width:768px){

    transform:translateY(-3rem)
}


@media screen and (min-width:1024px){

    transform:translateY(-4rem)
}




`;

export default Hero