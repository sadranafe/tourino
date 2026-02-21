'use client';

import { Box, Grid, Skeleton } from "@mui/material";

const ToursLoading = () => {
    return (
        <>
            <Grid container>
                <Box sx = {{ width : 210 , height : 120 }}>
                    <Skeleton className = "w-full h-full" variant = "rectangular"/>
                </Box>
                <Box>
                    <Skeleton width = {210} height = {50} variant = "rounded"/>
                    <Skeleton width = {210} height = {50} variant = "rounded"/>
                    <Skeleton width = {210} height = {50} variant = "rounded"/>
                </Box>
            </Grid>
        </>
    );
};

export default ToursLoading;