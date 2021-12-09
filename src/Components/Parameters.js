import React from 'react';
import 'antd/dist/antd.css';
import './theme.css';

import { Row, Col, Divider } from 'antd';
import { Typography, Layout } from 'antd';
import { InputNumber, Button } from 'antd';

const style = { background: '#0092ff', height: '100px', padding: '8px 0' };
const Footer = Layout;

function onChange(value) {
    console.log('changed', value);
  }

const { Title, Text } = Typography;

function Parameters() {
    return (
        <div>
            {/* Title Content */}
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Title style={{textAlign: 'left', marginBottom: '18px'}}>Parameter Settings</Title>
                <Text style={{textAlign: 'left', marginBottom: '28px'}}>This is where some sample contents goes. Add some description here to give users an understanding on how this thing works.</Text>
            </div>
             <div style={{ paddingBottom: '28px' }}>        
            {/* Population Parameters */}
            <Title level={3} style={{textAlign: 'left', marginBottom: '20px'}}>Population Parameters</Title>
            
            <Row gutter={16}>
                {/* Simulation Days */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Simulation Days</h3>
                        <InputNumber style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} onChange={onChange} />
                    </div>
                </Col>

                {/* Population Size */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Population Size</h3>
                        <InputNumber style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} onChange={onChange} />
                    </div>
                </Col>

                {/* Initial Infections */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Initial Infections</h3>
                        <InputNumber style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} onChange={onChange} />
                    </div>
                </Col>

                {/* Random Seed */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Random Seed</h3>
                        <InputNumber style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} onChange={onChange} />
                    </div>
                </Col>
            </Row>
            </div> 
            {/* Epidemiological Parameters */}
            <Title level={3} style={{textAlign: 'left', marginBottom: '28px'}}>Epidemiological Parameters</Title>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
            
            <Footer>
                <Divider />
                <Button style={{width: '20%'}} type="primary">Get Code Snippet</Button>
            </Footer>
        </div>
    )
}

export default Parameters
