import { Typography, Stack, Box, Button } from "@mui/material";

const Navbar = () => {
    return (
        <>
            <Stack padding={"10px 30px"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Box component={"img"} src={"logo.png"} width={"150px"} />
                <Stack gap={8} flexDirection={"row"}>
                    <Typography>Home</Typography>
                    <Typography>About Us</Typography>
                    <Typography>Blog</Typography>
                    <Typography>News</Typography>
                    <Typography>Team</Typography>
                </Stack>
                <Button sx={{
                    background: "#FFD8A9",
                    color: "#000000",
                    height: "40px",
                    width: "100px",
                    textTransform: "none",
                    border: "solid 2px #ffd8a9"
                }}>Login</Button>
            </Stack>
        </>
    );

}
export default Navbar;