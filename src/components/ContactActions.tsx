import { Email, Phone } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ProfileInfo } from "../models/Widget/ProfileInfo";

export function ContactActions({ profileInfo }: { profileInfo: ProfileInfo; }) {
    return (
        <>
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
        </>
    );
}
