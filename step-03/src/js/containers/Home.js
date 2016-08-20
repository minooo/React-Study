import React,{ Component } from 'react'
import { Button, NavBar, SearchBar } from 'antd-mobile';
import { createForm } from 'rc-form';

class Home extends Component {
  state = {
    dark: false
  }
  switchDark() {
    this.setState({ dark: !this.state.dark });
  }
  render() {
    const { getFieldProps } = this.props.form;
    console.log(this.props.form.getFieldsValue());
    return (
      <div className="pageAnimate">
        <SearchBar
          {...getFieldProps('SearchBar')}
          placeholder="嗖的一声"
          onSubmit={(value) => { console.log(`onSubmit: ${value}`); }}
          onClear={() => { console.log('onClear'); }}
          onCancel={() => { console.log('onCancel'); }}
        />
      </div>
    )
  }
}

Home = createForm()(Home);

export default Home;