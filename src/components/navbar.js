import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    render() {

        const { data, activeMenu } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        {
                            data.map((item, index) => {

                                if (index === activeMenu) {
                                    return (
                                        <li key={item.id} className="nav-item active">
                                            <a className="nav-link" href={item.link}>{item.name}</a>
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li key={item.id} className="nav-item">
                                            <a className="nav-link" href={item.link}>{item.name}</a>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    data: PropTypes.array.isRequired,
    activeMenu: PropTypes.number.isRequired
}

Navbar.defaultProps={
    activeMenu: 0
}


export default Navbar;