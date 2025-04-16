import { useState, useEffect } from 'react';

interface UseCounterProps {
    endValue: number;
    duration?: number;
    isInView?: boolean;
}

export default function useCounter({ endValue, duration = 1000, isInView = false }: UseCounterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView && endValue > 0) {
            let start = 0;
            const increment = endValue / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= endValue) {
                    setCount(endValue);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, endValue, duration]);

    return count;
}