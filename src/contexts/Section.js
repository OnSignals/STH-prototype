import React from 'react';

const SectionContext = React.createContext('schauspiel');

function SectionContextProvider({ section, children }) {
    return <SectionContext.Provider value={section}>{children}</SectionContext.Provider>;
}

export { SectionContext, SectionContextProvider };
