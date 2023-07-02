import { Typography, Stack, Box, Link, Button } from "@mui/material";

const KnowYourClub = () => {
    return (
        <>
            <Stack flexDirection={"row"} flexWrap={"wrap"} padding={"80px 50px"} justifyContent={"space-evenly"}>
                <Stack maxWidth={"800px"}>
                    <Link href="/knowyourclub">
                        <Typography
                            sx={{
                                marginBottom: "30px",
                                fontSize: { xs: "30px", sm: "35px" },
                                color: "#000",
                                '&:hover': {
                                    color: "#f07e05",
                                }
                            }}>Know your Club
                        </Typography>
                    </Link>
                    <Typography sx={{ fontSize: { xs: "18px", sm: "22px" } }}>&quot;Know Your Club&quot;, is a captivating chronicle that unveils the vibrant world of clubs at VSSUT. Discover achievements, events, and the spirit of passion and unity that thrives within each club. </Typography>
                    <Link href="/knowyourclub">
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
                <Box component={"img"} src={"Group discussion-amico.png"} width={{ xs: "250px", sm: "300px", md: "380px" }} marginTop={{ xs: "50px", sm: "50px", md: "0px" }} />
            </Stack>
        </>
    );

}
export default KnowYourClub;