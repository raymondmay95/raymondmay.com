import { Email, LinkedIn, Phone } from "@mui/icons-material";
import { CardActions, CardContent, CardHeader, IconButton, Typography, } from "@mui/material";
import { StyleWidgetCard } from "./StyleWidgetCard";
import { RMAvatar } from "../RMAvatar";
import { ProfileInfo } from "../../models/Widget/ProfileInfo";
import { TextAnimate } from "../animate";


export function ProfileWidget({ profileInfo }: { profileInfo: ProfileInfo }) {

    const SocialLinks = profileInfo.social.map((link) => {
        switch (link.title) {
            case "LinkedIn":
                return (
                    <IconButton
                        key={link.title + "__link"}
                        href={link.url}
                    >
                        <LinkedIn />
                    </IconButton>
                )
            default:
                return null
        }
    })

    return (
        <StyleWidgetCard>
            <CardHeader
                avatar={<RMAvatar />}
                title={profileInfo.title}
                subheader={profileInfo.subheader}
            />
            <CardContent>
                <Typography variant="body1" style={{ textIndent: 8 }}>
                    {profileInfo.content}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <IconButton
                    href={profileInfo.phone}
                >
                    <Phone />
                </IconButton>
                <IconButton
                    href={`mailto:${profileInfo.email}?subject=Contact Me`}
                >
                    <Email />
                </IconButton>
                {SocialLinks}
            </CardActions>
        </StyleWidgetCard>
    );
}
