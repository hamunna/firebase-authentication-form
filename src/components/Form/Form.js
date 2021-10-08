import React from 'react';

const Form = () => {
	return (
		<div>
			<form>
				<h1>Please Register</h1>

				{/* Name Field */}
				<div className="input-group">
					<label htmlFor="name">Name</label>
					<input id="name" type="text" required/>
				</div>
				
				{/* Email Field */}
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" required/>
				</div>
				
				{/* Password Field */}
				<div className="input-group">
					<label htmlFor="password">Password</label>
					<input id="password" type="text" required/>
				</div>
				
				{/* Checkbox Field */}
				<div className="input-group">
					<input id="checkbox" type="checkbox" value="login"/>
					<label htmlFor="checkbox">Already Member?</label>
				</div>

				{/* Login OR Register Button */}
				<button type="button">Register</button>

				{/* Authentication Signup Methods */}
				<div className="authentication-methods">
					{/* Google Authentication */}
					<button type="button">Google Sign In</button>

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