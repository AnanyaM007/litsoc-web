import { Button, Link, Typography, Stack, Box } from "@mui/material";
import Navbar from "../../components/Common/Navbar/Navbar";
import SecondNavbar from "../../components/Common/Navbar/SecondNavbar";
import Footer from "../../components/Common/Footer/Footer";
import TeamBody from "../../components/Team/teambody";

const Team = () => {
    return (
        <>
        <Navbar />
        <SecondNavbar />
        <TeamBody />
        <Footer />
        </>
    );
}

export default Team;

