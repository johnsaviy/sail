import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import YoutubeEmbed from './YoutubeEmbed';
import '../stylesheets/groupedtab.css'
import { Spinner } from 'react-bootstrap';
import {Container, Col, Row} from 'react-bootstrap';
import SailGallery from './SailGallery';



function GroupedTabs() {

  
  return (
    <div style={{backgroundColor:'#cacdcd', color:'black', paddingBottom: '30px'}}>
    <Tabs>
    <TabList style={{backgroundColor:'black', color:'White', height:'55px', paddingTop:'10px', letterSpacing:'1.5px' }}>
      <Tab>Why SAIL?</Tab>
      <Tab>Testimonials</Tab>
      <Tab>Gallery</Tab>
    </TabList>

    <TabPanel style={{marginTop:'20px', fontFamily: 'Arapey, serif', textAlign:'center', letterSpacing:'2px'}}>
      <h1 style={{marginBottom:'50px'}}>Why SAIL?</h1> 

          <Container>
          <Row className="justify-content-md-center">
              <Col sm={7}>
                    
                    <Col sm={7} md={{ span: 6, offset: 3 }} >
                        <Spinner  size="sm" animation="grow" variant="danger" style={{marginTop:'60px'}}/> 
                        <Spinner size="sm" animation="grow" variant="secondary" />
                        <Spinner size="sm" animation="grow" variant="warning" />
                        <Spinner size="sm" animation="grow" variant="success" />
                    </Col>
                    <Col style={{marginTop:'-120px'}}> <YoutubeEmbed embedId="NueW8l6uI0Y"/></Col>
                
              </Col>            
          </Row>
          </Container>


          {/* <Container>
            <Row >
              <Col sm={6}>
                
                    <Col sm={6}>
                        <Spinner size="sm" animation="grow" variant="danger" style={{marginTop:'80px'}}/> 
                        <Spinner size="sm" animation="grow" variant="secondary" />
                        <Spinner size="sm" animation="grow" variant="warning" />
                        <Spinner size="sm" animation="grow" variant="success" />
                    </Col>
                    <Col style={{marginTop:'-140px'}}> <YoutubeEmbed embedId="NueW8l6uI0Y"/></Col>
                 
              </Col>
              
              <Col sm={6}>
                  <Col sm={6}>
                        <Spinner size="sm" animation="grow" variant="danger" style={{marginTop:'80px'}}/> 
                        <Spinner size="sm" animation="grow" variant="secondary" />
                        <Spinner size="sm" animation="grow" variant="warning" />
                        <Spinner size="sm" animation="grow" variant="success" />
                </Col>
                <Col style={{marginTop:'-140px'}}> <YoutubeEmbed embedId="sg9-yDjsS3o" /></Col>
              </Col>  
            </Row>
          </Container> */}
    </TabPanel>
    <TabPanel style={{marginTop:'20px', fontFamily: 'Arapey, serif', textAlign:'center', letterSpacing:'2px'}}>
          <h1 style={{marginBottom:'50px'}}>Testimonials</h1>

          <Container>
              <Row className="justify-content-md-center">
                  <Col sm={7}>
                        
                        <Col sm={7} md={{ span: 6, offset: 3 }}>
                            <Spinner  size="sm" animation="grow" variant="danger" style={{marginTop:'60px'}}/> 
                            <Spinner size="sm" animation="grow" variant="secondary" />
                            <Spinner size="sm" animation="grow" variant="warning" />
                            <Spinner size="sm" animation="grow" variant="success" />
                        </Col>
                        <Col style={{marginTop:'-120px'}}> <YoutubeEmbed embedId="sg9-yDjsS3o"/></Col>
                    
                  </Col>            
              </Row>
          </Container>
        
    </TabPanel>
    <TabPanel style={{marginTop:'20px', fontFamily: 'Arapey, serif', textAlign:'center', letterSpacing:'2px'}}>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col sm={7} >
             <h1>Gallery</h1> 
              <SailGallery/>
            
            </Col>
          </Row>
        </Container>
      
    </TabPanel>
    
  </Tabs>
    </div>
  )
}

export default GroupedTabs