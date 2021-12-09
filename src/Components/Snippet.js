import React from 'react'
import 'antd/dist/antd.css';
import './theme.css'
import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const language = "jsx"
const code = 
`class HelloMessage extends React.Component {
    handlePress = () => {
        alert('Hello')
    }
    render() {
        return (
            <div>
                <p>Hello {this.props.name}</p>
                <button onClick={this.handlePress}>Say Hello</button>
            </div>
        );
    }
}
            
ReactDOM.render(
    <HelloMessage name="Taylor" />, 
    mountNode 
);`

function Snippet() {
    return (
        <div>
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
        </div>
    )
}

export default Snippet
