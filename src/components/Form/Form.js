import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

//========================================================================================

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBx-qXgePlnBVRH55M1NUs2RwYFMUkdXOQ",
	authDomain: "fir-authentication-form-24b3b.firebaseapp.com",
	projectId: "fir-authentication-form-24b3b",
	storageBucket: "fir-authentication-form-24b3b.appspot.com",
	messagingSenderId: "925438930062",
	appId: "1:925438930062:web:add78d7569b5f66ade6ddf"
};

const app = initializeApp(firebaseConfig);

//=========================================================================================

// Providers & getAuth
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const auth = getAuth();

// Component Start
const Form = () => {

	// States
	const [user, setUser] = useState('');

	//-------------------------------------------
	// Handling Providers by onClick Handler
	//-------------------------------------------

	// Google Provider Handling
	const handleGoogleProvider = () => {
		signInWithPopup(auth, googleProvider)
			.then(result => {
				const { displayName, email, photoURL } = result.user;

				const loggedInUser = {
					name: displayName,
					email,
					photo: photoURL
				}
				setUser(loggedInUser);
			});
	}

	// GitHub Provider Hndling
	const handleGitHubProvider = () => {
		signInWithPopup(auth, gitHubProvider)
			.then(result => {
				const { displayName, email, photoURL } = result.user;
				const loggedInUser = {
					name: displayName,
					email,
					photo: photoURL
				}
				setUser(loggedInUser);
			})
	}

	return (
		<div>
			<form>
				<h1>Please Register</h1>

				{/* Name Field */}
				<div className="input-group">
					<label htmlFor="name">Name</label>
					<input id="name" type="text" required />
				</div>

				{/* Email Field */}
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" required />
				</div>

				{/* Password Field */}
				<div className="input-group">
					<label htmlFor="password">Password</label>
					<input id="password" type="text" required />
				</div>

				{/* Checkbox Field */}
				<div className="input-group">
					<input id="checkbox" type="checkbox" value="login" />
					<label htmlFor="checkbox">Already Member?</label>
				</div>

				{/* Login OR Register Button */}
				<button type="button">Register</button>

				{/* Authentication Signup Methods */}
				<div className="authentication-methods">
					{/* Google Authentication */}
					<button onClick={handleGoogleProvider} type="button">Google Sign In</button>

					{/* GitHub Authentication */}
					<button onClick={handleGitHubProvider} type="button">Github Sign In</button>

					{/* Facebook Authentication */}
					<button type="button">Facebook Sign In</button>
				</div>

			</form>

			{/* Data Display Area */}
			<div>
				<h3>Name: {user.name}</h3>
				<h4>Email : {user.email}</h4>
				<img src={user.photo} alt="" />
			</div>
		</div>
	);
};

export default Form;