//注册
import React, { Component } from 'react'
import styles from '../view/IndexPage.css'
import { connect } from 'dva'
import {SignINApi} from '../services/user';

import {
    Form,
    Input,
    Select,
    Button,
    AutoComplete,
} from 'antd';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
class Register extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    async SignIN(payload){
        const result =await SignINApi(payload);
        console.log(result);
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.SignIN(values)
            }
        });
    };
    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    handleWebsiteChange = value => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        return (
            <div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请输入用户名', whitespace: true }],
                        })(<Input placeholder="用户" className={styles.ant_col}/>)}
                    </Form.Item>
                    <Form.Item hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入密码',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password placeholder="密码" className={styles.ant_col}/>)}
                    </Form.Item>
                    <Form.Item placeholder="密码" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入确认密码',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur} placeholder="确认密码" className={styles.ant_col}/>)}
                    </Form.Item>


                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={styles.ant_col}>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default connect()((Form.create({ name: 'register' }))(Register))