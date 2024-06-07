/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { calendar } from '@/data/calendar';
import { Actions } from '@/styles/mixins/Interaction';
import { Post } from './Post';

function Posts() {
    return (
        <div css={styles.wrapper}>
            <div css={styles.scroller}>
                <section css={styles.items}>
                    {calendar.map((event, i) => (
                        <Post post={event} key={i} />
                    ))}
                </section>
            </div>
        </div>
    );
}

export { Posts };

const styles = {
    wrapper: css`
        height: 100%;

        &::after {
            content: ' ';

            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10;

            display: block;
            height: 4vw;
            margin: 0 0 3vw;

            background-image: linear-gradient(
                to top,
                hsl(0, 0%, 100%) 0%,
                hsla(0, 0%, 100%, 0.987) 8.1%,
                hsla(0, 0%, 100%, 0.951) 15.5%,
                hsla(0, 0%, 100%, 0.896) 22.5%,
                hsla(0, 0%, 100%, 0.825) 29%,
                hsla(0, 0%, 100%, 0.741) 35.3%,
                hsla(0, 0%, 100%, 0.648) 41.2%,
                hsla(0, 0%, 100%, 0.55) 47.1%,
                hsla(0, 0%, 100%, 0.45) 52.9%,
                hsla(0, 0%, 100%, 0.352) 58.8%,
                hsla(0, 0%, 100%, 0.259) 64.7%,
                hsla(0, 0%, 100%, 0.175) 71%,
                hsla(0, 0%, 100%, 0.104) 77.5%,
                hsla(0, 0%, 100%, 0.049) 84.5%,
                hsla(0, 0%, 100%, 0.013) 91.9%,
                hsla(0, 0%, 100%, 0) 100%
            );

            ${Actions.none}
        }
    `,

    scroller: css`
        height: 100%;

        overflow-x: hidden;
        overflow-y: auto;
    `,

    items: css`
        padding: 5.75vw 0 calc(3vw + 4vw);
    `,
};
