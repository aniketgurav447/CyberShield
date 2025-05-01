export default function CheckboxField({ id, checked, onChange, label }) {
    return (
      <div className="checkbox-field">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
  