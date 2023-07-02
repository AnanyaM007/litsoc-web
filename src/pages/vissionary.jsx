import { Button, Link, Typography, Stack, Box } from "@mui/material";
import Navbar from "../../components/Common/Navbar/Navbar";
import SecondNavbar from "../../components/Common/Navbar/SecondNavbar";
import Footer from "../../components/Common/Footer/Footer";
import VissionaryBody from "../components/Vissionary/Vissionarybody";

const Vissionary = () => {
    return (
        <>
            <Navbar />
            <SecondNavbar />
            <VissionaryBody />
            <Footer />
        </>
    );
}

export default Vissionary;

