import About from './About';
import {connect} from 'react-redux';
import {getList} from "../../actions/about";

const mapStateToProps = (state) => {
  return {
    list:state.list
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetList:() => {
      dispatch(getList())
    }
  }
};

const AboutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(About);

export default AboutContainer
