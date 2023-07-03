import { Typography, Stack, Box, Link } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material';

const Footer = () => {
    const Heading = styled(Typography)(({ theme }) => ({
        fontSize: '25px',
        fontWeight: '600',
        color: '#000',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '18px',
        },
        '&:hover': {
            color: "#f07e05",
        }
    }));

    const SubHeading = styled(Typography)(({ theme }) => ({
        fontSize: "20px",
        marginBottom: "8px",
        color: "#000",
        '&:hover': {
            color: "#f07e05",
        }
    }));
    return (
        <>
            <Stack flexWrap={"wrap"} padding={"50px 0px"} flexDirection={{ xs: "column", sm: "column", md: "row" }} justifyContent={"space-evenly"} alignItems={"center"} sx={{ background: "#FFD8A9" }}>
                <Link href="/"><Box component={"img"} src={"logo.png"} width={"250px"} marginBottom={{ xs: "50px", sm: "50px" }} /></Link>
                <Stack flexWrap={"wrap"} flexDirection={{ xs: "column", sm: "row", md: "row" }} gap={10} padding={"0px 40px"}>
                    <Stack>
                        <Link href="/"><Heading>Home</Heading></Link>
                        <Link href="/recent"><SubHeading>Recent Issues</SubHeading></Link>
                        <Link href="/wow"><SubHeading>Word of week</SubHeading></Link>
                        <Link href="/scribescreen"><SubHeading>Scribe Screen</SubHeading></Link>
                        <Link href="/knowyourclub"><SubHeading>Know your Club </SubHeading></Link>
                    </Stack>
                    <Stack>
                        <Link href="/about"><Heading>About Us</Heading></Link>
                        <Link href="/versse"><SubHeading>The VerSSe</SubHeading></Link>
                        <Link href="/vissionary"><SubHeading>The ViSSonary</SubHeading></Link>
                        <Link href="/collaborations"><SubHeading>Collaborations</SubHeading></Link>
                    </Stack>
                    <Stack>
                        <Link href="/blog"><Heading>Blog</Heading></Link>
                        <Link href="/recent"><SubHeading>Recent</SubHeading></Link>
                        <Link href="/popular"><SubHeading>Popular</SubHeading></Link>
                    </Stack>
                    <Stack>
                        <Link href="/news"><Heading>News</Heading></Link>
                        <Link href="/events"><SubHeading>Events</SubHeading></Link>
                        <Link href="/official"><SubHeading>Official</SubHeading></Link>
                        <Link href="/trending"><SubHeading>Trending</SubHeading></Link>
                    </Stack>
                    <Stack>
                        <Link href="/team"><Heading>Team</Heading></Link>
                        <Link href="/current"><SubHeading>Current</SubHeading></Link>
                        <Link href="/alumini"><SubHeading>Alumini</SubHeading></Link>
                    </Stack>
                </Stack>
            </Stack>
            <Stack padding={"20px 80px"} flexDirection={{ xs: "column", sm: "column", md: "row" }} alignItems={"center"} justifyContent={{ xs: "space-evenly", md: "space-between" }} sx={{ background: "#E9A254" }}>
                <Typography textAlign={"center"} sx={{ fontSize: "20px" }}>The Literary Society <CopyrightIcon sx={{ position: "relative", top: "7px" }} /> 2023.&nbsp;All rights reserved.</Typography>
                <Stack gap={5} alignItems={"center"} flexDirection={"row"} sx={{ position: "relative", top: "5px" }}>
                    <Link href="https://www.instagram.com/teamvissionary_vssut/" target="_blank" sx={{ color: "#000" }}><InstagramIcon /></Link>
                    <Link href="mailto:" target="_blank" sx={{ color: "#000" }}><MailOutlineIcon /></Link>
                    <Link href="https://www.linkedin.com/company/itslitsoc/" target="_blank" sx={{ color: "#000" }}><LinkedInIcon /></Link>
                </Stack>
            </Stack>
        </>
    );

}
export default Footer;