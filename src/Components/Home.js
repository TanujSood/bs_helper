import { Layout, Menu } from 'antd';
import React from 'react';
import { useState } from 'react';
import 'antd/dist/antd.css';
import './theme.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Parameters from './Parameters'

import Output from './Output';
import Intervention from './Intervention';
import Test from './Test';
import Nav from './Nav';
const { Header, Content, Sider } = Layout;

function Home(){
  const [collapsed, setCollapsed] = useState(false)
  const [spinner, setSpinner] = useState(false)

  const onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  const onSubmitt = (value) => {
    console.log(value)
  }

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}><h1>BharatSim</h1></div>
          <Nav />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 24px' }}>
            {/* Navigation and Routing */}
            
              <div>
                <Routes>
                  <Route path="/" element={<Parameters />} />
                  <Route path="/parameters" element={<Parameters />} />
                  <Route path="/output" element={<Output />} />
                  <Route path="/intervention" element={<Intervention />} />
                </Routes>
                </div>
            
          
          </Content>
        </Layout>
      </Layout>
    );

}

export default Home