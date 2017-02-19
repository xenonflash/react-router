import React, { Component } from 'react';
import Aside from './component/aside';
const asideData = [
  {name: "电器", dist: "/elec"},
  {name: "木制", dist: "/wood"},
  {name: "艺术", dist: "/art"},
  {name: "热销", dist: "/hot"},
];
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }
  componentWillMount() {
    this.setState({
      product: [
        { id: 'asgfhd', name: '台灯', desc: 'assdafasfsdfsafsdf', price: 20 },
        { id: 'atryhg', name: '电扇', desc: 'assdafasfsdfsafsdf', price: 80 },
        { id: '5dfgdf', name: '房子', desc: 'assdafasfsdfsafsdf', price: 234 },
        { id: 'vcbhdf', name: '手机', desc: 'assdafasfsdfsafsdf', price: 32423 },
        { id: 'acxsds', name: '电脑', desc: 'assdafasfsdfsafsdf', price: 222 },
        { id: 'bdrdgd', name: '桌子', desc: 'assdafasfsdfsafsdf', price: 674 },
      ],
    });
  }
  render() {
    return (
      <div className='container'>
        <h1>这是产品页面</h1>
        <hr />
         <Aside asideData={asideData}/>
        {
          this.state.product.map((item) => {
            return (
              <div className='product-item'>
                <div className="product-img"></div>
                <div className="product-info">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-desc">{item.desc}</p>
                  <span>{item.price}</span>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}