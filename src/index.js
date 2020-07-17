import React from 'react';
import { render } from 'react-snapshot';
import App from './components/app';
import './index.scss'

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

ReactGA.initialize("UA-172919685-1");
// Initialize google analytics page view tracking
const history = createBrowserHistory();
history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

render(
  <React.StrictMode>
    <App history={history}/>
  </React.StrictMode>,
  document.getElementById('root')
);

