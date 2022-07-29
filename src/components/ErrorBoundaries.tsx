import React from "react";
import { OperationType, PayloadError, Variables } from "relay-runtime";

interface CustomError extends Error {
  source: {
    errors: PayloadError[];
    operation: OperationType;
    variables: Variables;
  };
}

type State = { error: CustomError | null; fetchKey: number };

export class ErrorBoundary extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, fetchKey: 0 };
  }

  static getDerivedStateFromError(error: CustomError): State {
    return { error, fetchKey: 0 };
  }

  componentDidCatch(error: CustomError, errorInfo: any) {
    console.log({ error, errorInfo });
  }

  render() {
    // TODO fetchKey for retry
    const { error, fetchKey } = this.state;
    if (error) {
      return <div>error occurs: {error.source.errors[0].message}</div>;
    }
    return this.props.children;
  }
}
