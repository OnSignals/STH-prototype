import React from 'react';

const GlobalContext = React.createContext({});

function GlobalContextProvider({ globalProps, children }) {
    return <GlobalContext.Provider value={globalProps}>{children}</GlobalContext.Provider>;
}

export { GlobalContext, GlobalContextProvider };
