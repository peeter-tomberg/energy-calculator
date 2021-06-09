import { Global } from '@heathmont/moon-global';
import { ThemeProvider, missionsToolLight } from '@heathmont/moon-themes';
import styled from 'styled-components';

const Main = styled.main`
  background-color: ${({ theme }) => theme.color.goku[100]};
  padding: 20px;
`;

type Props = {
  Component: (props: any) => JSX.Element;
  pageProps: unknown;
}

const App = ({ Component, pageProps }: Props) => {
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