/**
 * @ignore
 * Created by daletan on 7/17/16.
 */

'use strict';

const React = require('react');
const ReactIcons = require('./ReactIcons.jsx'); // eslint-disable-line react/require-extension
const Logo = require('../../src/logo-no-reg.svg');
const styles = require('../scss/sample.scss');
const contributing = require('./contributing');
function contributingMarkup() {
    return {__html: contributing};
}


class Wrapper extends React.Component {

    constructor() {
        super();
        this.showContributing = this.showContributing.bind(this);
    }

    showContributing() {
        this.contributing.style.display = 'block';
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.head}>
                    <div className={styles.logoWrapper}>
                        <Logo className={styles.logo} />
                        <span className={styles.logoCopy}>&#183; Icons</span>
                    </div>
                    <div className={styles.nav}>
                        <a
                            className={styles.link}
                            onClick={this.showContributing}
                            href="#Contributing"
                        >
                            View Guide To Contributing
                        </a>
                    </div>
                </div>
                <ReactIcons />
                <div
                    id="Contributing"
                    style={{display: "none"}}
                    ref={ele => { this.contributing = ele; }}
                    dangerouslySetInnerHTML={contributingMarkup()}
                >
                </div>
            </div>
        );
    }
};

module.exports = Wrapper;
