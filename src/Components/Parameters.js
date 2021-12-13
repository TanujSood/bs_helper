import React from 'react';
import {useState} from 'react';
import 'antd/dist/antd.css';
import './theme.css';

import { Row, Col, Divider } from 'antd';
import { Typography, Layout } from 'antd';
import { InputNumber, Button, Slider } from 'antd';
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
const style = { background: '#0092ff', height: '100px', padding: '8px 0' };
const Footer = Layout;


const { Title, Paragraph, Text } = Typography;

const language = "jsx"



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
            asymptomatic
        }
        setSnippet(true);
        // setButtonState(!buttonState);
        // buttonRef.current.disabled = buttonState;
    }

    const code = 
    `class HelloMessage extends React.Component {
        handlePress = () => {
            alert()
        }
        render() {
            return (
                <div>
                    <p>Hello ${days}</p>
                    <button onClick={this.handlePress}>Say Hello</button>
                </div>
            );
        }
    }
                
    ReactDOM.render(
        <HelloMessage name="Taylor" />, 
        mountNode 
    );`


    function onChange(value) {
        setDays(value)
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
                        <h3 style={{textAlign: 'left'}}>Simulation Days</h3>
                        <InputNumber name="days" style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} onChange={onChange} />
                    </div>
                </Col>

                {/* Population Size */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Population Size</h3>
                        <InputNumber name="size" style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} onChange={onChange} />
                    </div>
                </Col>

                {/* Initial Infections */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Initial Infections</h3>
                        <InputNumber name="infections" style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} onChange={onChange} />
                    </div>
                </Col>

                {/* Random Seed */}
                <Col className="gutter-row" span={6}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{textAlign: 'left'}}>Random Seed</h3>
                        <InputNumber name="seed" style={{width: '100%'}} size='large' min={0} max={1000000} defaultValue={0} onChange={onChange} />
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
                        <Slider name="infectiousness" marks={marks} defaultValue={0} min={0} max={30} onChange={onChange}/>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                        <h3 style={{textAlign: 'left'}}>Time to Infectiousness (Days)</h3>
                        <Slider name="timeInfectiousness" marks={marks} defaultValue={0} min={0} max={30} onChange={onChange}/>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                            <h3 style={{textAlign: 'left'}}>Asymptomatic Period (Days)</h3>
                            <Slider name="asymptomatic" marks={marks} defaultValue={0} min={0} max={30} onChange={onChange}/>
                    </div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div>
                            <h3 style={{textAlign: 'left'}}>Infection Duration (Days)</h3>
                            <Slider name="duration" marks={marks} defaultValue={0} min={0} max={30} onChange={onChange}/>
                    </div>
                </Col>
            </Row>
            <div>
            {snippet === true && (
            <div style={{textAlign: 'left'}}>
                <Title level={5}>src/files/parameters.jar</Title>
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
