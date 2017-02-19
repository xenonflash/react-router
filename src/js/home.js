import React, {Component} from 'react';
import Search from './component/Search';

class Home extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='container'>
        <h1>this is home page</h1>
        <Search placeholder="随便"/>
        {this.props.children}
      </div>
    );
  }
}

export default Home;