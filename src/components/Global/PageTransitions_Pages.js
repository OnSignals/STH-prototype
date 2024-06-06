/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

/**
 * Manual scroll restoration
 *
 */
function useScrollRestoration() {
    const router = useRouter();

    const scrollTop = useRef([0, 0]);
    const isBrowserHistory = useRef(false);

    useEffect(() => {
        function onPopState() {
            isBrowserHistory.current = true;
            setTimeout(() => {
                isBrowserHistory.current = false;
            }, 2000);

            return true;
        }

        function onRouteChangeStart() {
            scrollTop.current[1] = scrollTop.current[0];
            scrollTop.current[0] = document.scrollingElement.scrollTop;
        }

        function onHashChangeStart() {}

        router.beforePopState(onPopState);
        router.events.on('routeChangeStart', onRouteChangeStart);
        router.events.on('hashChangeStart', onHashChangeStart);

        return () => {
            router.events.off('routeChangeStart', onRouteChangeStart);
            router.events.off('hashChangeStart', onHashChangeStart);
        };
    }, [router]);

    function onExitComplete() {
        setTimeout(() => {
            // scroll to hash > ID
            let targetElement;
            const hash = router.asPath.split('#')?.[1];
            if (hash) {
                targetElement = document.querySelector(`#${hash}`);
            }

            document.scrollingElement.scrollTo({
                top: isBrowserHistory.current ? scrollTop.current[1] : targetElement ? targetElement.offsetTop : 0,
                behavior: 'instant',
            });
        }, 1);
    }

    return { onExitComplete };
}

function PageTransitions({ children }) {
    const router = useRouter();
    const { onExitComplete } = useScrollRestoration();

    return (
        <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'tween', duration: 0.5 }}
                key={router.asPath}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

export { PageTransitions };
