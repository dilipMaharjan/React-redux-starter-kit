import React, { Component } from "react";
import { connect } from "react-redux";

class UserList extends Component {
    createUserList() {
        return this.props.userList.map((user, i) => {
            return ( <
                li key = { i }
                style = {
                    {
                        listStyle: "none"
                    }
                } > { " " } { user.name } { " " } <
                /li>
            );
        });
    }
    render() {
        console.log("userList", this.props);
        return ( <
            div >
            <
            ol > { this.createUserList() } < /ol>  {" "} < /
            div >
        );
    }
}
const mapStateToProps = state => {
    return {
        userList: state.users
    };
};
export default connect(mapStateToProps)(UserList);