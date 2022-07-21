import React from 'react'                           
import { Card, CardGroup} from 'react-bootstrap'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css'
import '../stylesheets/hovertext.css'
import { MDBIcon } from 'mdb-react-ui-kit';


const Events = () => {
  return (

    <div style={{backgroundColor:'white', paddingBottom:'20px'}}>
        <AnimationOnScroll animateIn="animate__slideInDown" > 
            <h1 style={{textAlign:'center', paddingTop:'30px',paddingBottom:'30px'}}>News & Events </h1>
         </AnimationOnScroll>
        <CardGroup className="justify-content-md-center">
        <AnimationOnScroll animateIn="animate__slideInLeft" animateOut="animate__slideInLeft">
        
        <Card>
                <Card.Img variant="top" src="https://savmedia.mo.cloudinary.net/newz1.jpg" style={{height:'250px', width:'100%'}} />
                <Card.Body>
                <Card.Title className='hovertext' style={{width:'350px'}}>Gen Z Hackfest 2022: Senator Abiru Charges Young Techies To Develop Solutions To Societal Problems.</Card.Title>
                <Card.Text style={{width:'350px'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatibus aliquid magnam culpa, dolores 
                    quibusdam assumenda itaque eveniet nemo fuga optio ut
                     nostrum facere numquam maxime....<a className='hovertext' href=''>read more</a>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><MDBIcon far icon="calendar-alt" /> 11th July 2022</small>
                </Card.Footer>
            </Card>

            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideInUp">
            <Card>
                <Card.Img variant="top" src="https://savmedia.mo.cloudinary.net/newz3.jpg" style={{height:'250px', width:'100%'}}/>
                <Card.Body>
                <Card.Title className='hovertext' style={{width:'350px'}}>SAIL TECHIES at the GENZ HACKFEST 2022.</Card.Title>
                <Card.Text style={{width:'350px'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatibus aliquid magnam culpa, dolores 
                    quibusdam assumenda itaque eveniet nemo fuga optio ut
                     nostrum facere numquam maxime maxime maxime maxime maxime....<a className='hovertext'>read more</a>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"> <MDBIcon far icon="calendar-alt" /> 11th July 2022</small>
                </Card.Footer>
            </Card>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInRight" animateOut="animate__slideInRight">
            <Card style={{background:'none'}}>
                <Card.Img variant="top" src='https://savmedia.mo.cloudinary.net/newz2.jpg' style={{height:'250px', width:'100%'}} />
                <Card.Body>
                <Card.Title className='hovertext' style={{width:'350px'}}>Senator Tokunbo Abiru awards grants to new 
                    businesses as 41 graduates from the Innovation Lab.</Card.Title>
                <Card.Text style={{width:'350px'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptatibus aliquid magnam culpa, dolores 
                    quibusdam assumenda itaque eveniet nemo fuga optio ut
                     nostrum facere numquam maxime....<a className='hovertext'>read more</a>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted"><MDBIcon far icon="calendar-alt" /> 3rd June 2022</small>
                </Card.Footer>
            </Card>

            </AnimationOnScroll>
        </CardGroup>
 



    </div>











//     <div style={{backgroundColor:'#ffffff', color:'black', height:'650px'}}>
//         <Container fluid>
//   {/* Stack the columns on mobile by making one full-width and the other half-width */}
            
//         <AnimationOnScroll animateIn="animate__slideInDown" >
//             <h1 style={{textAlign:'center', paddingTop:'30px'}}>News & Events </h1>
//         </AnimationOnScroll>
//             <Row>
//                 <Col xs={9} md={6}>
//                 <NavDropdown.Divider />
//                 <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideInUp">
//                     <Card style={{border:'none', background:'none'}}>
//                     <Container>
//                         <Row>
                        
//                             <Col sm={3}><img  src ='assets/images/news1.jpeg' alt=''/></Col>
                         
//                             <Col sm={7} >
//                                 <h4 className='hovertext'>Senator Tokunbo Abiru awards grants to new businesses as 41 graduates from the Innovation Lab.</h4>
//                                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit alias fuga voluptates velit, 
//                                 libero obcaecati ab earum hic voluptatibus nobis mollitia, numquam dignissimos expli ...<a className='hovertext'>read more</a></p></Col>
                           
//                         </Row>
//                         <NavDropdown.Divider />
                       
//                     </Container>
//                     </Card>
//                 </AnimationOnScroll>
//                 <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideInUp">
//                     <Card style={{border:'none', background:'none'}}>
//                     <Container>
//                         <Row>
//                             <Col sm={3}><img  src ='assets/images/news4.jpg' alt=''/></Col>
//                             <Col sm={7}>
//                             <h4 className='hovertext'>Gen Z Hackfest 2022: Senator Abiru Charges Young Techies To Develop Solutions To Societal Problems.</h4>
//                                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit alias fuga voluptates velit, 
//                                 libero obcaecati ab earum ...<a className='hovertext'>read more</a> </p>
//                             </Col>
                            
//                         </Row>
//                     </Container> 
                        
//                     </Card>
//                 </AnimationOnScroll>
                    
//                 </Col>
                
//                 <Col xs={9} md={6}>
                    
//                     <NavDropdown.Divider />
//                     <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideInUp">
//                     <Card style={{border:'none', background:'none'}}>
//                     <Container>
//                         <Row>
//                             <Col sm={3}><img  src ='assets/images/news3.jpg' alt=''/></Col>
//                             <Col sm={7}>
//                                 <h4 className='hovertext'>Senator Abiru signs agreement with Cc-Hub, as Innovation Lab opens registration for new cohort.</h4>
//                                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit alias fuga voluptates velit, 
//                                 libero obcaecati ab earum hic voluptatibus nobis mollitia, numquam dignis magnun mdunss...<a className='hovertext'>read more</a></p></Col>
                            
//                         </Row>
//                         <NavDropdown.Divider />
                       
//                     </Container>
//                     </Card>
//                 </AnimationOnScroll>
//                 <AnimationOnScroll animateIn="animate__slideInUp" animateOut="animate__slideInUp">
//                     <Card style={{border:'none', background:'none'}}>
//                     <Container>
//                         <Row>
//                             <Col sm={3}><img  src ='assets/images/news2.jpg' alt=''/></Col>
//                             <Col sm={7}>
//                             <h4 className='hovertext'>SAIL TECHIES at the GENZ HACKFEST 2022.</h4>
//                                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit alias fuga voluptates velit, 
//                                 libero obcaecati ab earum hic voluptatibus nobis mollitia, numquam digni magnim opil moliitta sercules...<a className='hovertext'>read more</a></p>
//                             </Col>
                            
//                         </Row>
//                     </Container> 
                        
//                     </Card>
//                 </AnimationOnScroll>
//                 </Col>
                
//             </Row>
//          </Container>
//     </div>
  )
}

export default Events