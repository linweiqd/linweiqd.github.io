import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import {button} from 'antd';
import 'antd/dist/antd.css';
import PcIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';

export default class Root extends React.Component{
  render(){
    return (
      <div>
          <MediaQuery query='(min-device-width:1224px)'>
              <PcIndex></PcIndex>
          </MediaQuery>
          <MediaQuery query='(max-device-width:1224px)'>
              <MobileIndex></MobileIndex>
          </MediaQuery>
      </div>

    )
  }
}

ReactDOM.render(<Root/>,document.getElementById('one'));
