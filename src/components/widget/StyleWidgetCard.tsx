import { Card, styled } from "@mui/material";

export const StyleWidgetCard = styled(Card, {})<{ bgColor?: string }>((
    {
        theme,
        bgColor
    }) => ({
        borderRadius: '15px',
        background: bgColor,
        scale: 1
    }));
