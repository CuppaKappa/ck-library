import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

export const Input = ({ type, label, placeholder, errors, disabled, ...props }) => {
  const sanitizedLabel = label.toLowerCase().replace(/\s/g, '-');

  return (
    <div>
      <label
        className={[styles.label, 'px-[21px]'].join(' ')}
        htmlFor={sanitizedLabel}
      >
        {label[0].toUpperCase() + label.slice(1)}
      </label>

      <input
        className={styles.input}
        type={type}
        name={sanitizedLabel}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />

      <div
        // eslint-disable-next-line prettier/prettier
        className={[styles.error, errors.length ? styles.hidden : ''].join(' ')}
      >
        {errors.map((v, i) => (
          <p key={i}>{v}</p>
        ))}
      </div>
    </div>
  );
};

Input.propTypes = {
  /**
   * Input field type
   */
  type: PropTypes.string.isRequired,
  /**
   * Label and Input name
   */
  label: PropTypes.string.isRequired,
  /**
   * Input's placeholder text
   */
  placeholder: PropTypes.string,
  /**
   * Errors to display
   */
  errors: PropTypes.arrayOf(PropTypes.string),
  /**
   * Is the button disabled?
   */
  disabled: PropTypes.bool
};

Input.defaultProps = {
  type: 'text',
  label: 'Label',
  placeholder: '',
  errors: [],
  disabled: false
};
