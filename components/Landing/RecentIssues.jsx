import { Typography, Stack, Divider, Link, Button, Box } from "@mui/material";
import { useState } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const ImageStack = ({ images, titles, desc, writer }) => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = () => {
        setHoverIndex(null);
    };

    return (
        <Stack spacing={4} flexDirection="row" flexWrap="wrap" justifyContent={"center"} gap="40px">
            {images.map((src, index) => (
                <Stack
                    key={index}
                    style={{
                        position: "relative",
                        cursor: "pointer",
                        marginTop: "20px",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "flex-start",
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <Stack
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        <Box component="img" src={src} style={{ objectFit: "cover", height: "220px", width: "325px" }} alt="pic" />
                        <Stack
                            style={{
                                position: "absolute",
                                backgroundColor: "#3d3d3d",
                                color: "#fff",

                                padding: "5px",
                                fontWeight: "bold",

                                display: hoverIndex === index ? "none" : "block",

                            }}
                        >
                            <Typography sx={{ padding: "5px", fontSize: "14px", textTransform: "uppercase", fontWeight: "600" }}>{titles[index]}</Typography>
                        </Stack>
                        <Stack flexDirection={"column"}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: hoverIndex === index ? "0" : "-100%",
                                width: "100%",
                                height: "100%",
                                background: "rgba(0, 0, 0, 0.7)",
                                color: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                transition: "left 0.3s ease-in-out",
                                zIndex: 1,
                            }}
                        >
                            <Typography variant="body1" sx={{
                                padding: "25px 25px 5px 25px", fontSize: "18px",
                                transition: ".2s ease-in .5s"
                            }}>{desc[index]}</Typography>

                            <Typography variant="body1" sx={{
                                padding: "10px 0px 20px 0px", fontSize: "15px",
                                transition: ".2s ease-in .5s"
                            }}>By: {writer[index]}</Typography>

                            <Link to={`/${titles[index]}`} style={{ textDecoration: "none" }}><Button sx={{ color: "#fff", border: "2px solid #e9a254", textTransform: "capitalize" }}>Read More <ArrowOutwardIcon sx={{ fontSize: "20px", marginLeft: "5px" }} /></Button></Link>
                        </Stack>
                    </Stack>
                </Stack>
            ))}
        </Stack>
    );
};

const RecentIssues = () => {
    const imageSet1 = ["./Gallery/G1.jpg", "../Gallery/G2.jpg", "./Gallery/G3.jpg"];
    const titlesSet1 = ["AI Tools ", "Board Exams", "Lost Child"];
    const DescSet1 = [
        "AI Tools: A new revolution towards development",
        "Importance Board Exams hold in our future",
        "Lost Child: Storytelling the instances of a child "
    ];
    const Writer = [
        "Arpita Verma",
        "Rohan Mehta",
        "Dhritish Kumar "
    ];

    return (
        <>
            <Stack padding={"50px"} sx={{ background: "#E9A254" }} justifyContent={"center"} alignItems={"center"}>
                <Typography variant="h4">Recent Issues</Typography>
                <Divider sx={{ borderBottom: '3px solid', width: '150px' }} />

                <Stack padding={{ xs: "60px 20px", sm: "80px 40px" }} justifyContent="center" alignItems="center">

                    <ImageStack images={imageSet1} titles={titlesSet1} desc={DescSet1} writer={Writer} />
                </Stack>
            </Stack>
        </>
    );

}
export default RecentIssues;

