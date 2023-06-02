import { Typography, Stack, Box, Link } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <Stack padding={"50px 0px"} flexDirection={"row"} justifyContent={"space-evenly"} alignItems={"center"} flexWrap={"wrap"} sx={{ background: "#FFD8A9" }}>
                <Box component={"img"} src={"logo.png"} width={"250px"} />
                <Stack>
                    <Typography className="heading">Home</Typography>
                    <Typography className="sub-heading">Recent Issues</Typography>
                    <Typography className="sub-heading">Word of week</Typography>
                    <Typography className="sub-heading">Scribe Screen</Typography>
                    <Typography className="sub-heading">Know your Club </Typography>
                </Stack>
                <Stack>
                    <Typography className="heading">About Us</Typography>
                    <Typography className="sub-heading">The VerSSe</Typography>
                    <Typography className="sub-heading">The ViSSonary</Typography>
                    <Typography className="sub-heading">Collaborations</Typography>
                    <Typography className="sub-heading">Know your Club </Typography>
                </Stack>
                <Stack>
                    <Typography className="heading">Blog</Typography>
                    <Typography className="sub-heading">Recent</Typography>
                    <Typography className="sub-heading">Popular</Typography>
                </Stack>
                <Stack>
                    <Typography className="heading">News</Typography>
                    <Typography className="sub-heading">Events</Typography>
                    <Typography className="sub-heading">Official</Typography>
                    <Typography className="sub-heading">Trending</Typography>
                </Stack>
                <Stack>
                    <Typography className="heading">Team</Typography>
                    <Typography className="sub-heading">Current</Typography>
                    <Typography className="sub-heading">Alumini</Typography>
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