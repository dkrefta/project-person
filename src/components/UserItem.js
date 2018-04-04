import React, { Component} from 'react'
import PropTypes from 'prop-types'

class UserItem extends Component {
render () {
    const { name, last_name, id, facebook} = this.props;
    return (
    <div className="card">
    <div className="card-content">
    <div className="UserItem-leftBox">
    <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3lObwTn2QuoCHSM_wMN91LuErjKsAeOgKnK0gVhDMTNqoTUt"
    alt="profile"/>
    </div>
    <div clasName="UserItem-rightBox">
     <h2 className="UserItem-name"> {name} </h2>
     <h3 className="UserItem-last_name"> {last_name} </h3>
     <h3 className="UserItem-facebook"> {facebook} </h3>
     //<h3 className="UserItem-id"> {id} </h3>
    </div>
    </div>
    </div>
  );
}

}

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  facebook: PropTypes.string
}
export default UserItem;
