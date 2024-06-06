import { useState, useEffect } from 'react';
import { create } from 'zustand';
import { shallow } from 'zustand/shallow';

function Debug() {
    const { toggleDebugging } = useDebugStore((state) => ({ toggleDebugging: state.toggleDebugging }), shallow);

    useEffect(() => {
        function onKeyUp(event) {
            if (event.key === 'd') {
                toggleDebugging();
            }
        }

        window.addEventListener('keyup', onKeyUp);

        return () => {
            window.removeEventListener('keyup', onKeyUp);
        };
    }, []);

    return null;
}

const useDebugStore = create((set, get) => ({
    isDebugging: false,

    toggleDebugging: () => set({ isDebugging: !get().isDebugging }),
}));

function useDebug() {
    const { isDebugging } = useDebugStore((state) => ({ isDebugging: state.isDebugging }), shallow);

    return isDebugging;
}

export { Debug, useDebug };
