import { styled } from "@mui/material";
import { Icon } from '@iconify/react';

export const Iconify = styled(Icon)(({ theme, height, width }) => ({
    width: width ? width : 40,
    height: height ? height : 40
}));
