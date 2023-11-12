import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { ProfileInfo } from "../models/Widget/ProfileInfo";
import { AnimatedButtonContainer } from "./AnimatedButtonContainer";

//TODO: React GA4

export function SocialLinks({ links }: { links: ProfileInfo['social']; }) {
    return (
        <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'>
            {links.map((link) => {
                switch (link.title) {
                    case "LinkedIn":
                        return (
                            <AnimatedButtonContainer key={link.title + "__animated_container"}>
                                <IconButton
                                    aria-label="Link to linkedin"
                                    key={link.title + "__link"}
                                    href={link.url}
                                >
                                    <LinkedIn />
                                </IconButton>
                            </AnimatedButtonContainer>
                        );
                    case "GitHub":
                        return (
                            <AnimatedButtonContainer key={link.title + "__animated_container"}>
                                <IconButton
                                    aria-label="Link to github"
                                    key={link.title + "__link"}
                                    href={link.url}
                                >
                                    <GitHub />
                                </IconButton>
                            </AnimatedButtonContainer>
                        );
                    default:
                        return null;
                }
            })}
        </Stack>
    );
}
