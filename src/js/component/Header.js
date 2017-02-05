import React, {Component} from 'react';
import {Link} from 'react-router';

class Header  extends Component {
    render() {
        return(
            <div className="container">
                <span className="brand"></span>
                <ul className="nav-bar">
                    <li>
                        <a href="#/Products">首页</a>
                        <a href="#">产品</a>
                        <a href="#">特色</a>
                        <a href="#">个人</a>
                    </li>
                </ul>
                <div className="user-center">
                    <a href="#">用户中心</a>
                </div>
            </div>
        );
    }       
}


export default Header;