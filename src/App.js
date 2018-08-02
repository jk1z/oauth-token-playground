import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

export default class App extends Component {
	responseFacebook(response) {
		console.log(response);
	}

	responseGoogle(response) {
		console.log(response);
	}

	componentClicked() {
		return true;
	}

	render() {
		return (
			<div>
				<FacebookLogin
					appId="Place your Facebook OAuth client id here"
					fields="first_name,last_name,email"
					onClick={this.componentClicked}
					callback={this.responseFacebook}
				/>
				<GoogleLogin
					clientId="Place your Google OAuth client id here"
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
				/>
			</div>
		);
	}
}
