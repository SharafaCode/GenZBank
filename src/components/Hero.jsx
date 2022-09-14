import React from 'react';
import styled from 'styled-components';
import {robot, discount} from '../assets';
import CTA from '../components/CTA'
import {stats} from './data';
import Fade from 'react-reveal/Fade';

function Hero() {
  return (
  <>
  <Container>

    <Wrap>


        <LeftCol>
            <Fade left>
            
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


            </Fade>
        </LeftCol>



        <RightCol>

            <Fade right>

            <div>
                <img src={robot} alt="robot" />
            </div>

            </Fade>

        </RightCol>


    </Wrap>

        <Stats>
        <Fade left>
            {stats.map(({id, title, value})=>(

                <Content key={id} className>
                    <div>
                    <h2>{value}</h2>
                    </div>

                    <div className='fs-sm text-color1'>
                        <h3>{title}</h3>
                    </div>
                </Content>


            ))}

        </Fade>    

        </Stats>
  </Container>
  
  </>
  )
}


const Container = styled.section`

    width 100%;
    min-height:80vh;
    overflow:hidden;

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
        margin-top:-2rem;
      
        
        
    }
  


    @media screen and (min-width:1024px){
        width 75%;
        margin:0 auto;
        
        transform:translateY(-5rem)
    }


    @media screen and (min-width:1200px){
        width 75%;
        margin:0 auto;
        
        transform:translateY(-10rem)
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
       font-size: clamp(3.2rem, calc(0.78rem + 8.95vw), 2.15rem);
        line-height:7rem;
    }


    p{
        width:100%;
        padding-top:2.5rem;
        font-size: clamp(1.1rem, calc(0.92rem + 0.39vw), 1.20rem);
        
        
     }
}


@media screen and (min-width:1024px){


    h1{
       width:100%;
        font-size: clamp(4rem, calc(1.08rem + 3.63vw), 2.66rem);
        line-height:8rem;
    }

    p{
        width:100%;
        padding-top:2.5rem;
        font-size: clamp(1.1rem, calc(0.92rem + 0.39vw), 1.20rem);
        
        
     }
}
@media screen and (min-width:1280px){


    h1{
        font-size: clamp(5.2rem, calc(1.03rem + 4.98vw), 3.58rem);
        line-height:8rem;
    }

    p{
        width:100%;
        padding-top:2.5rem;
        font-size: clamp(1.35rem, calc(0.92rem + 0.39vw), 1.20rem);
        
        
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

   
}




`;


const Stats = styled.article`


display:grid;
row-gap:3rem;
place-items:center;
align-items:center;
justify-content:center;





h2{
   font-size: clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem);
   
}


@media screen and (min-width:768px){

grid-template-columns: repeat(3, 1fr);
justify-content:space-between;



}

`;


const Content = styled.div`

display:flex;
gap:1rem;
justify-content:center;
align-items:center;



`

export default Hero