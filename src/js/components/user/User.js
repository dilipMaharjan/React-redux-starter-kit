import React, { Component } from 'react';
import { connect } from "react-redux";

class User extends Component {
    createUserList(){
        return this.props.users.map((user, i) => {
			return (
				<li key={i} style={{listStyle:'none'}}>
					{user.name}
				</li>
			);
});
    }
    render() {
        return (
            <div>
               <ol>{this.createUserList()}</ol>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return { users: state.users };

}

export default connect(mapStateToProps)(User);