import React from 'react'
import { useState } from 'react';
import 'antd/dist/antd.css';
import '../index.css';

import { Button, InputNumber } from 'antd';


function Submit(props) {

    const [Data,setData] = useState(null)

    function handleChange(val) {
        console.log(val)
        setData(val)
    }

    function handleClick() {
        alert("The number is " + Data)
        props.onSubmitt('jajaja')
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h3 style={{textAlign: 'left'}}>Simulation Days</h3>
            <InputNumber style={{width: '30%', marginBottom: '10px'}} size='large' min={0} max={1000000} defaultValue={0} onChange={handleChange} />
            <Button style={{width: '30%'}} type="primary" onClick={handleClick}>Get Code Snippet</Button>
            <h1>The number is {Data}</h1>
        </div>
    )
}

export default Submit

