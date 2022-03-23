import React, { Component } from 'react';
import {Stsection, Container} from "../modules/style";
import {MediaFlex, MediaStsizing, MediaStp} from "./style";




class Stats extends Component {
  render() {
    return (
      <Stsection>
        <Container>
          <MediaFlex>
              <MediaStsizing width = "25%">
                <MediaStp fsize="60px" ffamily="'Yeseva One', cursive" mediafsize="30px">74</MediaStp>
                <MediaStp fsize="16px" ffamily="'Poppins', sans-serif" mediafsize="14px">Completed Projects</MediaStp>
              </MediaStsizing>
              <MediaStsizing width = "25%">
                <MediaStp fsize="60px" ffamily="'Yeseva One', cursive" mediafsize="30px">2472</MediaStp>
                <MediaStp fsize="16px" ffamily="'Poppins', sans-serif" mediafsize="14px">Emails Sent</MediaStp>
              </MediaStsizing>
              <MediaStsizing width = "25%">
                <MediaStp fsize="60px" ffamily="'Yeseva One', cursive" mediafsize="30px">843</MediaStp>
                <MediaStp fsize="16px" ffamily="'Poppins', sans-serif" mediafsize="14px">Clients</MediaStp>
              </MediaStsizing>
              <MediaStsizing width = "25%">
                <MediaStp fsize="60px" ffamily="'Yeseva One', cursive" mediafsize="30px">8967</MediaStp>
                <MediaStp fsize="16px" ffamily="'Poppins', sans-serif" mediafsize="14px">Coffee Cups</MediaStp>
              </MediaStsizing>
          </MediaFlex>
        </Container>
      </Stsection>
    )
  }
}

export default Stats;
