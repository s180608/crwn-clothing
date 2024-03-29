import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signinWithGoogle } from "../../firebase/firebase.utils";


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'',password:''})
    };

    handleChange = event =>{
        const { name, value } = event.target;

        this.setState({ [name]: value })
    };

    render(){
        return (
          <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                name="email"
                type="email"
                handleChange={this.handleChange}
                label="Email"
                value={this.state.email}
                required
              />
              <FormInput
                type="password"
                name="email"
                handleChange={this.handleChange}
                label="Password"
                value={this.state.email}
                required
              />
              <div className="buttons">
                <CustomButton type="submit">Sign in</CustomButton>
                <CustomButton onClick={signinWithGoogle} isGoogleSignIn>
                  Continue google
                </CustomButton>
              </div>
            </form>
          </div>
        );
    }
}


export default SignIn;