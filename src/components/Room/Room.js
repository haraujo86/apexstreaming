import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Script from 'react-load-script'

class Room extends Component {

  componentDidMount() {
    if (typeof window !== 'undefined') {
          let domain = 'meet.jit.si';
      let options = {
          roomName: 'foolboyspersonalroom',
          width: 1024,
          height: 768,
          parentNode: document.querySelector('#root')
      };
      console.log(options);
      let api = new window.JitsiMeetExternalAPI(domain, options); 
    }
  }

  render = () => (
    <React.Fragment>
      <Typography variant="headline" component="h3">Testando</Typography>
      <Script
      url="https://meet.jit.si/external_api.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}></Script>
    </React.Fragment>
  );

  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }
  
  handleScriptError() {
    this.setState({ scriptError: true })
  }
  
  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }
}

export default withRouter(Room);