import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
var style = {
  wrapper: {
    float: "left",
    width: "300px",
    listStyle: "none",
  },
  item: {
    lineHeight: "30px",
    border: "2px solid #ddd"
  },
};
class Aside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: '',
    };
  }
  render() {
    return (
      <ul className="aside" style={style.wrapper}>
        {
          this.props.asideData.map((item, idx) => {
            return (
              <li style={style.item}>
                <Link to={item.dist} key={idx}>{item.name}</Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}


export default Aside;