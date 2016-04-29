import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

import App from './app.jsx';

expect.extend(expectJSX);

const renderer = TestUtils.createRenderer();

describe('App', () => {
  it('should render the app', () => {
    renderer.render(<App />);
    const actual = renderer.getRenderOutput();
    const expected = <div>Simple React + Babel + Webpack</div>;
    expect(actual).toIncludeJSX(expected);
  });
});
