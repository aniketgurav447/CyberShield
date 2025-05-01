export default function Button({ children, onClick, loading, disabled }) {
    return (
      <button
        type="submit"
        onClick={onClick}
        disabled={disabled}
        className="login-button"
      >
        {loading ? <span className="spinner"></span> : children}
      </button>
    );
  }
  