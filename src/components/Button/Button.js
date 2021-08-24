import styles from './Button.module.scss';

import { classNames } from 'utils';

export function Button({
  type = 'button',
  secondary = false,
  className = '',
  children,
  ...restProps
}) {
  const composeClasses = classNames(
    styles.button,
    secondary ? styles.secondary : styles.primary
  );

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={classNames(composeClasses, className)}
      {...restProps}
    >
      {children}
    </button>
  );
}
