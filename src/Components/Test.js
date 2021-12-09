import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Form, Button, InputNumber } from 'antd';

function Test() {
    const onFinish = (values) => {
        console.log(values);
      };

    return (
        <div>
            <Form
                name="basic"
                layout="vertical"
                labelCol={{
                    span: 0,
                }}
                wrapperCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
            <Form.Item
                label="username"
                name="username"
                rules={[
                {
                    required: false,
                },
                ]}
            >
                <InputNumber id="name" defaultValue='10'/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 0, span: 1 }}>
                <Button type="primary" htmlType="submit">
                Get Code Snippet
                </Button>
            </Form.Item>`
            </Form>
                </div>
    )
}

export default Test
