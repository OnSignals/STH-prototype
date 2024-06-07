/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { SectionContextProvider } from '@/contexts/Section';

import { Sidebar } from './Sidebar/Sidebar';
import { Main } from './Main/Main';
import { Header as HeaderTheatre } from './Header/HeaderTheatre';
import { Header as HeaderOpera } from './Header/HeaderOpera';

function Home({ section = 'schauspiel' }) {
    return (
        <SectionContextProvider section={section}>
            <div css={styles.wrapper} data-section={section}>
                {section === 'schauspiel' ? <HeaderTheatre /> : <HeaderOpera />}
                <Main />
                <Sidebar />
            </div>
        </SectionContextProvider>
    );
}

export { Home };

const styles = {
    wrapper: css`
        display: contents;
    `,
};
