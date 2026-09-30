import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("[App ErrorBoundary caught an error]:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          background: "#060612",
          color: "#f1f5f9",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          textAlign: "center"
        }}>
          <div style={{
            maxWidth: "500px",
            padding: "36px",
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)"
          }}>
            <span style={{ fontSize: "3rem", display: "block", marginBottom: "16px" }}>⚡</span>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.8rem", marginBottom: "12px", color: "#a78bfa" }}>
              Something went wrong
            </h1>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px" }}>
              An unexpected display glitch occurred. Click the button below to reload the portfolio.
            </p>
            <button
              onClick={this.handleReload}
              style={{
                padding: "12px 28px",
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                color: "white",
                border: "none",
                borderRadius: "9999px",
                fontWeight: "600",
                fontSize: "15px",
                cursor: "pointer"
              }}
            >
              🔄 Reload Portfolio
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
