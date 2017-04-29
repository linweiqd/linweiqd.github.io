import React from 'react';
import PcHeader from './pc_header';
import PcFooter from './pc_footer';
import PcBody from './pc_body';

export default class PcIndex extends React.Component{
  render(){
    return(
      <div>
        <PcHeader></PcHeader>
        <PcBody></PcBody>
        <PcFooter></PcFooter>
      </div>

    )
  };
}
