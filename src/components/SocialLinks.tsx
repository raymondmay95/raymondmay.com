import { motion } from "framer-motion";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { ProfileInfo } from "../models/Widget/ProfileInfo";
import { widgetContactAnimation } from "./widget/animationConfig";

export function SocialLinks({ links }: { links: ProfileInfo['social']; }) {
    return (
        <Stack
            component={motion.div}
            {...widgetContactAnimation}
            direction='row'
            justifyContent='flex-end'
            alignItems='center'>
            {links.map((link) => {
                switch (link.title) {
                    case "LinkedIn":
                        return (
                            <IconButton
                                key={link.title + "__link"}
                                href={link.url}
                            >
                                <LinkedIn />
                            </IconButton>
                        );
                    case "GitHub":
                        return (
                            <IconButton
                                key={link.title + "__link"}
                                href={link.url}
                            >
                                <GitHub />
                            </IconButton>
                        );
                    default:
                        return null;
                }
            })}
        </Stack>
    );
}
