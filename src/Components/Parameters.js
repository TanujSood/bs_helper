import React from 'react';
import {useState} from 'react';
import 'antd/dist/antd.css';
import './theme.css';
import { Tooltip } from 'antd';

import { Row, Col, Divider } from 'antd';
import { Typography, Layout } from 'antd';
import { InputNumber, Button, Slider } from 'antd';
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
const Footer = Layout;


const { Title, Paragraph, Text } = Typography;

const language = "scala"

const marks = {
    0 : '0 days',
    30: '30 days'
};

function Parameters() {
    const [days, setDays] = useState(0);
    const [size, setSize] = useState(0);
    const [infection, setInfection] = useState(0);
    const [seed, setSeed] = useState(0);
    const [timeInfectiousness, setTimeInfectiousness] = useState(0);
    const [infectiousness, setInfectiousness] = useState(0);
    const [duration, setDuration] = useState(0);
    const [asymptomatic, setAsymptomatic] = useState(0);
    const [death, setDeath] = useState(0);
    const [snippet, setSnippet] = useState(false);
    const [buttonState, setButtonState] = useState(true);
    const buttonRef = React.useRef();

    function onSubmitSnippet() {
        const values = {
            days,
            size,
            infection,
            seed,
            timeInfectiousness,
            infectiousness,
            duration,
            asymptomatic,
            death
        }
        setSnippet(true);
        // setButtonState(!buttonState);
        // buttonRef.current.disabled = buttonState;
    }

    const code = 
    `package com.bharatsim.model

    import com.bharatsim.engine.distributions.LogNormal
    
    object Disease {
      final val asymptomaticPopulationPercentage = ${days/100}
      final val severeInfectedPopulationPercentage = 0.3
    
      final val exposedDurationProbabilityDistribution = LogNormal(4.6, 4.8)
      final val presymptomaticDurationProbabilityDistribution = LogNormal(1, 1)
      final val asymptomaticDurationProbabilityDistribution = LogNormal(8, 2)
      final val mildSymptomaticDurationProbabilityDistribution = LogNormal(8, 2)
      final val severeSymptomaticDurationProbabilityDistribution = LogNormal(14, 2.4)
    
      final val infectionRate: Double = ${infectiousness}
      final val deathRate = 0.02
      final val dt = 1.toDouble / ${death}.toDouble
      final val inverse_dt = ${death}.toDouble / 1.toDouble
    
      //  Does not have any effect, can be used to model reduced chances of catching an infection due to masking or such other interventions
      final val betaMultiplier = 1.0
      final val transmissionReduction = 0.8
    
      final val vaccinationRate = 0.05
      final val vaccinatedGammaFractionalIncrease = 1.0
    }`


    function onChangeDays(value) {
        setDays(value)
    }

    function onChangeSize(value) {
        setSize(value)
    }

    function onChangeInfection(value) {
        setInfection(value)
    }

    function onChangeSeed(value) {
        setSeed(value)
    }

    function onChangeTimeInfectiousness(value) {
        setTimeInfectiousness(value)
    }

    function onChangeInfectiousness(value) {
        setInfectiousness(value)
    }

    function onChangeDuration(value) {
        setDuration(value)
        setAsymptomatic(value)
    }

    function onChangeAsymptomatic(value) {
         setAsymptomatic(value)
    }

    function onChangeDeath(value) {
        setDeath(value)
   }
    

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
                        <h3 style={{textAlign: 'left'}}><Tooltip title="Number of days to run the simulation.">Simulation Days</Tooltip></h3>
                        <InputNumber name="days" style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} onChange={onChangeDays} />
                    </div>
                </Col>

                {/* Population Size */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Population Size</h3>
                        <InputNumber name="size" style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} onChange={onChangeSize} />
                    </div>
                </Col>

                {/* Initial Infections */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Initial Infections</h3>
                        <InputNumber name="infections" style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} onChange={onChangeInfection} />
                    </div>
                </Col>

                {/* Random Seed */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Random Seed</h3>
                        <InputNumber name="seed" style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} onChange={onChangeSeed} />
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
                        <Slider name="infectiousness" marks={marks} defaultValue={0} min={0} max={30} onChange={onChangeInfectiousness} />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <h3 style={{textAlign: 'left'}}>Time to Infectiousness (Days)</h3>
                        <Slider name="timeInfectiousness" marks={marks} defaultValue={0} min={0} max={30} onChange={onChangeTimeInfectiousness} />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                            <h3 style={{textAlign: 'left'}}>Asymptomatic Period (Days)</h3>
                            <Slider name="asymptomatic" marks={marks} defaultValue={0} min={0} max={30} onChange={onChangeAsymptomatic} />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                            <h3 style={{textAlign: 'left'}}>Infection Duration (Days)</h3>
                            <Slider name="duration" marks={marks} defaultValue={0} min={0} max={30} onChange={onChangeDuration} />
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop:'40px'}}gutter={48}>
                <Col className="gutter-row" span={6}>
                    <div>
                        <h3 style={{textAlign: 'left'}}>Infection Duration (Days)</h3>
                        <Slider name="infectiousness" marks={marks} defaultValue={0} min={0} max={30} />
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <h3 style={{textAlign: 'left'}}>Time to Death (Days)</h3>
                        <Slider name="timeInfectiousness" marks={marks} defaultValue={0} min={0} max={30} onChange={onChangeDeath}/>
                    </div>
                </Col>
            </Row>
            <div>
            {snippet === true && (
            <div style={{textAlign: 'left', marginTop:'40px'}}>
                <Title>Code Snippets</Title>
                <Title level={5}>src/models/disease.scala</Title>
                <Paragraph>Line 1</Paragraph>
                <CopyBlock
                    text={code}
                    language={language}
                    showLineNumbers={true}
                    theme={dracula}
                 />

                <Title level={5} style={{marginTop:'50px'}}>src/models/disease.scala</Title>
                <Paragraph>Line 104 - Line 110</Paragraph>
                <CopyBlock
                    text={code}
                    language={language}
                    showLineNumbers={true}
                    theme={dracula}
                 />
            </div>
            )}
        </div>

            
            <Footer>
                <Divider />
                <Button style={{width: '20%'}} type="primary" onClick={onSubmitSnippet}>Get Code Snippet</Button>
            </Footer>
        </div>
    )
}

export default Parameters
