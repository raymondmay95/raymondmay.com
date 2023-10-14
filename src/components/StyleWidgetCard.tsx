import { Card, styled } from "@mui/material";

export const StyleWidgetCard = styled(Card, {})<{ disablePadding?: boolean; bgColor?: string }>((
    {
        theme,
        disablePadding,
        bgColor
    }) => ({
        ...(!disablePadding && {
            paddingLeft: 1,
            paddingRight: 1,
            paddingTop: 2,
            paddingBottom: 2,
        }),
        borderRadius: '15px',
        background: bgColor,
        scale: 1
    }));
