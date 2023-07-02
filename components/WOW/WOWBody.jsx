import { Button, Link, Typography, Stack, Box } from "@mui/material";

const WOWBody = () => {
    return (
        <Stack m={{ xs: 3, sm: 7, md: 10 }}>
            <Typography
                sx={{
                    fontSize: { xs: "30px", sm: "34px", md: "43px" },
                    fontWeight: "700",
                    marginBottom: "20px",
                    textAlign: "center"
                }}>Word of the <span style={{ color: "#ffb86c" }}>Week</span>
            </Typography>
        </Stack>
    );
}

export default WOWBody;

