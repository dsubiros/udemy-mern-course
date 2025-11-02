interface FormRowProps {
  type: 'text' | 'email' | 'password' | 'number';
  name: string;
  labelText?: string;
  defaultValue?: string | number;
  isRequired?: boolean;
}

const FormRow = ({
  type,
  name,
  labelText,
  defaultValue,
  isRequired,
}: FormRowProps) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input "
        defaultValue={defaultValue || ''}
        required={isRequired}
      />
    </div>
  );
};
export default FormRow;
