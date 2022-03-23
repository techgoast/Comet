import React, { Component } from 'react';
import {Container, Stbutton} from "../modules/style";
import {Stheader, MediaFlex, Stlogo, Stul, Stli} from "./style";
import Logopic from "../../images/logo/logopic.png";
import Logoname from "../../images/logo/logoname.png";

class Header extends Component {
  render() {
    return (
      <Stheader>
        <Container>
          <MediaFlex>
            <Stlogo>
              <img src={Logopic} alt="logopic" className='image'/>
              <img src={Logoname} alt="logopic" />
            </Stlogo>
            <Stul>
              <Stli active={true}>Company</Stli>
              <Stli>Projects</Stli>
              <Stli>About</Stli>
              <Stli>Blog</Stli>
              <Stli>Contact</Stli>
            </Stul>
            <Stbutton green>Sign in</Stbutton>
          </MediaFlex>
        </Container>
      </Stheader>
    )
  }
}

export default Header;