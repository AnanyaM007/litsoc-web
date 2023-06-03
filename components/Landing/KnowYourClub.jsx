import { Typography, Stack, Box } from "@mui/material";

const KnowYourClub = () => {
    return (
        <>
            <Stack flexDirection={"row"} flexWrap={"wrap"} padding={"80px 50px"} justifyContent={"space-evenly"}>
                <Stack maxWidth={"800px"}>
                <Typography sx={{ marginBottom: "30px",fontSize:{xs:"30px",sm:"35px"} }}>Know your Club</Typography>
                <Typography sx={{fontSize:{xs:"18px",sm:"22px"}}}>&quot;Know Your Club&quot;, is a captivating chronicle that unveils the vibrant world of clubs at VSSUT. Discover achievements, events, and the spirit of passion and unity that thrives within each club. </Typography>
                </Stack>
                <Box component={"img"} src={"Group discussion-amico.png"} width={{ xs: "250px", sm: "300px", md: "380px" }} marginTop={{xs:"50px", sm:"50px", md:"0px"}} />
            </Stack>
        </>
    );

}
export default KnowYourClub;