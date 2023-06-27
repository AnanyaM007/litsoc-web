import { Button, Link, Typography, Stack, Box } from "@mui/material";

const AboutBody = () => {
    return (
        <Stack m={{ xs: 3, sm: 7, md: 10 }}>
            <Typography sx={{ fontSize: { xs: "30px", sm: "34px", md: "43px" }, fontWeight: "700", marginBottom:"20px" }}>About Us</Typography>
            <Stack direction={{ sm: "column", md: "row" }} justifyContent={"space-between"} >
                <Typography sx={{ fontSize: { xs: "16px", sm: "18px", md: "22px" } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    <br></br><br></br>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate. 
                </Typography>
                <Box component={"img"}
                    src="/About.svg"
                    sx={{
                        width: { xs: "300px", sm: "350px", md: "400px" },
                        marginRight: { sm: 0, md: 4 }
                    }}
                />
            </Stack>
        </Stack>
    );
}

export default AboutBody;

