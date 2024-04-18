import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStaus] = useState(true);

    useEffect(() => {
        window.addEventListener('online', () => {
            setOnlineStaus(true);
        });
    
        window.addEventListener('offline', () => {
            setOnlineStaus(false);
        });
    }, [])
    return onlineStatus;
}