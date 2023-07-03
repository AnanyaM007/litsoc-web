import React from "react";
import { TextField, Button, Typography, Grid, CssBaseline, Box, IconButton, Divider } from "@mui/material";
import Link from 'next/link'
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Navbar from "../../components/Common/Navbar/Navbar";
import Footer from "../../components/Common/Footer/Footer";

const Register = () => {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const [showPassword1, setShowPassword1] = React.useState(false);

	const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const [fname, setFname] = useState("");
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	const [cpwd, setCpwd] = useState("");
	const [code, setScode] = useState("");

	const regexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	const handleOpen = async () => {
		if (
			!fname ||
			!email ||
			!pwd ||
			!cpwd ||
			!code
		) {
			return toast.error("All field must be filled");
		}
		if (!regexExp.test(email)) {
			return toast.error("Enter valid Email");
		}
		if (pwd.length < 8) {
			toast.error("Password length must be at least 8 characters!");
		}
		if (pwd != cpwd) {
			return toast.error("Password does not match");
		}
		if (code != "24895") {
			return toast.error("Enter valid Security Code");
		}
		else
			return toast.success("Successfully Created Account");
	}

	return (
		<>
		<Navbar />
			<Grid sx={{margin:"10px 0px 100px"}}>
				<getTheme />
				<CssBaseline />
				<Grid container sx={{
					display: "flex",
					justifyContent: "center",
					flexWrap:"wrap-reverse"
				}}>
					<Box component={"img"} height={{xs:"300px", sm:"400px", md:"500px"}} src="./Kids reading-cuate.png" sx={{
						marginTop: '20px'
					}} />
					<Grid item xs={15} md={5.7} sx={{
						 display: "flex", justifyContent: "center", flexDirection: "column", paddingLeft: "30px", paddingRight: "30px", maxHeight: "600px", marginTop: "15px"
					}}>
						<Typography sx={{
							position: "relative",
							fontSize: '30px',
							paddingTop: "30px",
							color: "#000000",
							textAlign: "center"
						}} gutterBottom >Welcome to our Family</Typography>
						<div style={{ display: "flex", justifyContent: "center", position: "relative", top: "-10px" }}>
							<Divider variant="middle" color="#000" width={200} sx={{ borderBottomWidth: "2px" }} />
						</div>
						<br></br>
						<Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", textAlign: "center", alignItems: "center" }}>
							<Grid sx={{ textAlign: "center", paddingBottom: "20px" }}>
								<TextField size="small"
									value={fname}
									label={"Name"}
									variant="outlined"
									onChange={(e) => {
										setFname(e.target.value);
									}}
									InputLabelProps={{
										sx: {
											color: '#9b9b9b',
											fontSize: "16px",
										},
									}}
									sx={{
										'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
											borderColor: '#000',
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: '#000',
										},
										'&:hover': {
											color: '#000',
										},
										'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
											borderColor: '#000',
										},
										width: {
											position: "relative",
											xs: 280,
											sm: 350,
											md: 380
										}
									}}
									className="my-textfield"
								/><br />
							</Grid>

							<Grid sx={{ textAlign: "center", paddingBottom: "20px" }}>
								<TextField
									value={email}
									label={"Email Address"}
									variant="outlined"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									type={Email} size="small"
									InputLabelProps={{
										sx: {
											color: '#9b9b9b',
											fontSize: "16px",
										},
									}}
									sx={{
										'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
											borderColor: '#000',
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: '#000',
										},
										'&:hover': {
											color: '#000',
										},
										'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
											borderColor: '#000',
										},
										width: {
											position: "relative",
											xs: 280,
											sm: 350,
											md: 380
										},
									}}
									className="my-textfield"
								/><br />

							</Grid>

							<Grid sx={{ textAlign: "center", paddingBottom: "20px" }}>
								<TextField
									value={pwd}
									label={"Password"}
									onChange={(e) => {
										setPwd(e.target.value);
									}}
									InputLabelProps={{
										sx: {
											color: '#9b9b9b',
											fontSize: "16px",
										},
									}}
									type={showPassword ? 'text' : 'password'}
									sx={{
										width: {
											position: "relative",
											xs: 280,
											sm: 350,
											md: 380
										},

										'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
											borderColor: '#000',
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: '#000',
										},
										'&:hover': {
											color: '#000',
										},
										'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
											borderColor: '#000',
										},
									}}
									InputProps={{
										endAdornment: (
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
												sx={{ color: "#000000" }}
											>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										),
									}}
									id="filled-adornment-password"
									className="my-textfield"
								/><br />
							</Grid>

							<Grid sx={{ textAlign: "center", paddingBottom: "20px" }}>
								<TextField
									value={cpwd}
									label={"Confirm Password"}
									onChange={(e) => {
										setCpwd(e.target.value);
									}}
									InputLabelProps={{
										sx: {
											color: '#9b9b9b',
											fontSize: "16px",
										},
									}}
									type={showPassword1 ? 'text' : 'password'}
									sx={{
										width: {
											position: "relative",
											xs: 280,
											sm: 350,
											md: 380
										},
										'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
											borderColor: '#000',
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: '#000',
										},
										'&:hover': {
											color: '#000',
										},
										'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
											borderColor: '#000',
										},
									}}
									InputProps={{
										endAdornment: (
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword1}
												onMouseDown={handleMouseDownPassword}
												edge="end"
												sx={{ color: "#000000" }}
											>
												{showPassword1 ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										),
									}}
									id="filled-adornment-password"
									className="my-textfield"
								/><br />
							</Grid>

							<Grid sx={{ textAlign: "center", paddingBottom: "20px" }}>
								<TextField
									value={code}
									label={"Security Code"}
									onChange={(e) => {
										setScode(e.target.value);
									}}
									InputLabelProps={{
										sx: {
											color: '#9b9b9b',
											fontSize: "16px",
										},
									}}
									sx={{
										width: {
											position: "relative",
											xs: 280,
											sm: 350,
											md: 380
										},
										'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
											borderColor: '#000',
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: '#000',
										},
										'&:hover': {
											color: '#000',
										},
										'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
											borderColor: '#000',
										},
									}}
									id="filled-adornment-password"
									className="my-textfield"
								/><br />
							</Grid>


							<Grid sx={{ textAlign: "center", paddingBottom: "20px" }}>
								<Button
									onClick={handleOpen}
									 
									sx={{
										background: "#FFD8A9",
										color: "#000000",                  
										textTransform: "none",
										border: "solid 2px #ffd8a9",
										fontSize:"16px",
										width:"150px"
									}}>Register </Button><br />
							</Grid>

							<Link href="/login"><Button sx={{
								color: '#000000',
								textAlign: "center",
								'&:hover': {
									background: "none",
									color:"#E9A254"
								}
							}} >Already have an account? &nbsp; Login</Button></Link>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<ToastContainer />
			<Footer />
		</>
	);
}

export default Register;
