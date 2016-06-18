import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from 'components/app';

injectTapEventPlugin();

render(<App testProp="here I am" otherProp="me too" />, document.getElementById('app'));