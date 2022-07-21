import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import '../stylesheets/About.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css'
import Image from 'react-bootstrap/Image'



const AboutSail = () => {
  

    return (
    
         <Container fluid style={{backgroundColor: '#00000073', fontFamily: 'CormorantUpright serif', textAlign:'center', color: 'whitesmoke'}}>

        <Row>
            
            <Col sm={4} >
            
            
                	<Col sm={4} >
                       <Image  src ='https://savmedia.mo.cloudinary.net/abirubow.png' alt='' style ={{height:'430px'}}/>
                   </Col>
           
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <Col sm={4} style={{height:'90px', marginTop: '-100px', width:'350px'}}>
                      
                        <h5 style={{color:'white', textAlign: 'center', letterSpacing: '2px', paddingTop:'15px'}}>
                            Senator Tokunbo Abiru</h5> 
                    
                        <p style={{color:'#c8d3d6', textAlign: 'center', fontSize:'15px', marginTop:'-10px'}}>
                            (Lagos East Senatorial District) </p> 
                                       
                        <p style={{color:'white', textAlign: 'center', fontSize:'14.5px', marginTop:'-12px', letterSpacing: '1px'}}>
                            Chairman, Senate Committee on Industries</p>
                      
                    </Col>
                </AnimationOnScroll>
                 
            </Col>
            
            
            <Col sm={6} >
            <AnimationOnScroll animateIn="animate__slideInUp">
                <h1 style={{ paddingTop:'20px', paddingBottom:'5px', color: '#be9559'}}>Senator Abiru Innovation Lab (SAIL)</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInRight">
                <p style={{fontSize:'18px', letterSpacing:'1.5px', paddingLeft:'10px', paddingBottom:'15px', color:'#e1e5e6a4'}}>Senator Mukhail Adetokunbo Abiru, the Chairman, 
                        Senate Committee on Industries and the Senator representing Lagos East Senatorial District, 
                        as part of his initiatives to drive youth empowerment, has partnered with the Co-Creation HUB to develop a
                         Community Innovation Space for young people within the Lagos East Senatorial District.<br/>
                        The primary purpose of the innovation space is to create employment opportunities, inspire grass-roots
                         innovations and build partnerships and networks that will drive economic prosperity and collaboratively 
                         solve significant social and business problems.<br/>         
                </p>
                <p><img src ='https://savmedia.mo.cloudinary.net/abirusign.png' alt='' style={{height:'60px', width:'250px'}}/></p>
            </AnimationOnScroll>        
            </Col>
            
        </Row>
        
        </Container>
 
  )
}

export default AboutSail