import { Box } from "@mui/material";
import './loading.css'
import useResponsive from "../../../hooks/useResponsive";

export default function Loading() {
    const isMobile = useResponsive('down', 'sm')
    return (
        <Box className='loading__Box'>
            <img
                loading="eager"
                src='/assets/Raymond-Arthur_May.svg'
                alt='loading signature'
                width={isMobile ? 300 : 400}
                height={isMobile ? 300 : 400}
            />
        </Box>
    );
}
