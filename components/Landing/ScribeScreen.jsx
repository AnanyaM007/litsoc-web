import { Typography, Stack, Box, Link } from "@mui/material";

const ScribeScreen = () => {
    return (
        <>
            <Stack flexDirection={"row"} flexWrap={"wrap-reverse"} padding={"20px 50px"} justifyContent={"space-evenly"}>
                <Box component={"img"} src={"Imagination-bro.png"} width={{ xs: "250px", sm: "300px", md: "380px" }} />
                <Stack maxWidth={"800px"}>
                    <Typography variant="h4" sx={{ marginBottom: "30px" }}>Scribe Screen</Typography>
                    <Typography variant="h6">Welcome to Scribe Screen, a digital sanctuary where writers share their creative works in the form of poetry, stories, extracts, and articles. Immerse yourself in the enchantment of words and embark on a journey of imagination and inspiration.</Typography>
                </Stack>
            </Stack>
        </>
    );

}
export default ScribeScreen;