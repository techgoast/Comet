import React, { Component } from 'react';
import { Stsection, Container, Sth2, Stp, Sth3} from '../modules/style';
import { MediaStsizing, Imagecontainer, Author, CustomeFlex, CustomeStp, Photoissuer, MediaFlex} from './style';
import Blog1 from "../../images/blog/blog1.webp";
import Blog2 from "../../images/blog/blog2.webp";
import Blog3 from "../../images/blog/blog3.webp";


class Blog extends Component {
  render() {
    return (
      <Stsection>
          <Container>
            <MediaStsizing width="70%">
                <Sth2>Our Blog Stories</Sth2>
                <Stp ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px" margin="30px 0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Stp>
            </MediaStsizing>
            <MediaFlex>
                <MediaStsizing width="calc((100% - 20px) / 3)">
                    <Imagecontainer src={Blog1} alt="blog1">
                        <Author>By: Luke Skywalker</Author>
                    </Imagecontainer>
                    <Sth3>We Have New Office</Sth3>
                    <CustomeFlex>
                        <Stp ffamily="'Poppins', sans-serif" fsize="13px" fweight="500">Nov 17, 2020</Stp>
                        <Stp  ffamily="'Poppins', sans-serif" fsize="13px" margin="0 15px">4 min read</Stp>
                    </CustomeFlex>
                        <CustomeStp ffamily="'Poppins', sans-serif" fsize="12px" fweight="500">READ MORE</CustomeStp>
                </MediaStsizing>
                <MediaStsizing width="calc((100% - 20px) / 3)">
                    <Imagecontainer src={Blog2} alt="blog1">
                        <Author>By: Luke Skywalker</Author>
                        <Photoissuer light ffamily="'Poppins', sans-serif" fsize="13px">Photo by Jess Bailey Designs from Pexels</Photoissuer>
                    </Imagecontainer>
                    <Sth3>We Have New Office</Sth3>
                    <CustomeFlex>
                        <Stp ffamily="'Poppins', sans-serif" fsize="13px" fweight="500">Nov 17, 2020</Stp>
                        <Stp  ffamily="'Poppins', sans-serif" fsize="13px" margin="0 15px">4 min read</Stp>
                    </CustomeFlex>
                        <CustomeStp ffamily="'Poppins', sans-serif" fsize="12px" fweight="500">READ MORE</CustomeStp>
                </MediaStsizing>
                <MediaStsizing width="calc((100% - 20px) / 3)">
                    <Imagecontainer src={Blog3} alt="blog1">
                        <Author>By: Luke Skywalker</Author>
                        <Photoissuer light ffamily="'Poppins', sans-serif" fsize="13px">Photo by Canva Studio from Pexels</Photoissuer>
                    </Imagecontainer>
                    <Sth3>We Have New Office</Sth3>
                    <CustomeFlex>
                        <Stp ffamily="'Poppins', sans-serif" fsize="13px" fweight="500">Nov 17, 2020</Stp>
                        <Stp  ffamily="'Poppins', sans-serif" fsize="13px" margin="0 15px">4 min read</Stp>
                    </CustomeFlex>
                        <CustomeStp ffamily="'Poppins', sans-serif" fsize="12px" fweight="500">READ MORE</CustomeStp>
                </MediaStsizing>
            </MediaFlex>
          </Container>
      </Stsection>
    )
  }
}

export default Blog;
