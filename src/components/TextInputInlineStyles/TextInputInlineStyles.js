import React, {PropTypes} from 'react';

// Note that I could declare any repeated pieces like this in a separate file instead if desired.
// const style = {
//   asterisk: {
//     color: 'red'
//   },
//   error: {
//     color: 'red'
//   },
//   input: {
//     error: {
//       border: 'solid 1px red'
//     },
//     display: 'block'
//   },
//   fieldset: {
//     marginBottom: 16
//   }
// }

/**
 * TextInput styled using React's inline styles
 */
const TextInput = ({name, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props}) => {
  const inputStyle = {display: 'block'};
  if (error && error.length > 0) {
    inputStyle.border = 'solid 1px red';
  }

  return (
    <div style={{marginBottom: 16}}>
      <label htmlFor={name}>{label}</label>
      { required && <span style={{color: 'red'}}> *</span> }
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyle}
        {...props}/>
        {children}
      {error && <div style={{color: 'red'}}>{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  /**
   * Input name
   */
  name: PropTypes.string.isRequired,

  /**
   * Input label
   */
  label: PropTypes.string.isRequired,

  /**
   * Input type
   */
  type: PropTypes.oneOf(['text', 'number', 'date', 'password']),

  /**
   * Mark label with asterisk if set to true
   */
  required: PropTypes.bool,

  /**
   * Function to call onChange
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Placeholder to display when empty
   */
  placeholder: PropTypes.string,

  /**
   * Value
   */
  value: PropTypes.string,

  /**
   * String to display when error occurs
   */
  error: PropTypes.string
};

export default TextInput;