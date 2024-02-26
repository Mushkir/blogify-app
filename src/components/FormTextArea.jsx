import PropTypes from "prop-types";

const FormTextArea = ({
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
        <textarea
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required
          rows="7"
          className="w-full p-3 rounded-md mt-2 outline-none"
          {...register}
        ></textarea>
        {errors && <small className="text-red-400">{errors.message}</small>}
      </div>
    </div>
  );
};

FormTextArea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
};

export default FormTextArea;
