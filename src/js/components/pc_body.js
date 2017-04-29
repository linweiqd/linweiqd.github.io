import React from 'react';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


export default class PcBody extends React.Component{
  render(){
    return(
      <section class='sectionIn'>
        <Row type="flex">
           <Col span={2}></Col>
           <Col span={20}>
             <Carousel autoplay class='bannerIn'>
               <div><img src='./src/images/01.png' alt='banner' /></div>
               <div><img src='./src/images/02.png' alt='banner' /></div>
               <div><img src='./src/images/03.png' alt='banner' /></div>
               <div><img src='./src/images/04.png' alt='banner' /></div>
             </Carousel>

              <p class='designso'>设计理念</p>
             <Tabs defaultActiveKey="2" size="small" class='anted'>
                <TabPane tab="亲密性" key="1">
                    如果信息之间关联性越高，它们之间的距离就应该越接近，也越像一个视觉单元；反之，则它们的距离就应该越远，也越像多个视觉单元。亲密性的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。
                </TabPane>
                <TabPane tab="对齐" key="2">
                    正如『格式塔学派』中的连续律（Law of Continuity）所描述的，在知觉过程中人们往往倾向于使知觉对象的直线继续成为直线，使曲线继续成为曲线。在界面设计中，将元素进行对齐，既符合用户的认知特性，也能引导视觉流向，让用户更流畅地接收信息。
                </TabPane>
                <TabPane tab="对比" key="3">
                    对比是增加视觉效果最有效方法之一，同时也能在不同元素之间建立一种有组织的层次结构，让用户快速识别关键信息。
                    主次关系对比
                    总分关系对比
                    状态关系对比
                </TabPane>
                <TabPane tab="重复" key="4">
                    相同的元素在整个界面中不断重复，不仅可以有效降低用户的学习成本，也可以帮助用户识别出这些元素之间的关联性。
                </TabPane>
                <TabPane tab="直接了当" key="5">
                    正如 Alan Cooper 所言：『需要在哪里输出，就要允许在哪里输入』。这就是直接操作的原理。eg：不要为了编辑内容而打开另一个页面，应该直接在上下文中实现编辑。
                </TabPane>
                <TabPane tab="足不出户" key="6">
                    能在这个页面解决的问题，就不要去其它页面解决，因为任何页面刷新和跳转都会引起变化盲视（Change Blindness），导致用户心流（Flow）被打断。频繁的页面刷新和跳转，就像在看戏时，演员说完一行台词就安排一次谢幕一样。
                </TabPane>
                <TabPane tab="简化交互" key="7">
                    如果用户鼠标移动距离越少、对象相对目标越大，那么用户越容易操作。通过运用上下文工具（即：放在内容中的操作工具），使内容和操作融合，从而简化交互。
                </TabPane>
                <TabPane tab="巧用过度" key="8">
                    人脑灰质（Gray Matter）会对动态的事物（eg：移动、形变、色变等）保持敏感。在界面中，适当的加入一些过渡效果，能让界面保持生动，同时也能增强用户和界面的沟通。
                </TabPane>
                <TabPane tab="即使反应" key="9">
                    就像『牛顿第三定律』所描述作用力和反作用一样，用户进行了操作或者内部数据发生了变化，系统就应该立即有一个对应的反馈，同时输入量级越大、重要性越高，那么反馈量级越大、重要性越高。
                </TabPane>
             </Tabs>

           </Col>
           <Col span={2} order={1}></Col>
        </Row>
      </section>
    )
  }
}
