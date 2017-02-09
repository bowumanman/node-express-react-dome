
import React, { PropTypes } from 'react';
import s from './About.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../components/Link';
class Home extends React.Component {
  static propTypes = {
    list:React.PropTypes.array,
    onGetList:React.PropTypes.func
  };
  componentDidMount(){
    this.props.onGetList();
  }
  getList(){
    console.log(this.props.list);
    let list = this.props.list;
    if(!list.length) return <div>暂无列表</div>;
    let data = list.map((item,i) =>{
      return (
        <div key = {i} className={s.item}>{item.name}</div>
      )
    });
    return data;
  }
  render() {
    return (
      <div className={s.root}>
        <h1 className={s.header}>Boxlinker 123</h1>
        <Link to="/">Home</Link>
        <div>
          {this.getList()}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
