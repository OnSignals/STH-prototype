const css = String.raw;

const Document = css`
    *,
    &::before,
    &::after {
        box-sizing: border-box;
    }

    html,
    body {
        min-height: 100vh;
        margin: 0;
    }

    html {
        color: var(--color--black);

        background-color: var(--color--white);
    }

    body {
        background-color: var(--color--white);

        user-select: none;
    }

    ::selection {
    }

    #__next {
        display: contents;
    }
`;

export { Document };
