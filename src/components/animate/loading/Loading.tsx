import { Box } from "@mui/material";
import './loading.css'

export default function Loading() {
    return (
        <Box className='loading__Box'>
            <img
                loading="eager"
                src='/assets/Raymond-Arthur_May.svg'
                alt='loading signature'
                width={400}
                height={400}
            />
        </Box>
    );
}
