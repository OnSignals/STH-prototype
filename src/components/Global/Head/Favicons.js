import Head from 'next/head';

function Favicons() {
    return true ? null : (
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
            <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#1428b4" />
            <meta name="msapplication-TileColor" content="#1428b4" />
            <meta name="theme-color" content="#1428b4" />
        </Head>
    );
}

export { Favicons };
