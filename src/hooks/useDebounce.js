
import { useState, useEffect } from 'react';

/**
 * A custom hook that debounces a value. This is useful for delaying the execution of a function
 * or an effect until the user has stopped typing for a certain period.
 * 
 * @param {*} value The value to debounce (e.g., a search query).
 * @param {number} delay The debounce delay in milliseconds.
 * @returns {*} The debounced value.
 */
export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set up a timer to update the debounced value after the specified delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Clean up the timer if the value changes before the delay has passed
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};
