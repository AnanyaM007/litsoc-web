import { Typography, Stack, Box, Link, Button } from "@mui/material";

const ScribeScreen = () => {
    return (
        <>
            <Stack flexDirection={"row"} flexWrap={"wrap-reverse"} padding={"20px 50px"} justifyContent={"space-evenly"}>
                <Box component={"img"} src={"Imagination-bro.png"} width={{ xs: "250px", sm: "300px", md: "380px" }} marginTop={{ xs: "50px", sm: "50px", md: "0px" }} />
                <Stack maxWidth={"800px"}>
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
                    <Typography sx={{ fontSize: { xs: "18px", sm: "22px" } }}>Welcome to Scribe Screen, a digital sanctuary where writers share their creative works in the form of poetry, stories, extracts, and articles. Immerse yourself in the enchantment of words and embark on a journey of imagination and inspiration.</Typography>
                    <Link href="/scribescreen">
                        <Button sx={{
                            marginTop: "20px",
                            padding:"2px 20px",
                            fontSize: { xs: "18px", sm: "22px" },
                            color: "#fff",
                            backgroundColor: "#E9A254",
                            textTransform:"none",
                            '&:hover': {
                                backgroundColor: "#3d3d3d",
                            }
                        }}>Explore</Button>
                    </Link>
                </Stack>
            </Stack>
        </>
    );

}
export default ScribeScreen;