import { useState } from "react";
import {
    Typography,
    Stack,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            >
                <Box component={"img"} src={"logo.png"} width={"150px"} />

                <Stack gap={8} flexDirection={"row"} display={{ xs: "none", md: "flex" }}>
                    <Typography>Home</Typography>
                    <Typography>About Us</Typography>
                    <Typography>Blog</Typography>
                    <Typography>News</Typography>
                    <Typography>Team</Typography>
                </Stack>
                <Stack display={{ xs: "none", md: "flex" }}>
                    <Button sx={{
                        background: "#FFD8A9",
                        color: "#000000",
                        height: "40px",
                        width: "100px",
                        textTransform: "none",
                        border: "solid 2px #ffd8a9",
                    }}>Login</Button>
                </Stack>

                <Button
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
                </Button>

                <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <Stack sx={{padding:"20px 15px",marginBottom:"15px"}} flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Box
                        component="img"
                        src="./logo.png"
                        width="100px"
                    />
                    <CloseIcon sx={{fontSize:"22px",color:"#3d3d3d"}} onClick={handleDrawerClose} />
                    </Stack>
                    <Stack alignItems={"center"} gap={3} sx={{ width: 250 }} onClick={toggleDrawer}>
                        <Typography>Home</Typography>
                        <Typography>About Us</Typography>
                        <Typography>Blog</Typography>
                        <Typography>News</Typography>
                        <Typography>Team</Typography>
                        <Button sx={{
                            background: "#FFD8A9",
                            color: "#000000",
                            height: "40px",
                            width: "100px",
                            textTransform: "none",
                            border: "solid 2px #ffd8a9"
                        }}>Login</Button>
                    </Stack>
                </Drawer>
            </Stack>
        </>
    );
};

export default Navbar;
