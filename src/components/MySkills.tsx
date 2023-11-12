import {
    Divider,
    IconButton,
    Stack,
    Typography,
    alpha
} from "@mui/material";
import { Iconify } from "./Iconify";
import { SkillInfo } from "../models/Widget/SkillInfo";

const Color: Record<SkillInfo['id'], string> = {
    ReactJS_Skill: '#4483c9',
    Redux_Skill: '#764ABC',
    Typescript_Skill: '#3077C6'
}

export default function MySkills({
    skill,
    align
}:
    {
        skill: SkillInfo,
        align: 'left' | 'right'
    }) {

    const color = Color[skill.id] || 'inherit'

    const justifyContent = align === 'left'
        ? 'flex-start'
        : 'flex-end'

    return (
        <Stack
            spacing={2}
        >
            <Stack
                direction='row'
                alignItems='flex-end'
                justifyContent={justifyContent}>
                <Stack
                    direction='row'
                    spacing={1}
                    alignItems='center'
                    justifyContent={justifyContent}
                >
                    <Iconify
                        width={26}
                        height={26}
                        icon={skill.icon} />
                    <Typography
                        variant="h5"
                        color={color}>
                        {skill.title}
                    </Typography>
                </Stack>
                <IconButton
                    sx={{ ml: .5 }}
                    href={skill.navUrl}
                >
                    <Iconify
                        width={14}
                        height={14}
                        opacity={.2}
                        color="text.disabled"
                        icon='gridicons:external'
                    />
                </IconButton>
            </Stack>
            <Stack direction='row' justifyContent={justifyContent}>
                <Typography
                    paragraph
                    variant="body1"
                    color={color}
                    textAlign={align}
                    sx={{ textIndent: '1rem', maxWidth: 'md' }}
                >
                    {skill.content}
                </Typography>
            </Stack>
            <Stack justifyContent={justifyContent} direction='row'>
                <Divider
                    flexItem
                    sx={{
                        width: '63%',
                        ...(color !== 'inherit'
                            && {
                            borderColor: alpha(color, .2)
                        })
                    }}
                />
            </Stack>
        </Stack>
    );
}
