import { Typography, Stack, Link, styled } from "@mui/material";

const Navbar = () => {
    const TypographyMain = styled(Typography)(({ theme }) => ({
        color: "#000",
        textDecoration: "none",
        '&:hover':{
            color: "#ffb86c",
        }
    }));
    return (
        <>
            <Stack sx={{ display: { xs: "none", md: "flex" }, background: "#FBEFE2" }} gap={10} padding={"10px 30px"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} >
                <Link href="academics"><TypographyMain>Academics</TypographyMain></Link>
                <Link href="campus"><TypographyMain>Campus</TypographyMain></Link>
                <Link href="events"><TypographyMain>Events</TypographyMain></Link>
                <Link href="clubs"><TypographyMain>Clubs</TypographyMain></Link>
                <Link href="admission"><TypographyMain>Admission</TypographyMain></Link>
            </Stack>
        </>
    );

}
export default Navbar;