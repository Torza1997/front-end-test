import { Box, SxProps } from "@mui/material";

const IconLine = ({
  sx,
  width = "15px",
  height = "15px",
  opacity,
}: {
  sx?: SxProps;
  width?: string | number;
  height?: string | number;
  opacity?: number;
}) => {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        opacity: opacity,
        ...sx,
      }}
      component={"svg"}
      xmlns="http://www.w3.org/2000/svg"
      width="223"
      height="238"
      viewBox="0 0 223 238"
      fill="none"
    >
      <path
        d="M2.53711 235.699L220.234 1.98235"
        stroke="#936EEA"
        stroke-width="5"
      />
    </Box>
  );
};
export default IconLine;
