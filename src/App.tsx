import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

import { Header, Content, Footer } from './components';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Content />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
