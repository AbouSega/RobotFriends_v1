import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false 
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <h1>OOOOOPSS Something went wrong!</h1>;
        }

        return children;
    }
}

export default ErrorBoundary;
