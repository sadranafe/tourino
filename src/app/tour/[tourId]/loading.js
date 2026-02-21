'use client';
import { Skeleton } from '@mui/material';

const Loading = () => {
    return (
        <div className = 'w-9/12 mx-auto my-10'>
            <Skeleton animation = 'wave' className = 'w-full' variant = 'rounded' height = {400}/>
        </div>
    );
};

export default Loading;