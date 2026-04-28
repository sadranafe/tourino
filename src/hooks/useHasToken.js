'use client';

import { getCookie } from "@/utils/cookie";
import { useEffect, useState } from "react";

const useHasToken = () => {
    const [hasToken , setHasToken] = useState(false);

    useEffect(() => {
        setHasToken(!!getCookie('accessToken'));
    },[])

    return hasToken;
};

export default useHasToken;