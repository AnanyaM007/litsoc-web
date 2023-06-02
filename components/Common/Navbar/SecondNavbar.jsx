import { Typography, Stack } from "@mui/material";

const Navbar = () => {
    return (
        <>
            <Stack gap={10} padding={"10px 30px"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} sx={{ background: "#FBEFE2" }}>
                <Typography>Academics</Typography>
                <Typography>Campus</Typography>
                <Typography>Events</Typography>
                <Typography>Clubs</Typography>
                <Typography>Admission</Typography>
            </Stack>
        </>
    );

}
export default Navbar;