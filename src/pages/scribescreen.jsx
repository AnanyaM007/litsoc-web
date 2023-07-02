import Navbar from "../../components/Common/Navbar/Navbar";
import SecondNavbar from "../../components/Common/Navbar/SecondNavbar";
import Footer from "../../components/Common/Footer/Footer";
import ScribeScreenBody from "../../components/ScribeScreen/ScribeScreenBody.jsx";

const ScribeScreen = () => {
    return (
        <>
        <Navbar />
        <SecondNavbar />
        <ScribeScreenBody />
        <Footer />
        </>
    );
}

export default ScribeScreen;

