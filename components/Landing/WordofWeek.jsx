import { Typography, Stack, Box, Link } from "@mui/material";

const WordofWeek = () => {
    return (
        <>
            <Stack flexDirection={"row"} flexWrap={"wrap"} padding={"80px 50px"} justifyContent={"space-evenly"}>
                <Stack maxWidth={"800px"}>
                    <Typography variant="h4" sx={{ marginBottom: "30px" }}>Word of the Week</Typography>
                    <Typography variant="h6">Words are the roots that hold the tree of thoughts of the writer firmly to the soil of the reader&apos;s mind. To get the reader connected to the roots more thoroughly, Our Team brings you a new word every week in the form of the &quot;WORD OF THE WEEK&quot;.</Typography>
                </Stack>
                <Box component={"img"} src={"Literature-rafiki.png"} width={"350px"} />
            </Stack>
        </>
    );

}
export default WordofWeek;