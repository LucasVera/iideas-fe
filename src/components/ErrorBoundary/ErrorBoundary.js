import React, { Component } from 'react';
import { LogLevels, logMessage } from '../../common/util/logger';

// Catch React errors to show fallback ui and alert about the error
// More info here: https://reactjs.org/docs/error-boundaries.html (code taken from there)
export default class ErrorBoundary extends Component {
  constructor (props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError (_error) {
    return { hasError: true };
  }

  componentDidCatch (error, errorInfo) {
    logMessage({
      logLevel: LogLevels.ERROR,
      message: 'Unhandled Error',
      additionalData: { error, errorInfo }
    });
  }

  render () {
    if (this.state.hasError) {
      return (
        <h1>Something went wrong. Please, reload the page and try again.</h1>
      );
    }

    return this.props.children;
  }
}
