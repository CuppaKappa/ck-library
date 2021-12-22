import React from 'react';
import PropTypes from 'prop-types';
import styles from './greeter.module.css';

export const GreeterComponent = ({ text = "faux text" }) => {
    return (
        <div className={styles.greeter}>
            <div className={[styles.greeter__title, styles.announcement].join(' ')}>
                Greeter Title: <span className="text-yellow-600">{text}</span>
            </div>
        </div>
    );
};

GreeterComponent.propTypes = {
    text: PropTypes.string
};
