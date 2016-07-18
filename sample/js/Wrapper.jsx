/**
 * @ignore
 * Created by daletan on 7/17/16.
 */

'use strict';

const React = require('react');
const ReactIcons = require('./ReactIcons.jsx'); // eslint-disable-line react/require-extension
const Logo = require('../../src/logo-no-reg.svg');
const styles = require('../scss/sample.scss');

const Wrapper = () => {
    return (
        <div>
            <div className={styles.logoWrapper}>
                <Logo className={styles.logo} />
                <span className={styles.logoCopy}>Icons</span>
            </div>
            <ReactIcons />
        </div>
    );
};

module.exports = Wrapper;
