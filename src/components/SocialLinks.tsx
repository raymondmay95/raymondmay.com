import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ProfileInfo } from "../models/Widget/ProfileInfo";

export function SocialLinks({ links }: { links: ProfileInfo['social']; }) {
    return (
        <>
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
        </>
    );
}
