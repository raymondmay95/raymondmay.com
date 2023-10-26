import { CardActions, CardContent, CardHeader, Collapse, Divider, IconButton, Typography } from "@mui/material";
import { Iconify } from "../Iconify";
import { StyleWidgetCard } from "./StyleWidgetCard";
import { SkillInfo } from "../../models/Widget/SkillInfo";
import { useState } from "react";

export function SkillsWidget({
    skillInfo,
    divider,
}: {
    skillInfo: SkillInfo,
    divider?: boolean
}) {

    const {
        id,
        ariaLabel,
        icon,
        title,
        subheader,
        content } = skillInfo

    const [collapseDiscription, setCollapseDiscription] = useState(false)

    const toggleDescription = () => {
        setCollapseDiscription((prev) => !prev)
    }


    return (
        <>
            <StyleWidgetCard
                id={id}
                aria-label={ariaLabel}
                onClick={toggleDescription}
            >
                <CardHeader
                    avatar={<Iconify
                        icon={icon} />}
                    title={title}
                    titleTypographyProps={{ variant: 'subtitle1' }}
                    subheader={subheader}
                    subheaderTypographyProps={{ variant: 'subtitle2' }} />
                <CardContent sx={{ px: 2, py: 0 }}>
                    <Collapse
                        in={collapseDiscription}
                        collapsedSize={22}
                    >
                        <Typography
                            fontSize={14}
                            sx={{
                                ...(!collapseDiscription && {
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    color: 'text.disabled'
                                })
                            }}
                        >
                            {content}
                        </Typography>
                    </Collapse>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <IconButton
                        onClick={(e) => { e.stopPropagation() }}
                        href={skillInfo.navUrl}>
                        <Iconify
                            width={20}
                            height={20}
                            icon='gridicons:external' />
                    </IconButton>
                </CardActions>
            </StyleWidgetCard>
            {divider && <Divider flexItem sx={(theme) => ({
                mt: 3,
                borderColor: !collapseDiscription
                    ? theme.palette.divider
                    : 'text.disabled'
            })} />}
        </>
    );
}
