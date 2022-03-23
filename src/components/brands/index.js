import React, { Component } from 'react';
import {Stsection, Container} from "../modules/style";
import {Imagecontainer, MediaFlex, Stimg} from "./style";
import Brand01 from "../../images/brands/01.png";
import Brand02 from "../../images/brands/02.png";
import Brand03 from "../../images/brands/03.png";
import Brand04 from "../../images/brands/04.png";
import Brand05 from "../../images/brands/05.png";
import Brand06 from "../../images/brands/06.png";




class Brands extends Component {
  render() {
    return (
      <Stsection>
        <Container>
          <MediaFlex>
            <Imagecontainer><Stimg src={Brand01} alt="Brand01" /></Imagecontainer>
            <Imagecontainer><Stimg src={Brand02} alt="Brand02" /></Imagecontainer>
            <Imagecontainer><Stimg src={Brand03} alt="Brand03" /></Imagecontainer>
            <Imagecontainer><Stimg src={Brand04} alt="Brand04" /></Imagecontainer>
            <Imagecontainer><Stimg src={Brand05} alt="Brand05" /></Imagecontainer>
            <Imagecontainer><Stimg src={Brand06} alt="Brand06" /></Imagecontainer>
          </MediaFlex>
        </Container>
      </Stsection>
    )
  }
}

export default Brands;