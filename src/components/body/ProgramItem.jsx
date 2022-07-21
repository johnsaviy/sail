import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const ProgramItem = (props) => {
  
    const sytleTitle = {
        cursor: 'pointer' 
    }

     const sytleImage= {
        cursor: 'pointer',
        height: '300px',
    }

    return (

        <div>
            <Card style={{width: '21rem', background: 'none', border:'none'}}>
                <Flippy flipOnHover={true} flipOnClick={true}  flipDirection="horizontal">
                   
                    <FrontSide>
                        <Card.Img variant="top" src={props.item.image}  style= {sytleImage}/>
                    </FrontSide>
                 
                    <BackSide style={{backgroundColor: '#dadae0'}} >
                        <Card.Body >
                            <Card.Title style={sytleTitle}>{props.item.name}</Card.Title>
                            <Card.Text >{props.item.description}</Card.Text>
                            <Button variant="primary">Apply Now</Button>
                        </Card.Body>
                    </BackSide>
                </Flippy>       
            </Card>
            </div>
  )
}

export default ProgramItem