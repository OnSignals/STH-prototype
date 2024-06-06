import { GlobalContextProvider } from '@/contexts/Global';
import Layout from '@/components/Global/Layout_Pages';

function App({ Component, pageProps, globalProps = {} }) {
    return (
        <GlobalContextProvider globalProps={globalProps}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </GlobalContextProvider>
    );
}

export default App;
