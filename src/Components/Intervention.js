import React from 'react'
import 'antd/dist/antd.css';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';
import { Typography, Layout } from 'antd';
import { InputNumber, Button, Slider } from 'antd';
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import { Tooltip } from 'antd';


const Footer = Layout;

const { Title, Paragraph, Text } = Typography;

const language = "scala"

const code = 
    `package com.bharatsim.examples.epidemiology.sir

    import com.bharatsim.engine.models.Network
    
    case class School(id: Long) extends Network {
      addRelation[Person]("TEACHES")
    
      override def getContactProbability(): Double = 1.14
    }
    }`

function Intervention() {
    return (
        <div>
            {/* Title Content */}
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Title style={{textAlign: 'left', marginBottom: '18px'}}>Intervention Settings</Title>
                <Text style={{textAlign: 'left', marginBottom: '28px'}}>This is where some sample contents goes. Add some description here to give users an understanding on how this thing works.</Text>
            </div>

            <Row gutter={16}>
                {/* Simulation Days */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}><Tooltip title="Number of days to run the simulation.">Distancing</Tooltip></h3>
                        <InputNumber name="days" style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} />
                    </div>
                </Col>

                {/* Population Size */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Schools</h3>
                        <InputNumber name="size" style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} />
                    </div>
                </Col>

                {/* Initial Infections */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Testing</h3>
                        <InputNumber name="infections" style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} />
                    </div>
                </Col>

                {/* Random Seed */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Tracing</h3>
                        <InputNumber name="seed" style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} />
                    </div>
                </Col>
            </Row>

            <Footer>
                <Divider />
                <Button style={{width: '20%'}} type="primary">Get Code Snippet</Button>
            </Footer>

            <div style={{textAlign: 'left', marginTop:'40px'}}>
                <Title>Code Snippets</Title>
                <Title level={5}>src/main/sir/School.scala</Title>
                <Paragraph>Line 1</Paragraph>
                <CopyBlock
                    text={code}
                    language={language}
                    showLineNumbers={true}
                    theme={dracula}
                 />
            </div>
        </div>
    )
}

export default Intervention
