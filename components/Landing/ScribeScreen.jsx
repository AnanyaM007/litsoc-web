import { Typography, Stack, Box, Link } from "@mui/material";

const ScribeScreen = () => {
    return (
        <>
            <Stack flexDirection={"row"} flexWrap={"wrap-reverse"} padding={"20px 50px"} justifyContent={"space-evenly"}>
                <Box component={"img"} src={"Imagination-bro.png"} width={{ xs: "250px", sm: "300px", md: "380px" }} marginTop={{ xs: "50px", sm: "50px", md: "0px" }} />
                <Stack maxWidth={"800px"}>
                    <Link href="/scribescreen">
                        <Typography
                            sx={{
                                marginBottom: "30px",
                                fontSize: { xs: "30px", sm: "35px" },
                                color: "#000",
                                '&:hover': {
                                    color: "#f07e05",
                                }
                            }}>Scribe Screen
                        </Typography>
                    </Link>
                    <Typography sx={{ fontSize: { xs: "18px", sm: "22px" } }}>Welcome to Scribe Screen, a digital sanctuary where writers share their creative works in the form of poetry, stories, extracts, and articles. Immerse yourself in the enchantment of words and embark on a journey of imagination and inspiration.</Typography>
                </Stack>
            </Stack>
        </>
    );

}
export default ScribeScreen;