import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.displayName = 'search';
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleClick() {
    this.props.handleClick(this.state.value);
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange.bind(this)} placeholder={this.props.placeholder}/>
        <button onClick={this.handleClick.bind(this)}>搜索</button>
      </div>
    );
  }
}
export default Search;