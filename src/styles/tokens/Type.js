import { Family, FluidSize, LineHeight, Misc } from '@/styles/mixins/Type';

//  for syntax highlghting
const css = String.raw;

const Type = css`
    :root {
        /**
         * Family
         */
        --type--family--arizona: 'Arizona VF Web', sans-serif;
        --type--family--flaire: 'Flaire VF Web', sans-serif;
        --type--family--ultra: 'Ultra VF Web', sans-serif;

        /**
         * Fluid Size
         */
        --fluid--min-vw: 1180;
        --type--base-size: 12;

        /** 
         * Scale
         */
        --type--scale-base: 1.5vw;
        --type--scale-factor: 1.25;

        --type--scale---2: calc(var(--type--scale-base) / var(--type--scale-factor) / var(--type--scale-factor));
        --type--scale---1: calc(var(--type--scale-base) / var(--type--scale-factor));
        --type--scale--0: var(--type--scale-base);
        --type--scale--1: calc(var(--type--scale-base) * var(--type--scale-factor));
        --type--scale--2: calc(var(--type--scale-base) * var(--type--scale-factor) * var(--type--scale-factor));
        --type--scale--3: calc(
            var(--type--scale-base) * var(--type--scale-factor) * var(--type--scale-factor) * var(--type--scale-factor)
        );
        --type--scale--4: calc(
            var(--type--scale-base) * var(--type--scale-factor) * var(--type--scale-factor) * var(--type--scale-factor) *
                var(--type--scale-factor)
        );
        --type--scale--5: calc(
            var(--type--scale-base) * var(--type--scale-factor) * var(--type--scale-factor) * var(--type--scale-factor) *
                var(--type--scale-factor) * var(--type--scale-factor)
        );
        --type--scale--6: calc(
            var(--type--scale-base) * var(--type--scale-factor) * var(--type--scale-factor) * var(--type--scale-factor) *
                var(--type--scale-factor) * var(--type--scale-factor) * var(--type--scale-factor)
        );

        /** 
         * Line Height
         */
        --type--line-height--0: 1;
        --type--line-height--1: 1.2;
        --type--line-height--2: 1.4;

        /**
         * Weight
         */
        --type--weight--regular: 80;
    }

    html {
        font-family: var(--type--family--flaire);
        font-size: max(
            calc(var(--type--size, 1) * var(--type--base-size) * 1px),
            calc(var(--type--size, 1) * var(--type--base-size) / var(--fluid--min-vw) * 100vw)
        );
        line-height: var(--type--line-height--1);

        font-kerning: normal;
        font-feature-settings: none;
        text-size-adjust: 100%;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export { Type };
