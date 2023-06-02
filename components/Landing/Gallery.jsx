import React, { useRef, useEffect } from "react";
import { Stack, Typography, Divider } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const Gallery = () => {
  const Carousels = [
    {
      img: "./Gallery/G1.jpg"
    },
    {
      img: "./Gallery/G2.jpg"
    },
    {
      img: "./Gallery/G3.jpg"
    },
    {
      img: "./Gallery/G4.webp"
    },
    {
      img: "./Gallery/G5.jpg"
    },
    {
      img: "./Gallery/G6.jpg"
    },
    {
      img: "./Gallery/G7.jpg"
    },
    {
      img: "./Gallery/G8.jpg"
    },
    {
      img: "./Gallery/G9.jpg"
    },
    {
      img: "./Gallery/G10.webp"
    },
    {
      img: "./Gallery/G11.jpg"
    },
  ];

  const isLargerThanMD = useMediaQuery("(min-width: 900px)");
  const containerRef = useRef(null);
  const scrollSpeed = 4; 
  const scrollDirectionRef = useRef(0);
  const animationFrameIdRef = useRef(null);
  const delayTimerRef = useRef(null);

  useEffect(() => {
    if (isLargerThanMD) {
      const container = containerRef.current;

      const handleMouseMove = (event) => {
        const newDirection = event.movementX > 0 ? 1 : -1;

        if (delayTimerRef.current) {
          clearTimeout(delayTimerRef.current);
        }

        delayTimerRef.current = setTimeout(() => {
          scrollDirectionRef.current = newDirection;
          requestScrollAnimation();
        }, 0);
      };

      const handleMouseLeave = () => {
        clearTimeout(delayTimerRef.current);
        scrollDirectionRef.current = 0;
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      };

      const requestScrollAnimation = () => {
        if (animationFrameIdRef.current === null) {
          animationFrameIdRef.current = requestAnimationFrame(scrollAnimation);
        }
      };

      const scrollAnimation = () => {
        container.scrollLeft += scrollDirectionRef.current * scrollSpeed;
        animationFrameIdRef.current = requestAnimationFrame(scrollAnimation);
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
        cancelAnimationFrame(animationFrameIdRef.current);
        clearTimeout(delayTimerRef.current);
      };
    }
  }, [isLargerThanMD]);

  return (
    <>
      <Stack flexDirection="column">
        <Stack padding={"50px"} sx={{ background: "#FDEEDC" }} justifyContent={"center"} alignItems={"center"}>
          <Typography variant="h4">Gallery</Typography>
          <Divider sx={{ borderBottom: '3px solid', width: '70px' }} />
        </Stack>
        <Stack className="carousel-list" sx={{ background: "#FDEEDC",overflow: "hidden", position: "relative", overflowX: "auto" }} ref={containerRef}>
          <Stack sx={{
            paddingBottom:"100px",
            WebkitBoxAlign: "stretch",
            alignItems: "stretch",
            flexDirection: "row"
          }}>
            {Carousels.map((carousel, index) => (
              <Stack
                key={carousel.name}
                flexDirection="row"
                gap="15px"
                sx={{
                  margin: { xs: "0px 12px", sm: "0px 15px", md: "0px 18px" },
                  minWidth: { xs: "300px", sm: "354px" },
                  maxHeight: { xs: "300px", sm: "400px" },
                  "&:hover": {
                    transition: "all 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s",
                    transform: "translateY(-5px)",
                    
                  },
                  position: "relative",
                  padding: { xs: "25px 19px", sm: "21px 19px", md: " 30px 18px 22px" },
                  transition: "all 800ms cubic-bezier(0.2, 0.8, 0.2, 1) 0s",
                  ...(index % 2 === 1 && {
                    top: "30px"
                  })
                }}
              >
                <img src={carousel.img} alt={`Image ${index + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Gallery;