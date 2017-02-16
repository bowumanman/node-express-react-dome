
import React, { PropTypes } from 'react';
import s from './About.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../components/Link';
class Home extends React.Component {
  static propTypes = {
    list:React.PropTypes.array,
    onGetList:React.PropTypes.func
  };
  constructor(props){
    super(props);
    this.state = {
      n:0
    }
  }
  componentDidMount(){
    this.props.onGetList();
  }
  getList(){
    let list = this.props.list;
    if(!list.length) return <div>暂无列表</div>;
    let data = list.map((item,i) =>{
      return (
        <div key = {i} className={s.item}>{item.name}</div>
      )
    });
    return data;
  }
  getNumber(number){
    console.log(number);
    this.setState({
      n:number
    });
  }
  getObj(){
    console.log("get obj")
  }
  render() {
    return (
      <div className={s.root}>
        <h1 className={s.header}>Boxlinker 123</h1>
        <Link to="/">Home</Link>
        <div>
          {this.getList()}
        </div>
        <div>获取Number的值:{this.state.n}</div>
        <Number
          number = {3}
          getNumber = {this.getNumber.bind(this)}
          func = {() =>{this.getObj()}}
        />
      </div>
    );
  }
}


class Number extends React.Component{
  static propTypes = {
    number:React.PropTypes.number,
    getNumber:React.PropTypes.func,
    func:React.PropTypes.func
  };
  constructor(props){
    super(props);
    this.state = {
      number:props.number
    }
  }
  handleClick(){
    this.setState({
      number:this.state.number+1
    });
    this.props.getNumber(this.state.number);
  }
  getObj(){
    this.props.func();
  }
  render(){
      return (
        <div>
          <button onClick = {this.handleClick.bind(this)}>点击 {this.state.number}</button>
          <button onClick={this.getObj.bind(this)}>点击获取父组件的object</button>
        </div>
      )
  }
}

export default withStyles(s)(Home);
