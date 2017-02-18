import React, {Component} from 'react';
import Aside from './component/aside';
import Search from './component/Search';
const asideData = [
  {name: "产品", dist: "/Products"},
  {name: "特色", dist: "/test2"},
  {name: "个人中心", dist: "/test3"},
  {name: "促销", dist: "/test4"},
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