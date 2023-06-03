import { Typography, Stack, Box, Link } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material';

const Footer = () => {
    const Heading = styled(Typography)(({ theme }) => ({
        fontSize: "25px",
        fontWeight: "600",
      }));
    
      const SubHeading = styled(Typography)(({ theme }) => ({
        fontSize: "20px",
        marginBottom: "8px",
      }));
    return (
        <>
            <Stack padding={"50px 0px"} flexDirection={"row"} justifyContent={"space-evenly"} alignItems={"center"} flexWrap={"wrap"} sx={{ background: "#FFD8A9" }}>
                <Box component={"img"} src={"logo.png"} width={"250px"} />
                <Stack flexWrap={"wrap"} flexDirection={"row"}gap={15}>
                    <Stack>
                        <Heading>Home</Heading>
                        <SubHeading>Recent Issues</SubHeading>
                        <SubHeading>Word of week</SubHeading>
                        <SubHeading>Scribe Screen</SubHeading>
                        <SubHeading>Know your Club </SubHeading>
                    </Stack>
                    <Stack>
                        <Heading>About Us</Heading>
                        <SubHeading>The VerSSe</SubHeading>
                        <SubHeading>The ViSSonary</SubHeading>
                        <SubHeading>Collaborations</SubHeading>
                        <SubHeading>Know your Club </SubHeading>
                    </Stack>
                    <Stack>
                        <Heading>Blog</Heading>
                        <SubHeading>Recent</SubHeading>
                        <SubHeading>Popular</SubHeading>
                    </Stack>
                    <Stack>
                        <Heading>News</Heading>
                        <SubHeading>Events</SubHeading>
                        <SubHeading>Official</SubHeading>
                        <SubHeading>Trending</SubHeading>
                    </Stack>
                    <Stack>
                        <Heading>Team</Heading>
                        <SubHeading>Current</SubHeading>
                        <SubHeading>Alumini</SubHeading>
                    </Stack>
                </Stack>
            </Stack>
            <Stack padding={"20px 80px"} flexDirection={"row"} justifyContent={"space-between"} flexWrap={"wrap"} sx={{ background: "#E9A254" }}>
                <Typography sx={{ fontSize: "20px" }}>The Literary Society <CopyrightIcon sx={{ position: "relative", top: "7px" }} /> 2023.&nbsp;All rights reserved.</Typography>
                <Stack gap={5} flexDirection={"row"} sx={{ position: "relative", top: "5px" }}>
                    <Link href="https://www.instagram.com/teamvissionary_vssut/" target="_blank" sx={{ color: "#000" }}><InstagramIcon /></Link>
                    <Link href="mailto:" target="_blank" sx={{ color: "#000" }}><MailOutlineIcon /></Link>
                    <Link href="https://www.linkedin.com/company/itslitsoc/" target="_blank" sx={{ color: "#000" }}><LinkedInIcon /></Link>
                </Stack>
            </Stack>
        </>
    );

}
export default Footer;