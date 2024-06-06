import { Global as GlobalStyles } from '@emotion/react';
import Head from 'next/head';
import { useEffect } from 'react';

import { Meta } from '@/components/Global/Head/Meta';
import { Favicons } from '@/components/Global/Head/Favicons';

import { Global } from '@/styles/Global';
import { PageTransitions } from './PageTransitions_Pages';

function Layout({ children }) {
    useEffect(() => {
        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            </Head>

            <Meta />
            <Favicons />

            <GlobalStyles styles={Global} />

            <PageTransitions>{children}</PageTransitions>
        </>
    );
}

export default Layout;
