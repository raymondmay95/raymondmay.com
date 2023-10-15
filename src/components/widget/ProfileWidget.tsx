import { CardActions, CardContent, CardHeader, Typography, } from "@mui/material";
import { StyleWidgetCard } from "./StyleWidgetCard";
import { RMAvatar } from "../RMAvatar";
import { ProfileInfo } from "../../models/Widget/ProfileInfo";
import { SocialLinks } from "../SocialLinks";
import { ContactActions } from "../ContactActions";


export function ProfileWidget({ profileInfo }: { profileInfo: ProfileInfo }) {


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
                <ContactActions profileInfo={profileInfo} />
                <SocialLinks links={profileInfo.social} />
            </CardActions>
        </StyleWidgetCard>
    );
}