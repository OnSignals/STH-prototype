/** @jsxImportSource @emotion/react */

import { css, Global as GlobalStyles } from '@emotion/react';
import { useContext } from 'react';
import { create } from 'zustand';
import { SectionContext } from '@/contexts/Section';

import { Visual } from '../../Visual/Visual';
import { Posts as PostsTheatre } from './Theatre/Posts';
import { Posts as PostsOpera } from './Opera/Posts';
import { Teasers } from './Opera/Teasers';

const useScrollIndex = create((set) => ({
    currentIndex: 0,

    setCurrentIndex: (currentIndex) => set({ currentIndex }),
}));

function Main() {
    const section = useContext(SectionContext);

    return (
        <>
            <GlobalStyles styles={styles.global} />
            <main css={styles.wrapper}>
                {section === 'schauspiel' ? (
                    <>
                        <Visual />
                        <PostsTheatre />
                    </>
                ) : (
                    <>
                        <Teasers />
                        <PostsOpera />
                    </>
                )}
            </main>
        </>
    );
}

export { Main, useScrollIndex };

const styles = {
    global: css`
        :root {
        }
    `,

    wrapper: css`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        margin: 0 var(--Sidebar--width) 0 0;
        overflow: hidden;

        background-image: linear-gradient(180deg, #fff 0%, #666 100%);
        /* border: 1px solid red; */

        [data-section='staatsoper'] & {
            margin: 0 0 0 var(--Sidebar--width);
        }
    `,
};
