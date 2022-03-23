import React, { Component } from 'react';
import { Stsection, Container, Sth2, Stp } from '../modules/style';
import { Stimagecontainer, CustomeSth2, CustomeStp, MediaStsizing, MediaFlex } from './style';
import Logo from "../../images/logo/logopic.png";
import Image from "../../images/about1/pexels-tranmautritam-326501.webp";


class About1 extends Component {
  render() {
    return (
      <Stsection>
          <Container>
            <MediaStsizing width="70%">
                <Sth2>
                    <img src={Logo} alt="logo" className='image'/>
                    The urge for good design is the same as the urge to go on living.
                </Sth2>
                <Stp lhi="2" ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px" margin="30px 0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Stp>
            </MediaStsizing>
            <MediaFlex>
                <MediaStsizing width="40%">
                    <Stimagecontainer src={Image}/>
                </MediaStsizing>
                <MediaStsizing width="60%">
                    <CustomeSth2>Windu skywalker coruscant jango coruscant droid solo.</CustomeSth2>
                    <CustomeStp  ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px" margin="30px 0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</CustomeStp>
                    <CustomeStp  ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px" margin="30px 0">Dolor sit amet, consetetur.</CustomeStp>
                    <CustomeStp  ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px" margin="30px 0">Consetetur sadipscing elitr, sed ound losto dest.</CustomeStp>
                </MediaStsizing>
            </MediaFlex>
          </Container>
      </Stsection>
    )
  }
}

export default About1;
