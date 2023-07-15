import React,{Component} from "react";
import './Login.css';
import fire from '../../config/Fire';
class Register extends Component{
    // intializingß
    state = {
        email: '',
        password: '',
        displayName: '',
        fireErrors: ''
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            var currentUser = fire.auth().currentUser;
            currentUser.updateProfile({
                displayName: this.state.displayName
            })
        })
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }



    render(){
        let errorNotification = this.state.fireErrors ? 
           ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        return(
            <>
            {errorNotification}
            <form>
                    <input type="text"
                        className="regField"
                        placeholder="Your Name"
                        onChange={this.handleChange}
                        value={this.state.displayName}
                        name="displayName"
                        />&nbsp;
                    <input type="text"
                        className="regField"
                        placeholder="Email"
                        value={this.state.email} 
                        onChange={this.handleChange}
                        name="email"
                        />&nbsp;
                    <input
                        className="regField"
                        placeholder="Password"
                        value={this.state.password} 
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                    />
                    <input onClick={this.register} className="submitBtn" type="submit" value="REGISTER" />
                </form>
            </>
        );
    }
}

export default Register;