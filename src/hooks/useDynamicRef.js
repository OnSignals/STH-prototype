import { useEffect, useRef, useCallback, createRef } from 'react';

/**
 * Hook to enable dynamic refs
 * @param {int} length
 */
function useDynamicRef(length) {
    const refs = useRef([]);

    const setRef = useCallback((node, index) => {
        if (node) {
            refs.current[index] = node;
        }
    });

    useEffect(() => {
        refs.current = Array(length)
            .fill()
            .map((_, i) => refs.current[i] || createRef());
    }, [length]);

    return [refs, setRef];
}

export default useDynamicRef;
