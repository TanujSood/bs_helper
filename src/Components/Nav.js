import React from 'react'
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
  } from '@ant-design/icons';

function Nav() {
    return (
        <div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

            
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/parameters">Parameters</Link>
                </Menu.Item>

                <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/intervention">Interventions</Link>
                </Menu.Item>

                <Menu.Item key="3" icon={<FileOutlined />}>
                <Link to="/output">Output</Link>
                </Menu.Item>


            </Menu>
        </div>
    )
}

export default Nav
