import { MediaQueries } from '@/styles/mixins/MediaQueries';

const css = String.raw;

const Button = css`
    display: block;
    padding: 0.25em 0.35em 0.05em;

    font-size: var(--type--scale---1);
    line-height: 0.8;
    font-weight: normal;
    font-variation-settings: 'wght' 500, 'ital' 0, 'opsz' 15;
    text-align: center;
    letter-spacing: -0.04em;

    border: 1px solid currentColor;
    border-radius: 0.2vw;

    cursor: pointer;

    @media ${MediaQueries.hover} {
        &:hover {
            color: #fff;
            background-color: #000;
        }
    }
`;

export { Button };
