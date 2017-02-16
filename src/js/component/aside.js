import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
var style = {
  wrapper: {
    float: "left",
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
      <ul className="aside">
        {
          this.props.asideData.map((item, idx) => {
            return (
              <li>
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