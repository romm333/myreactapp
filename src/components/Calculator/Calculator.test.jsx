import React from 'react';
import renderer from 'react-test-renderer';

import Calculator from './Calculator';
import ResultViewer from './ResultViewer';

test('Calculator component UI test', () => {
  const resultViewerComponent = renderer.create(<Calculator />);
  const tree = resultViewerComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test('The render w "0" value', () => {
  const resultViewerComponent = renderer.create(<ResultViewer value="0" />);
  const tree = resultViewerComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test('The render with string value', () => {
  const resultViewerComponent = renderer.create(<ResultViewer value="ERROR" />);
  const tree = resultViewerComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test('The render with number value', () => {
  const resultViewerComponent = renderer.create(<ResultViewer value="1000" />);
  const tree = resultViewerComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
