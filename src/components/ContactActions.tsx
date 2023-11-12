import { Email, Phone } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { ProfileInfo } from "../models/Widget/ProfileInfo";
import { motion } from "framer-motion";
import { widgetContactAnimation } from "./widget/animationConfig";

export function ContactActions({ profileInfo }: { profileInfo: ProfileInfo; }) {
    return (
        <Stack
            component={motion.div}
            {...widgetContactAnimation}
            direction='row'
            justifyContent='flex-end'
            alignItems='center'>
            <IconButton
                href={`tel:${profileInfo.phone}`}
            >
                <Phone />
            </IconButton>
            <IconButton
                href={`mailto:${profileInfo.email}?subject=Contact Me`}
            >
                <Email />
            </IconButton>
        </Stack>
    );
}
