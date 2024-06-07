/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Actions } from '@/styles/mixins/Interaction';
import { Button } from './StyleButton';

function Post({ post }) {
    return (
        <article css={styles.wrapper}>
            <div css={styles.date}>
                <span css={styles.day}>{post.day}</span>
                <span css={styles.weekday}>{post.weekday}</span>
            </div>

            <div css={styles.info}>
                <h4 css={styles.title}>{post.title}</h4>

                <div css={styles.meta}>
                    <p css={styles.time}>{post.time}</p>
                    <p css={styles.tickets}>
                        <a>Karten</a>
                    </p>
                </div>
            </div>
        </article>
    );
}

export { Post };

const styles = {
    wrapper: css`
        display: flex;
        width: 100%;
        padding: 0.75vw 0.5vw 0.5vw;

        border-bottom: 1px solid currentColor;

        &:last-child {
            border-bottom: none;
        }
    `,

    date: css`
        display: block;
        width: 5vw;
    `,

    day: css`
        display: block;
        margin: 0 0 0.1em;

        font-size: var(--type--scale--2);
        line-height: 0.8;
        font-weight: normal;
        font-variation-settings: 'wght' 500, 'ital' 0, 'opsz' 40;
        letter-spacing: -0.04em;
    `,

    weekday: css`
        font-size: var(--type--scale---1);
        line-height: 0.8;
        font-weight: normal;
        font-variation-settings: 'wght' 500, 'ital' 0, 'opsz' 20;
        letter-spacing: -0.04em;
    `,

    info: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    `,

    title: css`
        width: 100%;
        margin: 0 0 0.1em;

        font-size: var(--type--scale--2);
        line-height: 0.8;
        font-weight: normal;
        font-variation-settings: 'wght' 500, 'ital' 0, 'opsz' 40;
        letter-spacing: -0.04em;
    `,

    meta: css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    `,

    time: css`
        margin: 0;

        font-size: var(--type--scale---1);
        line-height: 0.8;
        font-weight: normal;
        font-variation-settings: 'wght' 500, 'ital' 0, 'opsz' 20;
        letter-spacing: -0.04em;
    `,

    tickets: css`
        margin: 0;

        & > a {
            ${Button}
        }
    `,
};
