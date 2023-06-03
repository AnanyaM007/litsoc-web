import { Typography, Stack, Box } from "@mui/material";

const KnowYourClub = () => {
    return (
        <>
            <Stack flexDirection={"row"} flexWrap={"wrap"} padding={"80px 50px"} justifyContent={"space-evenly"}>
                <Stack maxWidth={"800px"}>
                    <Typography variant="h4" sx={{ marginBottom: "30px" }}>Know your Club</Typography>
                    <Typography variant="h6">&quot;Know Your Club&quot;, is a captivating chronicle that unveils the vibrant world of clubs at VSSUT. Discover achievements, events, and the spirit of passion and unity that thrives within each club. </Typography>
                </Stack>
                <Box component={"img"} src={"Group discussion-amico.png"} width={{ xs: "250px", sm: "300px", md: "380px" }} />
            </Stack>
        </>
    );

}
export default KnowYourClub;