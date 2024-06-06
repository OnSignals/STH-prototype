import { useEffect, useRef } from 'react';

/**
 * This hook is needed to use a forwarded ref both in the parant AND child component
 * https://gist.github.com/pie6k/b4717f392d773a71f67e110b42927fea
 */
function useSharedForwardedRef(forwardedRef) {
    // final ref that will share value with forward ref. this is the one we will attach to components
    const innerRef = useRef(null);

    useEffect(() => {
        // after every render - try to share current ref value with forwarded ref
        if (!forwardedRef) {
            return;
        }
        if (typeof forwardedRef === 'function') {
            forwardedRef(innerRef.current);
            return;
        } else {
            // by default forwardedRef.current is readonly. Let's ignore it
            forwardedRef.current = innerRef.current;
        }
    });

    return innerRef;
}

export default useSharedForwardedRef;
