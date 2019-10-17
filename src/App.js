import React, { Fragment, Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import ayTheme from './styles/theme';
import Header from './components/header'

const Home = lazy(() => import('./views/home'));


const themeToCss = theme => {
  const vars = Object.entries(theme).map(t => `--${t[0]}:${t[1]}`);
  return vars.join(';');
};

const GlobalStyle = createGlobalStyle`
  :root{
    ${props => themeToCss(props.theme)};
  }
`;
const App = () => {
  const theme = Object.assign(ayTheme);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle theme={theme} />
        <Suspense fallback={null}>
          <BrowserRouter>
            <Fragment>
              <Header theme={theme.default} />
              <Route exact path="/" component={Home} />
            </Fragment>
          </BrowserRouter>
        </Suspense>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
