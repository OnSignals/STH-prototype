import NextLink from 'next/link';
import { useRouter } from 'next/router';

function Link({ href, children, ...props }) {
    if (!href) {
        throw Error('Missing href prop');
    }

    const { isPreview } = useRouter();

    const url = new URL(href, process.env.NEXT_PUBLIC_URL);
    const searchParams = new URLSearchParams(url.search);

    if (isPreview) {
        searchParams.append('t', Date.now());
    }

    url.search = searchParams.toString();

    return (
        <NextLink href={url.toString()} {...props}>
            {children}
        </NextLink>
    );
}

export { Link };
