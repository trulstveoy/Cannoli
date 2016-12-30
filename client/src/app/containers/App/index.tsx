const appConfig = require('../../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header } from '../../components';

class App extends React.Component<any, any> {
  public render() {
    const s = require('./style.css');

    return (
      <section className={s.appContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header />
        <MuiThemeProvider>
        {this.props.children}
        </MuiThemeProvider>
      </section>
    );
  }
}

export { App }
