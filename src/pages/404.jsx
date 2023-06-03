import { Button, Link, Typography, Stack, Box } from "@mui/material";

const NotFoundPage = () => {
  return (
    <>
   <Box component={"img"} src={"logo.png"} width={"120px"} margin={"10px 0px 0px 30px"}/>
    <Stack alignItems={"center"}>
      <Box component={"img"} src={"404.png"} width={{xs:"350px", sm:"400px", md:"500px"}}/>
      <Typography textAlign={"center"} variant="h6" marginBottom={"10px"}>The page you are looking for does not exist.</Typography>
      <Link href="/"><Button
                        sx={{
                            background: "#FFD8A9",
                            color: "#000000",                  
                            textTransform: "none",
                            border: "solid 2px #ffd8a9",
                            fontSize:"16px",
                            width:"150px"
                        }}
                    >Back to home</Button></Link>
      </Stack>
      </>
  );
}

export default NotFoundPage;

