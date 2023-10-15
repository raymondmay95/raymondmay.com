import { Avatar, AvatarProps } from "@mui/material";

const avatarSrc = 'https://lh3.googleusercontent.com/a/ACg8ocI7rMXpFkH9XuPNH1p0GJoQ3tTglXpoRtX_LiuT9hubJYc=s576-c-no';
export function RMAvatar(props: Omit<AvatarProps, 'src' | 'title'>) {
    return <Avatar {...props} src={avatarSrc} title="RM" />;
}
