import { CardActions, CardContent, CardHeader, Collapse, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Iconify } from "./Iconify";
import { StyleWidgetCard } from "./StyleWidgetCard";
import { SkillInfo } from "../models/SkillInfo";

export function SkillsWidget({ skillInfo }: { skillInfo: SkillInfo }) {
    const [open, setOpen] = useState(false);

    const toggleDescription = () => { setOpen(prev => !prev); };

    return (
        <StyleWidgetCard disablePadding aria-label={skillInfo.ariaLabel}>
            <CardHeader
                avatar={<Iconify
                    icon={skillInfo.icon} />}
                title={skillInfo.title}
                subheader={skillInfo.subHeader}
                subheaderTypographyProps={{ variant: 'caption' }} />
            <CardContent sx={{ px: 2, py: 0 }}>
                <Collapse
                    in={open}
                    collapsedSize={22}
                    onClick={toggleDescription}>
                    <Typography
                        fontSize={12}
                        sx={{
                            ...(open && {
                                textIndent: 8
                            }),
                            ...(!open && {
                                whiteSpace: 'nowrap',
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                color: 'text.disabled'
                            })
                        }}
                    >
                        {skillInfo.content}
                    </Typography>
                </Collapse>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <IconButton>
                    <Iconify
                        width={20}
                        height={20}
                        icon='gridicons:external' />
                </IconButton>
            </CardActions>
        </StyleWidgetCard>
    );
}
