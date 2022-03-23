import React, { Component } from 'react';
import { Stsection, Container, Sth2, Stp} from '../modules/style';
import { MediaStsizing,  MediaFlex, Imagecontainer, Contactdata, Contactdetails, Stform, Stinput, Sttxtarea, CusomeStbutton} from './style';
import Image from "../../images/contact/pexels-anton-46924.webp";



class Contact extends Component {
  render() {
    return (
      <Stsection>
          <Container>
            <MediaStsizing width="70%">
                <Sth2>Contact Us</Sth2>
                <Stp ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px" margin="30px 0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Stp>
            </MediaStsizing>
            <MediaFlex>
                <MediaStsizing width="calc((100% - 50px) / 2)">
                   <Imagecontainer src={Image}>
                       <Contactdata>
                           <Contactdetails>+123 - 456 - 789</Contactdetails>
                           <Contactdetails>comet@agency.com</Contactdetails>
                       </Contactdata>
                   </Imagecontainer>
                   <Stp  light ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px" margin="30px 0">Photo by Anton from Pexels</Stp>
                </MediaStsizing>
                <MediaStsizing width="calc((100% - 50px) / 2)">
                <Stp ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px" margin="30px 0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Stp>
                <Stform>
                    <Stinput type="text" placeholder='Name' />
                    <Stinput type="text" placeholder='Surname' />
                    <Stinput type="email" placeholder='Email' />
                    <Stinput type="text" placeholder='subject' />
                    <Sttxtarea placeholder = "Message" />
                    <CusomeStbutton green>SEND MESSAGE</CusomeStbutton>
                </Stform>
                </MediaStsizing>
            </MediaFlex>
          </Container>
      </Stsection>
    )
  }
}

export default Contact;
