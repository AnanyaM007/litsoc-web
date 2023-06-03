import { Typography, Stack, Box, Button } from "@mui/material";

const HeroContent = () => {
    return (
        <>
            <Stack marginBottom={"50px"} padding={{ xs: "5px", md: "10px 30px" }} justifyContent={"space-between"} alignItems={"center"}>
                <Box component={"img"} src={"Poetry.gif"} width={{ xs: "250px", sm: "300px", md: "380px" }} />
                <Typography variant="h2" sx={{ fontWeight: "600", textAlign: "center", fontSize: { xs: "30px", md: "50px" }, padding: "20px 0px" }}>The Literary Society</Typography>
                <Typography variant="h4" sx={{ textAlign: "center", fontSize: { xs: "18px", md: "30px" } }}>The creative summit and media body of VSSUT community and you, our dear readers.</Typography>
            </Stack>
        </>
    );

}
export default HeroContent;