import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PcHeader extends React.Component{
  constructor(){
      super();
      this.state={
        current:'mail'
      }
  }
  render(){
    return(
      <header>
        <Row type="flex">
        <Col span={24}>
            <div class='linweiheader'>
                <div class='linaed' >
                  <p class='animated zoomIn myCome'>welcom to my website</p>
                  <p>姓名 ： 林伟</p>
                  <p>出生 ： 1992年5月3日</p>
                  <p>兴趣 ： 旅游</p>
                  <p>民族 ： 汉</p>
                  <p>技能 ： web前端、UI</p>
                  <p>注释 ：本网站为测试react组件开发</p>
                </div>
                  <div id='banner'>
                    <ul class="yun">
                      <li></li>
                      <li></li>
                    </ul>
                    <span class="xian"></span>
                    <span class="left"></span>
                    <span class="right"></span>
                  </div>

                    <a href='/' class='logo'>
                      <img src='./src/images/logo.png' alt='logo'/>
                      <span class='animated shake'>LinWei</span>
                    </a>

            </div>

            <div class='sersrlds'>
               <Col span={2}></Col>
               <Col span={4}>
                  <div>

                  </div>
               </Col>
               <Col span={16}>

                  <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                      <Menu.Item key="mail" class='animated bounceIn'><Icon type="mail" />头条</Menu.Item>
                      <Menu.Item key="guonei"><Icon type="mail" />头条</Menu.Item>
                      <Menu.Item key="one"><Icon type="mail" />头条</Menu.Item>
                      <Menu.Item key="two"><Icon type="mail" />头条</Menu.Item>
                      <Menu.Item key="three"><Icon type="mail" />头条</Menu.Item>
                      <Menu.Item key="four"><Icon type="mail" />头条</Menu.Item>
                      <Menu.Item key="fire"><Icon type="mail" />头条</Menu.Item>
                      <Menu.Item key="six"><Icon type="mail" />头条</Menu.Item>
                  </Menu>

               </Col>
               <Col span={2} order={1}></Col>
             </div>
           </Col>
        </Row>
      </header>
    )
  };
}
