import Head from 'next/head';
import { useContext } from 'react';

import { GlobalContext } from '@/contexts/Global';

function Meta(props) {
    const url = process.env.URL || process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : '';

    const defaults = {
        title: 'Die Staatstheater Hannover',
        description: '...',
        image: `${url}/images/preview.png`,
    };

    const { options: global } = useContext(GlobalContext);

    const { title, description, image } = { ...defaults, ...global, ...props };

    return (
        <Head>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}

            <meta property="og:site_name" content={title} />
            {description && <meta property="og:description" content={description} />}
            {title && <meta property="og:title" content={title} />}
            {image && <meta name="image" property="og:image" content={image} />}
            <meta property="og:type" content="website" />

            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {image && <meta name="twitter:image" content={image} />}
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
}

export { Meta };
