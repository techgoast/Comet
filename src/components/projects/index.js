import React, { Component } from 'react';
import {Stsection, Container, Sth2, Stp} from "../modules/style";
import {MediaFlex, MediaStsizing, Project, Imagecontainer, Overlay, White, CustomeStbutton} from "./style";
import Project1 from "../../images/projects/project1.webp";
import Project2 from "../../images/projects/project2.webp";
import Project3 from "../../images/projects/project3.webp";
import Project4 from "../../images/projects/project4.webp";
import Project5 from "../../images/projects/project5.webp";
import Project6 from "../../images/projects/project6.webp";
import Logo from "../../images/projects/Path 244.png"



class Projects extends Component {
  render() {
    return (
      <Stsection>
        <Container>
          <MediaStsizing width="70%">
            <Sth2>Our Awesome Projects</Sth2>
            <Stp  lhi="2" ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px" margin="30px 0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Stp>
          </MediaStsizing>
          <MediaFlex>
                <Project>
                    <Imagecontainer src={Project1}>
                        <Overlay>
                            <White>
                                <img src={Logo} alt="logo" />
                                <Stp white lhi="2" ffamily="'Yeseva One', cursive" fsize="25px" mediafsize="20px">Project</Stp>
                                <Stp white ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. </Stp>
                            </White>
                        </Overlay>
                    </Imagecontainer>
                    <Stp light ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px">Photo by Thought Catalog from Pexels</Stp></Project>
                <Project>
                    <Imagecontainer src={Project2}>
                        <Overlay>
                            <White>
                                <img src={Logo} alt="logo" />
                                <Stp white lhi="2" ffamily="'Yeseva One', cursive" fsize="25px" mediafsize="20px">Project</Stp>
                                <Stp white ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. </Stp>
                            </White>
                        </Overlay>
                    </Imagecontainer>
                    <Stp light ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px">Photo by Prateek Katyal from Pexels</Stp></Project>
                <Project>
                    <Imagecontainer src={Project3}>
                        <Overlay>
                            <White>
                                <img src={Logo} alt="logo" />
                                <Stp white lhi="2" ffamily="'Yeseva One', cursive" fsize="25px" mediafsize="20px">Project</Stp>
                                <Stp white ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. </Stp>
                            </White>
                        </Overlay>
                    </Imagecontainer>
                    <Stp light ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px">Photo by Yugantar Sambhangphe from Pexels</Stp></Project>
                <Project>
                    <Imagecontainer src={Project4}>
                        <Overlay>
                            <White>
                                <img src={Logo} alt="logo" />
                                <Stp white lhi="2" ffamily="'Yeseva One', cursive" fsize="25px" mediafsize="20px">Project</Stp>
                                <Stp white ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. </Stp>
                            </White>
                        </Overlay>
                    </Imagecontainer>
                    <Stp light ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px">Photo by Cats Coming from Pexels</Stp></Project>
                <Project>
                    <Imagecontainer src={Project5}>
                        <Overlay>
                            <White>
                                <img src={Logo} alt="logo" />
                                <Stp white lhi="2" ffamily="'Yeseva One', cursive" fsize="25px" mediafsize="20px">Project</Stp>
                                <Stp white ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. </Stp>
                            </White>
                        </Overlay>
                    </Imagecontainer>
                    <Stp light ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px">Photo by Ola Dapo from Pexels</Stp></Project>
                <Project>
                    <Imagecontainer src={Project6}>
                        <Overlay>
                            <White>
                                <img src={Logo} alt="logo" />
                                <Stp white lhi="2" ffamily="'Yeseva One', cursive" fsize="25px" mediafsize="20px">Project</Stp>
                                <Stp white ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam. </Stp>
                            </White>
                        </Overlay>
                    </Imagecontainer>
                    <Stp light ffamily="'Poppins', sans-serif" fsize="15px" mediafsize="13px">Photo by Format from Pexels</Stp></Project>
          </MediaFlex>
          <CustomeStbutton>show me more</CustomeStbutton>
        </Container>
      </Stsection>
    )
  }
}

export default Projects;