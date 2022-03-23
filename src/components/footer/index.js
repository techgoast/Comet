import React, { Component } from 'react';
import {Container, Stp} from '../modules/style';
import {Stfooter, Stspan, MediaFlex} from './style';

import Logo from "../../images/footer/logo.png";



class Footer extends Component {
  render() {
    return (
      <Stfooter>
          <Container>
           <MediaFlex>
               <img src={Logo} alt="logo" />
               <Stp white ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px" fweight="500"> &copy; 2020 - <Stspan>Comet</Stspan>, All Right Reserved</Stp>
               <Stp white ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px" fweight="500"> Back to top</Stp>
           </MediaFlex>
          </Container>
      </Stfooter>
    )
  }
}

export default Footer;
