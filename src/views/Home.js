  import React, {Component} from 'react'
  import { connect } from 'react-redux'
  import {bindActionCreators} from 'redux'
  import { getUsers } from '../actions'

  class Home extends Component {
    componentWillMount(){
      this.props.getUsers();
    }
    render(){
       return (
         <div>
          <h2> Home </h2>
         </div>
       );
    }
  }

  //This function convert the value of the store
  // in prop for the component
  function mapStateToProps(state) {
    return {
      users: state.getUsers
    }
  }

  function mapDispatchToProps( dispatch) {
    return bindActionCreators ({
      getUsers
    }, dispatch)
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Home)
