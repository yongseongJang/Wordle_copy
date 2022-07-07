import React from 'react';
import { Error } from '../../pages';

class ErrorBoundary extends React.Component<
  { children: JSX.Element },
  { hasError: boolean }
> {
  constructor(props: { children: JSX.Element }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Error text={'something went wrong'} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
