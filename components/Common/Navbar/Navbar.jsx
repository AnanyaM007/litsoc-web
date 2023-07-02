import { useState } from "react";
import { Typography, Stack, Box, Button, Drawer, List, Collapse, styled, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Navbar = () => {
    const DropdownMenu = styled(Typography)(({ theme }) => ({
        fontSize: "18px",
        marginBottom: "8px",
        textAlign: "center"
    }));
    const TypographyMain = styled(Typography)(({ theme }) => ({
        color: "#000",
        textDecoration: "none",
        '&:hover':{
            color: "#ffb86c",
        }
    }));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isBlogOpen, setIsBlogOpen] = useState(false);

    const handleToggle = (event) => {
        event.stopPropagation();
        setIsBlogOpen(!isBlogOpen);
    };


    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <Stack
                padding={"10px 30px"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
            >
                 <Link href="/"><Box component={"img"} src={"logo.png"} width={"150px"} /></Link>

                <Stack
                    gap={8}
                    flexDirection={"row"}
                    display={{ xs: "none", md: "flex" }}
                >
                    <Link href="/"><TypographyMain>Home</TypographyMain></Link>
                    <Link href="/about"><TypographyMain>About Us</TypographyMain></Link>
                    <Link href="/blog"><TypographyMain>Blog</TypographyMain></Link>
                    <Link href="/news"><TypographyMain>News</TypographyMain></Link>
                    <Link href="/team"><TypographyMain>Team</TypographyMain></Link>
                </Stack>
                {/* <Stack display={{ xs: "none", md: "flex" }}>
                    <Button
                        sx={{
                            background: "#FFD8A9",
                            color: "#000000",
                            height: "40px",
                            width: "100px",
                            textTransform: "none",
                            border: "solid 2px #ffd8a9",
                        }}
                    >
                        Login
                    </Button>
                </Stack> */}

                <Link href="/login"><Button
                    onClick={toggleDrawer}
                    sx={{
                        display: { xs: "block", md: "none" },
                        background: "#FFD8A9",
                        color: "#000000",
                        height: "40px",
                        width: "50px",
                        textTransform: "none",
                        border: "solid 2px #ffd8a9",
                    }}
                >
                    <MenuIcon />
                </Button></Link>

                <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                    <Stack
                        sx={{ padding: "20px 15px", marginBottom: "15px" }}
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box component="img" src="./logo.png" width="100px" />
                        <CloseIcon
                            sx={{ fontSize: "22px", color: "#3d3d3d" }}
                            onClick={handleDrawerClose}
                        />
                    </Stack>
                    <Stack
                        alignItems={"center"}
                        gap={3}
                        sx={{ width: 250 }}
                        onClick={toggleDrawer}
                    >
                        <Typography>Home</Typography>
                        <Typography>About Us</Typography>
                        <Typography onClick={handleToggle}>
                            Blog {isBlogOpen ? <ExpandLessIcon sx={{ fontSize: '22px', position: "relative", top: "5px" }} /> : <ExpandMoreIcon sx={{ fontSize: '20px', position: "relative", top: "5px" }} />}
                        </Typography>

                        <Collapse in={isBlogOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <DropdownMenu>Academics</DropdownMenu>
                                <DropdownMenu>Campus</DropdownMenu>
                                <DropdownMenu>Events</DropdownMenu>
                                <DropdownMenu>Clubs</DropdownMenu>
                                <DropdownMenu>Admission</DropdownMenu>
                            </List>
                        </Collapse>
                        <Typography>News</Typography>
                        <Typography>Team</Typography>
                        {/* <Link href="/login"><Button
                            sx={{
                                background: "#FFD8A9",
                                color: "#000000",
                                height: "40px",
                                width: "100px",
                                textTransform: "none",
                                border: "solid 2px #ffd8a9",
                            }}
                        >
                            Login
                        </Button></Link> */}
                    </Stack>
                </Drawer>
            </Stack>
        </>
    );
};

export default Navbar;
