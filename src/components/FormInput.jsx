import PropTypes from "prop-types";

const FormInput = ({
  label,
  id,
  name,
  placeholder,
  type = "text",
  register,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={id} className="text-white font-semibold">
        {label}
        <span className="text-red-400">*</span>
      </label>
      <div>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required
          className="w-full p-3 rounded-md mt-2 outline-none mb-3"
          {...register}
        />
        {errors && <small className="text-red-400">{errors.message}</small>}
      </div>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
};

export default FormInput;
