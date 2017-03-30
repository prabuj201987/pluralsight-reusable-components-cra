import React, { PropTypes } from 'react';
import Label from 'ps-ui/Label';
import styled from 'styled-components';

/**
 * TextInput using styled-components
 */
const TextInput = ({ htmlId, name, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props }) => {
  const Error = styled.div`
    color: red;
  `

  const Input = styled.input`
    border: ${error => error.length > 0 ? 'solid 1px red;' : null};
    display: block;
  `;

  const Fieldset = styled.div`
    margin-bottom: 16px;
  `;

  return (
    <Fieldset>
      <Label htmlFor={htmlId} label={label} required={required} />
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props} />
      {children}
      {error && <Error>{error}</Error>}
    </Fieldset>
  );
};

TextInput.propTypes = {
  /**
   * Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing.
   */
  htmlId: PropTypes.string.isRequired,

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