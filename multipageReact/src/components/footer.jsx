import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer=()=>{
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='6' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Services</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Privacy policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Refund policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Shipping & Return
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Term & conditions
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='6' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Company</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Find a location nearest you.
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  See Our Stores
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  +391 (0)35 2568 4593
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  hello@domain.com
                  </a>
                </li>
              </ul>
            </MDBCol>

          </MDBRow>
        </section>
      </MDBContainer>

    </MDBFooter>
  );
}

export default Footer;