import { Avatar, AvatarProps } from "@mui/material";

const avatarSrc = 'https://lh3.googleusercontent.com/a/ACg8ocI7rMXpFkH9XuPNH1p0GJoQ3tTglXpoRtX_LiuT9hubJYc=s576-c-no';

export function RMAvatar({ sx, ...props }: Omit<AvatarProps, 'src' | 'title'>) {
    return <Avatar
        sx={{
            height: 75,
            width: 75,
            ...sx
        }}
        src={avatarSrc}
        alt="Raymond May's Profile Photo"
        title="RM"
        {...props}
    />;
}
