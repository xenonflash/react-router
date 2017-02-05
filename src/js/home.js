import React, {Component} from 'react';
import Aside from './component/aside';
import Search from './component/Search';
const asideData = [
  {name: "测试1", dist: "/Products"},
  {name: "测试2", dist: "/test2"},
  {name: "测试3", dist: "/test3"},
  {name: "测试4", dist: "/test4"},
];

class Home extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='container'>
        <h1>this is home page</h1>
        <Search placeholder="随便"/>
        <Aside asideData={asideData}/>
        {this.props.children}
      </div>
    );
  }
}

export default Home;