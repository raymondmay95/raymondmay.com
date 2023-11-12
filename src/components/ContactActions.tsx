import { Email, Phone } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { ProfileInfo } from "../models/Widget/ProfileInfo";
import { AnimatedButtonContainer } from "./AnimatedButtonContainer";

//TODO: React GA4

export function ContactActions({ profileInfo }: { profileInfo: ProfileInfo; }) {

    return (
        <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'>
            <AnimatedButtonContainer>
                <IconButton
                    id="phone_contact"
                    aria-label="Call Raymond."
                    href={`tel:${profileInfo.phone}`}
                    rel="nofollow"
                >
                    <Phone />
                </IconButton>
            </AnimatedButtonContainer>
            <AnimatedButtonContainer>
                <IconButton
                    id="email_contact"
                    aria-label="Email Raymond."
                    href={`mailto:${profileInfo.email}?subject=Contact Me`}
                    rel="nofollow"
                >
                    <Email />
                </IconButton>
            </AnimatedButtonContainer>
        </Stack>
    );
}
