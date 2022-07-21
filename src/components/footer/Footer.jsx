

import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon, MDBInput, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
      <section className='mb-4'>
          <p><strong>Follow us:</strong></p>
        </section>
        
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

        </section>

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' style={{color:'brown'}}/>
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        <section>
       
          <p><strong>Contact</strong></p>
          <p><MDBIcon fas icon="map-marker-alt" style={{paddingRight:'5px'}}/>  68, TOS Benson Road, Ikorodu, Lagos. | <MDBIcon fas icon="phone-alt" style={{paddingRight:'5px', paddingLeft:'10px'}}/> xxxxxxxxxxx | <MDBIcon fas icon="envelope" style={{paddingRight:'5px', paddingLeft:'10px'}}/> xxxxxxxxxx</p>
        
        </section>

        
             </MDBContainer>

     

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <img src='assets/images/saillogo1.png' alt='' style={{height:'40px',paddingRight:'10px'}}/>
        © 2022 Copyright: 
        <a className='text-white' href='https://mdbootstrap.com/' style={{paddingLeft:'5px'}}>
          sailnigeria
        </a>
      </div>
    </MDBFooter>
  );
}