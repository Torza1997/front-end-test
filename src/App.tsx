import { Box, Grid, Stack, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import imageSectionOne from "./assets/graphic-desktop.png";
import basketball from "./assets/graphic-desktop2.png";
import {
  DataOfSection,
  SectionComponentPropType,
  SectionContentPropType,
} from "./types/App.type";
import { dataSectionOne, dataSectionTwo } from "./constant/sectionData";
import { useEffect, useState } from "react";
// import IconPlush from "./components/IconPlush";

const App = () => {
  return (
    <Layout>
      <MainContainer>
        <SectionComponent
          sectionData={dataSectionOne}
          image={imageSectionOne}
          header={"ATHLETS"}
          sx={{
            marginTop: {
              xs: 0,
              sm: 7,
              md: 0,
            },
          }}
        />
        <SectionComponent
          sectionData={dataSectionTwo}
          image={basketball}
          sideSwap={true}
          header={"PLAYERS"}
          sx={{
            marginTop: {
              sx: 0,
              sm: 8.9,
            },
          }}
        />
      </MainContainer>
    </Layout>
  );
};

const SectionComponent = ({
  sectionData = [],
  sideSwap = false,
  image = "",
  header = "HEADER",
  sx,
}: SectionComponentPropType) => {
  const SMBreakPoint = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ position: "relative", ...sx }} id={`section-component`}>
      <Grid container>
        <Grid
          item
          order={SMBreakPoint ? 2 : sideSwap ? 2 : 1}
          xs={12}
          sm={5}
          md={5}
          lg={6}
          sx={{
            textAlign: {
              xs: "center",
              md: "start",
            },
          }}
        >
          <Box
            component={"img"}
            id={`image-character-${header}`}
            sx={{
              zIndex: 1,
              position: {
                xs: "relative",
                sm: "absolute",
              },
              ...(sideSwap
                ? { marginRight: "125px", right: 0, top: "-70px" }
                : { marginTop: "35px", marginLeft: "175px" }),
              flexShrink: 0,
            }}
            src={image}
          ></Box>
          {/* <IconPlush />
          <IconPlush opacity={0.3} /> */}
        </Grid>
        <Grid
          item
          order={SMBreakPoint ? 1 : sideSwap ? 1 : 2}
          id={sideSwap ? "tex-main-header" : "tex-main-header-side-swap"}
          pl={sideSwap ? "322px" : "95px"}
          xs={12}
          sm={7}
          md={7}
          lg={6}
        >
          <TextHeader>{header}</TextHeader>
        </Grid>

        {SMBreakPoint ? (
          <Carousel header={header} sectionData={sectionData} />
        ) : (
          <>
            {sectionData.map((data, idx) => {
              return (
                <Grid
                  item
                  xs={12}
                  key={`section-number-${idx}`}
                  bgcolor={data?.bgColor}
                  order={3}
                >
                  <Grid container id="content-box" pl={"322px"} pr={"125px"}>
                    <Grid
                      item
                      sm={5}
                      md={5}
                      lg={6}
                      order={sideSwap ? 2 : 1}
                    ></Grid>
                    <Grid item sm={7} md={7} lg={6} order={sideSwap ? 1 : 2}>
                      <SectionContent sectionData={data}></SectionContent>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </>
        )}
      </Grid>
    </Box>
  );
};

const Carousel = ({
  sectionData,
  header,
}: {
  sectionData: DataOfSection[];
  header: string;
}) => {
  const [slideIndex, setSlideIndex] = useState(1);

  // let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function currentSlide(n: number) {
    setSlideIndex(n);
  }

  function showSlides(n: number) {
    let i;
    const slides = document.getElementsByClassName(
      `mySlides-${header}`
    ) as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName(`dot-${header}`);

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  return (
    <Grid item xs={12} order={3}>
      <Stack
        display={"flex"}
        direction={"column"}
        spacing={3}
        pt={"60px"}
        pb={"30px"}
        sx={{
          position: "relative",
          background: "#f5f4f9",
          [`.dot-${header}`]: {
            cursor: "pointer",
            height: "15px",
            width: "15px",
            margin: "0 9px",
            backgroundColor: "#d8d8d8",
            borderRadius: "50%",
            display: "inline-block",
            transition: " background-color 0.6s ease",
          },
          [`.active,.dot-${header}:hover`]: {
            backgroundColor: "#5c3caf",
          },
        }}
      >
        <Box component={"div"} paddingInline={"18px"}>
          {sectionData?.map((data, idx) => {
            return (
              <Box
                className={`mySlides-${header} fade`}
                key={`side-${header}-${idx}`}
              >
                <SectionContent sectionData={data}></SectionContent>
              </Box>
            );
          })}
        </Box>

        <Box
          component={"div"}
          sx={{
            textAlign: "center",
          }}
        >
          {sectionData?.map((_, idx) => {
            return (
              <span
                key={idx}
                className={`dot-${header}`}
                onClick={() => {
                  currentSlide(idx + 1);
                }}
              ></span>
            );
          })}
        </Box>
      </Stack>
    </Grid>
  );
};

const SectionContent = ({ sectionData }: SectionContentPropType) => {
  return (
    <Stack
      id={`text-content-box`}
      sx={{
        minHeight: "255px",
        height: "13vh",
        display: { xs: "block", md: "flex" },
        justifyContent: { xs: "center", md: "flex-start" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            width: "fit-content",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          mr={1}
        >
          <TextNo $textColor={sectionData?.numberColor || "#000000"}>
            {sectionData?.number || ""}
          </TextNo>
          <Box
            sx={{
              height: 5,
              minWidth: 19,
              bgcolor: {
                xs: "#603EBE",
                md: `${sectionData?.headerColor || "#603EBE"}`,
              },
              borderRadius: 2.5,
              marginTop: 1,
            }}
          ></Box>
        </Stack>
        <TextHeaderMid $textColor="#c2c2c2">
          {sectionData?.header || ""}
        </TextHeaderMid>
      </Box>
      <TextContent $textColor={sectionData?.textColor || "#000000"}>
        {sectionData?.content || ""}
      </TextContent>
    </Stack>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainContainer = styled.div`
  max-width: 1980px;
  overflow-x: hidden;
`;
const TextHeader = styled.div`
  color: #e7e7e7;
  font-family: Roboto;
  font-size: 90px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 24px;
  @media (max-width: 600px) {
    font-size: 50px;
  }
`;
const TextHeaderMid = styled.div<{ $textColor?: string }>`
  color: ${(props) => props.$textColor};
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.5px;
  @media (max-width: 600px) {
    font-size: 28px;
  }
`;
const TextNo = styled.div<{ $textColor?: string }>`
  color: ${(props) => props.$textColor};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.5px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const TextContent = styled.div<{ $textColor?: string }>`
  color: ${(props) => props.$textColor};
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
  margin-top: 28px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 15px;
    color: black;
  }
`;

export default App;
