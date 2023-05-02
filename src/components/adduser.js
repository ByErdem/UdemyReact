import React, { Component } from 'react';
import posed from 'react-pose';

const Animation = posed.div({
    visible: {
        height: "auto",
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        height: "0px",
        applyAtEnd: {
            display: "none"
        }
    }
});

class AddUser extends Component {

    constructor()
    {
        super();
        this.changeName = this.keyUpHandler.bind(this, 'name');
        this.changeDepartment = this.keyUpHandler.bind(this, 'department');
        this.changeSalary = this.keyUpHandler.bind(this, 'salary');
    }

    state = {
        visible: true,
        name: "",
        department: "",
        salary: ""
    }


    keyUpHandler(refName, e) {
        console.log(refName);
        console.log(e.target.value);
        // prints either LoginInput or PwdInput
    }

    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }



    /*changeName = (e) =>{
        this.setState({
            name: e.target.value
        });
        console.log(this.state.name);
    }

    changeSalary = (e) =>{
        this.setState({
            salary: e.target.value
        });
    }

    changeDepartment = (e) =>{
        this.setState({
            department: e.target.value
        });
    }*/

    render() {
        const { visible, name, salary, department } = this.state;
        return (
            <div className='col-md-8 mb-4 mt-4 overflow-hidden'>

                <button onClick={this.changeVisibility} className='btn btn-dark btn-block mb-2'>{visible ? "Hide Form" : "Show Form"}</button>

                <Animation pose={visible ? "visible" : "hidden"}>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Add User Form</h4>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label htmlFor='name'>Name</label>
                                    <input type='text' id='name' name='name' className='form-control' placeholder='Enter Name' defaultValue={name} onKeyUp={this.changeName} ref="name" />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='department'>Department</label>
                                    <input type='text' id='department' name='department' className='form-control' placeholder='Enter Department' defaultValue={department} onKeyUp={this.changeDepartment} ref="department" />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='salary'>Salary</label>
                                    <input type='text' id='salary' name='salary' className='form-control' placeholder='Enter Salary' defaultValue={salary} onKeyUp={this.changeSalary} ref="salary" />
                                </div>

                                <button type='submit' className='btn btn-danger btn-block'>Add User</button>
                            </form>
                        </div>
                    </div>
                </Animation>

            </div>
        );
    }
}

export default AddUser;