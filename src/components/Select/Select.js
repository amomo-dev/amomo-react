import styles from './Select.module.scss';

import { Component } from 'react';
import { classNames } from 'utils';

export class Select extends Component {
  state = {
    value: this.props.initialValue ?? '0',
  };

  handleChange = (e) => {
    const selectValue = e.target.value;
    this.setState({
      value: selectValue,
    });
  };

  render() {
    const {
      id,
      label,
      name,
      optionData,
      className,
      labelClassName,
      selectClassName,
      ...restProps
    } = this.props;

    const { value } = this.state;

    return (
      <div className={className}>
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
        <select
          id={id}
          name={name ?? id}
          className={classNames(styles.select, selectClassName)}
          value={value}
          onChange={this.handleChange}
          {...restProps}
        >
          {optionData.map((option) => {
            const { id, name } = option;
            return (
              <option value={option.value ?? id} key={id}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
