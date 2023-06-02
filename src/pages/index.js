import Navbar from "../../components/Common/Navbar/Navbar";
import SecondNavbar from "../../components/Common/Navbar/SecondNavbar";
import HeroContent from "../../components/Landing/HeroContent";
import RecentIssues from "../../components/Landing/RecentIssues";
import Gallery from "../../components/Landing/Gallery";
import WordofWeek from "../../components/Landing/WordofWeek";
import ScribeScreen from "../../components/Landing/ScribeScreen";
import KnowYourClub from "../../components/Landing/KnowYourClub";
import Footer from "../../components/Common/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <SecondNavbar />
      <HeroContent />
      <RecentIssues />
      <Gallery />
      <WordofWeek />
      <ScribeScreen />
      <KnowYourClub />
      <Footer />
    </>
  )
}
