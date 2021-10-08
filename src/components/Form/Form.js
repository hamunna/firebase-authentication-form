import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import initializeAuthentication from '../Firebase/firebase.initialize';

// initializeAuthentication();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx-qXgePlnBVRH55M1NUs2RwYFMUkdXOQ",
  authDomain: "fir-authentication-form-24b3b.firebaseapp.com",
  projectId: "fir-authentication-form-24b3b",
  storageBucket: "fir-authentication-form-24b3b.appspot.com",
  messagingSenderId: "925438930062",
  appId: "1:925438930062:web:add78d7569b5f66ade6ddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();


const auth = getAuth();

const Form = () => {
	const [user, setUser] = useState('');

	const handleGoogleProvider = () => {
		signInWithPopup(auth, googleProvider)
			.then(result => {
				
			});
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
					<button type="button">Github Sign In</button>

					{/* Facebook Authentication */}
					<button type="button">Facebook Sign In</button>
				</div>

			</form>
		</div>
	);
};

export default Form;