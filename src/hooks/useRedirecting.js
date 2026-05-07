import React, { useState } from 'react';

const useRedirecting = () => {
    const [isRedirecting , setIsRedirecting] = useState(false);
    const startRedirecting = () => setIsRedirecting(true);
    const stopRedirecting = () => setIsRedirecting(false);

    return { isRedirecting , startRedirecting , stopRedirecting }
};

export default useRedirecting;