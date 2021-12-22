import React from 'react';
import styles from './styles.module.css';

export const ExampleComponent = ({ text = "faux text" }) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

export { GreeterComponent } from './greeter';
