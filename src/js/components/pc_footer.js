import React from 'react'
import { Row, Col } from 'antd';
export default class PcFooter extends React.Component{
  render(){
    return(
      <footer  class='footerIn'>
      <p class='designso'>随机图片组件</p>
      <Row type="flex">
         <Col span={2}></Col>

         <Col span={20} class='footer'>
            <div>
              <ul id="ps">
                <li><img src='./src/images/1.jpg' alt='logo'/></li>
                <li><img src='./src/images/2.jpg' width='200px' alt='logo'/></li>
                <li><img src='./src/images/3.jpg' width='200px' alt='logo'/></li>
                <li><img src='./src/images/4.jpg' width='200px' alt='logo'/></li>
                <li><img src='./src/images/5.jpg' width='200px' alt='logo'/></li>
                <li><img src='./src/images/6.jpg' width='200px' alt='logo'/></li>
                <li><img src='./src/images/7.jpg' width='200px' alt='logo'/></li>
                <li><img src='./src/images/8.png' width='200px' alt='logo'/></li>
                <li><img src='./src/images/9.jpg' width='200px' alt='logo'/></li>
                <li><img src='./src/images/10.jpg' width='200px' alt='logo'/></li>
                  <li><img src='./src/images/11.jpg' width='200px' alt='logo'/></li>
                  <li><img src='./src/images/12.jpg' width='200px' alt='logo'/></li>
                  <li><img src='./src/images/13.jpg' width='200px' alt='logo'/></li>
                  <li><img src='./src/images/14.jpg' width='200px' alt='logo'/></li>

              </ul>
            </div>
            <div>
              做最好的自己！！！本网站测试react思想、组件、及数据交互。
            </div>
            &copy;2017 all right nihao linwei zheshi react
         </Col>

         <Col span={2}></Col>
      </Row>
      </footer>
    )
  }
}
