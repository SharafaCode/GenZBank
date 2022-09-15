import React from 'react';
import styled from 'styled-components';
import {footerLinks} from './data';
import LightSpeed from 'react-reveal/LightSpeed';

function Footer() {
  return (
    <Container>
        <Wrap>
            <Logo>
            <LightSpeed top> 

                <div>
                    <h1><a href="" className='text-color4'>GenZ<span className='text-color1'>Bank</span></a></h1>
                    <p className='text-color2'>A new way to make the payments <br /> easy, reliable and secure</p>
                </div>
                </LightSpeed> 
            </Logo>
            <Content>
           
                {footerLinks.map(({id, title, links})=>(
                    <Items key={id}>
                        <div>
                         <LightSpeed left>
                            <h2>{title}</h2>
                            </LightSpeed>
                        </div>
                        <LinksItems>
                        <LightSpeed right> 
                        {links.map((item, index)=>(
                            <div key={index}>
                                <p>
                                    <a href={item.link}  className='text-color2'>

                                        {item.name}

                                    </a>
                                </p>
                            </div>
                        ))}
                        </LightSpeed> 
                        </LinksItems>
                    </Items>
                ))}
               

            </Content>
        </Wrap>
    </Container>
  )
}

const Container = styled.section`

width:100%;
min-height:20vh;
margin-top:5rem;
overflow:hidden;

@media screen and (min-width:768px){

    margin-top:7rem;
}



@media screen and (min-width:1200px){

    margin-top:15rem;
  }

`
const Wrap = styled.article`

max-width:90%;
margin:0 auto;
display:grid;

row-gap:3rem;

@media screen and (min-width:768px){

grid-template-columns:30% 70%;


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
const Logo = styled.div`


h1{
    font-size: clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem);
    margin-bottom:1rem;
}

p{
    font-size: clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem);
    font-weight:100;
    width:100%;
    
}

`
const Content = styled.div`

display:flex;
align-itmes:center;
justify-content:space-between;




@media screen and (min-width:500px){

    
}

@media screen and (min-width:768px){
justify-content: space-evenly;

}
`
const Items = styled.div`
  

@media screen and (min-width:768px){

   justify-self:end;
}
h2{

font-size: clamp(1.23rem, calc(1.03rem + 1.19vw), 1.88rem);
    font-weight:100;

}
p{

   font-size: clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem);
    font-weight:100;
    width:100%;


    
}




`
const LinksItems = styled.div`
margin-top:1rem;
display:grid;
row-gap:1rem;

a:hover{
            color: #00f6ff;
        }



`

export default Footer