//  for syntax highlghting
const css = String.raw;

const ColorValues = {
    black: '#000',
    white: '#fff',
};

const Color = css`
    :root {
        --color--black: ${ColorValues.black};
        --color--white: ${ColorValues.white};
    }
`;

export { ColorValues, Color };
