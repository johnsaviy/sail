import React, { Component } from 'react'
import programData from '../../data/Programdata.js'
import ProgramItem from './ProgramItem.jsx'
import {Container, Col, Row} from 'react-bootstrap'

export class Programmes extends Component {

    state = {
        programs: programData
    }

    render() {

    const program = this.state.programs.map(item =>{
        return(
            <ProgramItem 
                key = {item.id}
                item = {item}
            />
        )
    })
    const styleCointainer = {
         alignItems: 'center',
         justifyContent: 'center',
         marginTop: '30px',
         

   }

    return (
      <div style={styleCointainer} className='container' >
       
            <h1 style={{textAlign: 'center', color: '#e1e5e6da'}}>Pilot Programmes</h1>
        
        <div className='row' >
        
            <div className="d-flex flex-wrap">
                {program}
            </div>
        
           
            <Container>

                <Row>
                
                    <Col md={{ span: 4, offset: 7}} style={{marginTop: '-310px',  color:'white', paddingLeft:'40px'}}>
                        <img src ='assets/images/good1.png' alt=""/>
                    </Col>
                   
                </Row>
            </Container>
           
           
        </div>
      </div>
    )
  }
}

export default Programmes