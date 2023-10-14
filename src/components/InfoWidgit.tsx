import { Email, LinkedIn, Phone } from "@mui/icons-material";
import { CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { StyleWidgetCard } from "./StyleWidgetCard";
import { RMAvatar } from "./RMAvatar";

export function InfoWidgit() {
    return (
        <StyleWidgetCard>
            <CardHeader
                avatar={<RMAvatar />}
                title='Raymond-Arthur K. May'
                subheader='Software Engineer'
            />
            <CardContent>
                <Typography variant="body1" sx={{ textIndent: 14 }}>{`
                    As a TypeScript developer, I possess a unique
                    blend of technical expertise and creativity that
                    enables me to excel in the ever-evolving world of
                    web and software development. With a strong foundation 
                    in TypeScript, a statically typed superset of JavaScript,
                    I bring to the table an intricate understanding of modern web applications,
                    robust backend systems, and responsive front-end interfaces.
                    My skills encompass the entire software development lifecycle, from designing
                    clean and maintainable code to optimizing performance and ensuring a seamless
                    user experience. Whether it's architecting scalable solutions, debugging intricate
                    problems, or crafting elegant user interfaces, my proficiency in TypeScript empowers
                    me to consistently deliver high-quality, reliable, and innovative solutions
                    for the digital landscape.
                `}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <IconButton><Phone /></IconButton>
                <IconButton><Email /></IconButton>
                <IconButton><LinkedIn /></IconButton>
            </CardActions>
        </StyleWidgetCard>
    );
}
