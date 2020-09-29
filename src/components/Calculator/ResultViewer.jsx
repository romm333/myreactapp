import React from 'react';
import PropTypes from 'prop-types';
import './ResultViewer.css';

function ResultViewer(props) {
  return <div className="result-viewer">{props.value}</div>;
}
ResultViewer.propTypes = {
  value: PropTypes.string.isRequired
};

export default ResultViewer;
