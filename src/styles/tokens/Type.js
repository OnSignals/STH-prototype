import { Family, FluidSize, LineHeight, Misc } from '@/styles/mixins/Type';

//  for syntax highlghting
const css = String.raw;

const Type = css`
    :root {
        /**
         * Family
         */
        --type--family--sans: sans-serif;

        /**
         * Fluid Size
         */
        --fluid--min-vw: 1180;
        --type--base-size: 12;

        /** 
         * Scale
         */
        --type--scale-factor: 1.2;

        --type--scale---2: calc(1rem / var(--type--scale-factor) / var(--type--scale-factor));
        --type--scale---1: calc(1rem / var(--type--scale-factor));
        --type--scale--0: 1rem;
        --type--scale--1: calc(1rem * var(--type--scale-factor));
        --type--scale--2: calc(1rem * var(--type--scale-factor) * var(--type--scale-factor));
        --type--scale--3: calc(
            1rem * var(--type--scale-factor) * var(--type--scale-factor) * var(--type--scale-factor)
        );
        --type--scale--4: calc(
            1rem * var(--type--scale-factor) * var(--type--scale-factor) * var(--type--scale-factor) *
                var(--type--scale-factor)
        );
        --type--scale--5: calc(
            1rem * var(--type--scale-factor) * var(--type--scale-factor) * var(--type--scale-factor) *
                var(--type--scale-factor) * var(--type--scale-factor)
        );
        --type--scale--6: calc(
            1rem * var(--type--scale-factor) * var(--type--scale-factor) * var(--type--scale-factor) *
                var(--type--scale-factor) * var(--type--scale-factor) * var(--type--scale-factor)
        );

        /** 
         * Line Height
         */
        --type--line-height--0: 1;
        --type--line-height--1: 1.2;
        --type--line-height--2: 1.4;
    }

    html {
        font-family: var(--type--family--sans);
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
