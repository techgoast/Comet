import React, { Component } from 'react';
import {Stsection, Container, Stsizing, Stp, Stbutton} from "../modules/style";
import {MediaFlex, MediaSizing, Sth1, Stimagecontainer, Sthappycl} from "./style";
import Image from "../../images/home/pexels-monoar-rahman-109371.webp";
import Smile from "../../images/home/smile.png";


class Home extends Component {
  render() {
    return (
      <Stsection>
        <Container>
          <MediaFlex>
                <MediaSizing width="48%">
                  <Sth1>We are "Comet", Creative Agency for web design.</Sth1>
                  <Stp  light fsize="15px" ffamily="'Poppins', sans-serif" lhi="2" margin="10px 0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</Stp>
                  <Stbutton>Get in Touch</Stbutton>
                </MediaSizing>
                <MediaSizing width="48%">
                  <Stimagecontainer src={Image}>
                    <Sthappycl>
                      <img src={Smile} alt="smile" />
                      <Stsizing margin="0 10px">
                        <Stp fsize="25px" ffamily="'Yeseva One', cursive" mediafsize="20px">843</Stp>
                        <Stp fsize="15px" ffamily="'Poppins', sans-serif" mediafsize="13px">Happy Clients</Stp>
                      </Stsizing>
                    </Sthappycl>
                  </Stimagecontainer>
                  <Stp light fsize="15px" ffamily="'Poppins', sans-serif" mediafsize="13px">Photo by Monoar Rahman from Pexels</Stp>
                </MediaSizing>
          </MediaFlex>
        </Container>
      </Stsection>
    )
  }
}

export default Home;