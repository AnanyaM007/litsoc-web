import { Typography, Stack, Box, Button } from "@mui/material";

const HeroContent = () => {
    return (
        <>
            <Stack marginBottom={"50px"} padding={"10px 30px"} justifyContent={"space-between"} alignItems={"center"}>
                <Box component={"img"} src={"Poetry.gif"} width={"380px"} />
                <Typography variant="h2" sx={{ fontWeight: "600" }}>The Literary Society</Typography>
                <Typography variant="h5">The creative summit and media body of VSSUT community and you, our dear readers.</Typography>
            </Stack>
        </>
    );

}
export default HeroContent;