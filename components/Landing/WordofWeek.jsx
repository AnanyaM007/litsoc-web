import { Typography, Stack, Box, Link, Button } from "@mui/material";

const WordofWeek = () => {
    return (
        <>
            <Stack flexDirection={"row"} flexWrap={"wrap"} padding={"80px 50px"} justifyContent={"space-evenly"}>
                <Stack maxWidth={"800px"}>
                    <Typography sx={{
                        marginBottom: "30px",
                        fontSize: { xs: "30px", sm: "35px" },
                    }}>Word of the Week</Typography>
                    <Typography sx={{ fontSize: { xs: "18px", sm: "22px" } }}>Words are the roots that hold the tree of thoughts of the writer firmly to the soil of the reader&apos;s mind. To get the reader connected to the roots more thoroughly, Our Team brings you a new word every week in the form of the &quot;WORD OF THE WEEK&quot;.</Typography>
                    <Link href="/wow">
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
                <Box component={"img"} src={"Literature-rafiki.png"} width={{ xs: "250px", sm: "300px", md: "380px" }} marginTop={{ xs: "50px", sm: "50px", md: "0px" }} />
            </Stack>
        </>
    );

}
export default WordofWeek;