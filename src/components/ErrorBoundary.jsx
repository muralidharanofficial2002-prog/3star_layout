import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-paper p-6 text-center">
          <div>
            <p className="font-display text-2xl font-bold text-navy">Something went off-register.</p>
            <p className="mt-2 text-sm text-ink/60">Please refresh the page — the press will be back in a moment.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
