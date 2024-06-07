const css = String.raw;

/**
 *
 * wght 20...150
 * ital 0...14
 * srff 0...100
 */
const Arizona = css`
    @font-face {
        font-family: 'Arizona VF Web';
        src: url('/fonts/arizona.woff2') format('woff2-variations');

        font-weight: 20 150;
        font-style: oblique 0deg 14deg;
    }
`;

/**
 *
 * wght 300...1000
 * ital 0...1
 * opsz 10...60
 */
const Flaire = css`
    @font-face {
        font-family: 'Flaire VF Web';
        src: url('/fonts/flaire.woff2') format('woff2-variations');

        font-weight: 300 1000;
    }
`;

/**
 *
 * wght 100...900
 * slnt 0...12
 * CNTR 0...100
 */
const Ultra = css`
    @font-face {
        font-family: 'Ultra VF Web';
        src: url('/fonts/ultra.woff2') format('woff2-variations');

        font-weight: 100 900;
    }
`;

export { Arizona, Flaire, Ultra };
