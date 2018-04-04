import React, {Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import { getUserById} from '../actions'

class UserDetail extends Component {

    componentWillMount(){
      this.props.getUserById();
      console.log();
    }
      render () {
    return (
      <div>
      <h2> Hola </h2>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    UserDetail: state.getUserById
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators ({
    getUserById
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
