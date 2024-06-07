import { css } from '@emotion/react';

import { Color } from '@/styles/tokens/Color';
import { Type } from '@/styles/tokens/Type';
import { Document } from '@/styles/components/Document';
import { Link } from '@/styles/components/Link';
import { Arizona, Flaire, Ultra } from './tokens/Typefaces';

const Global = css`
    // Webfonts
    ${Arizona}
    ${Flaire}
    ${Ultra}

    // tokens
    ${Color}
    ${Type}

    // global components
    ${Document}
    ${Link}
`;

export { Global };
