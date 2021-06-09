import { Global } from '@heathmont/moon-global';
import { ThemeProvider, missionsToolLight } from '@heathmont/moon-themes';
import styled from 'styled-components';

const Main = styled.main`
  background-color: ${({ theme }) => theme.color.goku[100]};
  padding: 20px;
`;

const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={missionsToolLight}>
            <>
                <Global/>
                <Main>
                    <Component {...pageProps} />
                </Main>
            </>
        </ThemeProvider>
    );
};

export default App;