import { Button } from 'antd-mobile';
import React from 'react';
import { connect } from 'dva';

const styles = require('./index.less');

@connect()
export default class extends React.Component {

  onLogout = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/logout',
    });
  };

  render = () => (
    <div className={styles.home}>
      <div className={styles.index}>
        <div className={styles.title}>Home</div>
        <Button type="primary" className={styles['btn-enter']} onClick={this.onLogout}>
            退出
        </Button>
      </div>
    </div>
    );
}
