import { SxProps } from "@mui/material";

export type DataOfSection = {
  number: string;
  header: string;
  headerColor: string;
  bgColor: string;
  content: string;
  textColor?: string;
  numberColor?: string;
  boxHeight?: string;
};

export type SectionComponentPropType = {
  sectionData: DataOfSection[];
  sideSwap?: boolean;
  image: string;
  header: string;
  sx?: SxProps;
};

export type SectionContentPropType = {
  sectionData: DataOfSection;
};
