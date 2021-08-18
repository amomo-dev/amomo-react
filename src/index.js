import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <StrictMode>
    <div>amomo-react</div>
  </StrictMode>,
  document.getElementById('root')
);
