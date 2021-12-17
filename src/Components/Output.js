import React from 'react'
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { Row, Col, Divider } from 'antd';
import { Switch } from 'antd';
import { Tooltip } from 'antd';
import { Button, Layout } from 'antd';
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";


const Footer = Layout;

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

const { Title, Paragraph, Text } = Typography;

const language = "scala"

const code = 
    `import com.bharatsim.examples.epidemiology.tenCompartmentalModel.InfectionStatus.{
        Asymptomatic,
        Deceased,
        Exposed,
        InfectedMild,
        InfectedSevere
      }`

function Output() {
    return (
        <div>
            {/* Title Content */}
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Title style={{textAlign: 'left', marginBottom: '18px'}}>Output Settings</Title>
                <Text style={{textAlign: 'left', marginBottom: '28px'}}>This is where some sample contents goes. Add some description here to give users an understanding on how this thing works.</Text>
            </div>

            <Row gutter={16}>
                {/* Simulation Days */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}><Tooltip title="Number of days to run the simulation.">Asymptomatic</Tooltip></h3>
                        <Switch onChange={onChange}></Switch>
                    </div>
                </Col>

                {/* Population Size */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Deceased</h3>
                        <Switch onChange={onChange}></Switch>
                    </div>
                </Col>

                {/* Initial Infections */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Exposed</h3>
                        <Switch onChange={onChange}></Switch>
                    </div>
                </Col>

                {/* Random Seed */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Hospitalized</h3>
                        <Switch onChange={onChange}></Switch>
                    </div>
                </Col>
            </Row>

            <Row gutter={16}>
                {/* Simulation Days */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}><Tooltip title="Number of days to run the simulation.">Infected</Tooltip></h3>
                        <Switch onChange={onChange}></Switch>
                    </div>
                </Col>

                {/* Population Size */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Recovered</h3>
                        <Switch onChange={onChange}></Switch>
                    </div>
                </Col>

                {/* Initial Infections */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Susceptible</h3>
                        <Switch onChange={onChange}></Switch>
                    </div>
                </Col>
            </Row>

            <Footer>
                <Divider />
                <Button style={{width: '20%'}} type="primary">Get Code Snippet</Button>
            </Footer>

            <div style={{textAlign: 'left', marginTop:'40px'}}>
                <Title>Code Snippets</Title>
                <Title level={5}>src/main/TenCompartment/SEIROutputSpec.scala</Title>
                <Paragraph>Line 6</Paragraph>
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

export default Output
