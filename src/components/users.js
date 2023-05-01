import React, { Component } from 'react';
import User from './user'
import PropTypes from 'prop-types';

class users extends Component {
    render() {
        const { users, deleteUser } = this.props;
        return (
            <div>
                {
                    users.map((user) => {
                        return (<User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            department={user.department}
                            salary={user.salary}
                            deleteUser={deleteUser} />)
                    })
                }
            </div>
        )
    }
}

users.propTypes = {
    users: PropTypes.array.isRequired,
    deleteUser: PropTypes.func.isRequired
}

export default users;