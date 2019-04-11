import React from 'react';

import { List, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { connect } from 'dva';

@connect()
class Login extends React.Component {

  handleLogin = () => {
    const { form, dispatch } = this.props;
    const { getFieldsValue } = form;
    const values = getFieldsValue();
    dispatch({
      type: 'user/login',
      payload: {
        ...values,
      },
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List>
          <InputItem {...getFieldProps('userName')} clear placeholder="用户名">
            用户名
          </InputItem>
          <InputItem {...getFieldProps('password')} clear placeholder="密码" type="password">
            密码
          </InputItem>
        </List>
        <Button onClick={this.handleLogin} type="primary">
          登录
        </Button>
      </div>
    );
  }
}
const LoginWrapper = createForm()(Login);
export default LoginWrapper
