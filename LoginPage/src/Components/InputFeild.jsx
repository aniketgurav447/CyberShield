export default function InputField({ id, type, placeholder, value, onChange, error, required }) {
    return (
      <div className="input-field">
        <label htmlFor={id} className="input-label">{id.charAt(0).toUpperCase() + id.slice(1)}</label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`input ${error ? "input-error" : ""}`}
        />
        {error && <span className="error-text">{error}</span>}
      </div>
    );
  }
  