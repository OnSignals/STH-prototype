const css = String.raw;

const Link = css`
    a {
        color: inherit;

        text-decoration: none;
    }

    @media (hover: hover) and (pointer: fine) {
        a:hover {
            color: inherit;
        }
    }

    a:visited {
        color: inherit;
    }
`;

export { Link };
