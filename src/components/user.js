import React, { Component } from 'react';
import PropTypes from 'prop-types';


class User extends Component {

    constructor(props) {
        super(props);
        const { name, department, salary, isVisible } = props;
        this.state = {
            name,
            department,
            salary,
            isVisible,
        };
    }

    onClickEvent = () => {
        this.setState({ isVisible: !this.state.isVisible });
    }

    onDeleteUser = () => {
        const { id, deleteUser } = this.props;
        deleteUser(id);
    }

    render() {
        const { name, department, salary, isVisible } = this.state;
        return (
            <div>

                <div className="col-md-8 mb-4">
                    <div className="card">
                        <div className='card-header d-flex justify-content-between'>
                            <h4 className='d-inline' onClick={this.onClickEvent}>{name}</h4>
                            <i className="fas fa-trash-alt" onClick={this.onDeleteUser} style={{ cursor: 'pointer' }}></i>
                        </div>
                        {
                            isVisible ? <div className="card-body">
                                <p className="card-text">Maaş: {salary}</p>
                                <p className="card-text">Departman: {department}</p>
                                <p className="card-text">Salary: {salary}</p>
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        )
    }

}

User.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
}

User.defaultProps = {
    name: "Undetermined",
    department: "Undetermined",
    salary: "Undetermined",
    isVisible: false
}


export default User;