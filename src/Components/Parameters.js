import React from 'react';
import 'antd/dist/antd.css';
import './theme.css';

import { Row, Col, Divider } from 'antd';
import { Typography, Layout } from 'antd';
import { InputNumber, Button, Slider } from 'antd';

const style = { background: '#0092ff', height: '100px', padding: '8px 0' };
const Footer = Layout;

function onChange(value) {
    console.log('changed', value);
  }

const marks = {
    0 : '0 days',
    30: '30 days'
};

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
            <Row gutter={48}>
                <Col className="gutter-row" span={6}>
                    <div>
                        <h3 style={{textAlign: 'left'}}>Infectiousness (Beta)</h3>
                        <Slider marks={marks} defaultValue={0} min={0} max={30}/>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <h3 style={{textAlign: 'left'}}>Time to Infectiousness (Days)</h3>
                        <Slider marks={marks} defaultValue={0} min={0} max={30}/>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                            <h3 style={{textAlign: 'left'}}>Asymptomatic Period (Days)</h3>
                            <Slider marks={marks} defaultValue={0} min={0} max={30}/>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                            <h3 style={{textAlign: 'left'}}>Time to Infectiousness (Days)</h3>
                            <Slider marks={marks} defaultValue={0} min={0} max={30}/>
                    </div>
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
