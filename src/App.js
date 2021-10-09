import "./App.css";
import { useForm } from "react-hook-form";
import Avatar from "./images/Avatar.svg";
import Mobile from "./images/Mobile.svg";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";

function App() {
	const {
		register,
		handleSubmit,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="app">
			<div className="container">
				<div className="wave"></div>
				<div className="img">
					<img src={Mobile} alt="" />
				</div>

				<div className="login__container">
					<img src={Avatar} alt="" className="avatar" />
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2>Welcome</h2>
						<div className="login__input">
							<div className="input__div">
								<div className="input__container">
									<PersonIcon className="icon" size="large" />

									<input
										type="email"
										placeholder="Email:"
										className={`input ${errors.email && "invalid"}`}
										{...register("email", {
											required: "email is required",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
												message: "invalid email address",
											},
										})}
										onKeyUp={() => {
											trigger("email");
										}}
									/>
									{errors.email && (
										<p className="login__error">{errors.email.message}</p>
									)}
								</div>
							</div>
						</div>
						<div className="login__input">
							<div className="input__div">
								<div className="input__container">
									<LockIcon className="icon" size="large" />
									<input
										type="password"
										placeholder="Password:"
										className={`input ${errors.pass && "invalid"}`}
										{...register("pass", {
											required: "password is required!",
											minLength: {
												value: 8,
												message: "Password should be of minimun 8 characters",
											},
										})}
										onKeyUp={() => {
											trigger("pass");
										}}
									/>
									{errors.pass && (
										<p className="login__error">{errors.pass.message}</p>
									)}
								</div>
							</div>
						</div>
						<a href="#">forgot password?</a>

						<Button
							variant="contained"
							className="btn"
							type="submit"
							onClick={onSubmit}
						>
							LOGIN
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
