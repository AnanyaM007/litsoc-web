import { Button, Link, Typography, Stack, Box } from "@mui/material";

const ScribeScreenBody = () => {
    return (
        <Stack m={{ xs: 3, sm: 7, md: 10 }}>
            <Typography
                sx={{
                    fontSize: { xs: "30px", sm: "34px", md: "43px" },
                    fontWeight: "700",
                    marginBottom: "20px",
                    textAlign: "center"
                }}>Scribe <span style={{ color: "#ffb86c" }}>Screen</span>
            </Typography>
        </Stack>
    );
}

export default ScribeScreenBody;

