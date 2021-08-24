import styles from './Input.module.scss';

import { Component } from 'react';
import { classNames } from 'utils';

export class Input extends Component {
  state = {
    value: this.props.initialValue ?? '',
  };

  handleChange = (e) => {
    const inputValue = e.target.value;
    this.setState({
      value: inputValue,
    });
  };

  static defaultProps = {
    type: 'text',
  };

  render() {
    const {
      id,
      label,
      type,
      name,
      placeholder,
      readonly,
      disabled,
      className,
      labelClassName,
      inputClassName,
      ...restProps
    } = this.props;

    const { value } = this.state;

    return (
      <div className={classNames(styles.input_container, className)}>
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
        <div className={styles.input_wrap}>
          <input
            id={id}
            type={type}
            name={name ?? id}
            className={classNames(styles.input, inputClassName)}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            value={value}
            onChange={this.handleChange}
            {...restProps}
          />
        </div>
      </div>
    );
  }
}
