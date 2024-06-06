import parse from 'html-react-parser';
import * as sanitizeHtml from 'sanitize-html';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

const sanitizeOptions = {
    allowedTags: ['p', 'a', 'ul', 'li'],
    allowedAttributes: {
        a: ['href', 'target'],
    },
};

function useInlineLinks(ref) {
    const router = useRouter();

    useEffect(() => {
        function onClick(event) {
            if (!event.target || !event.target.matches('a')) return;

            event.preventDefault();
            router.push(event.target.getAttribute('href'), null, { scroll: false });
        }

        if (ref.current) ref.current.addEventListener('click', onClick);

        return () => {
            if (ref.current) ref.current.removeEventListener('click', onClick);
        };
    }, []);
}

function Html({ html = '' }) {
    const wrapperRef = useRef();
    useInlineLinks(wrapperRef);

    return (
        <div ref={wrapperRef} style={{ display: 'contents' }}>
            {parse(sanitizeHtml(html, sanitizeOptions))}
        </div>
    );
}

export { Html };
