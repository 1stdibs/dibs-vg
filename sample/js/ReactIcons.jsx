"use strict";

const SvgComponent = require('../../js/SvgComponent.jsx'); // eslint-disable-line react/require-extension
const iconList = require('../../list.json');
const React = require('react');
const styles = require('../scss/sample.scss');

/**
 * IconsContainer renders each of the icons using the SvgComponent for the react demo sample page.
 */
class IconContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        };

        this._matchIcons = this._matchIcons.bind(this);
    }
    _matchIcons(event) {
        const { value: searchValue } = event.currentTarget;

        this.setState({ searchValue });
    }
    _renderIcons() {
        if (Array.isArray(this.props.icons)) {
            return this.props.icons.map(icon => {
                // Note* here we require the SVG file itself.
                // See dibs-vg webpack config for info on how this works.
                const Icon = require('../../src/' + icon);
                const searchVal = icon.split('.')[0];
                if (searchVal.indexOf(this.state.searchValue) === -1) {
                    return null;
                }
                return (
                    <div key={icon} className={styles.container}>
                        <SvgComponent className={styles.svg} display={''}>
                            <Icon />
                        </SvgComponent>
                        <span className={styles.name}>{searchVal}</span>
                    </div>
                );
            });
        }
        return <div>No icons to render</div>;
    }
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.headerWrapper}>
                    <h1 className={styles.header}>These icons are all rendered by React:</h1>
                    <input type="text" className={styles.search} placeholder="Find icon" onChange={this._matchIcons} />
                </div>
                {this._renderIcons()}
            </div>
        );
    }
};

IconContainer.defaultProps = {
    icons: iconList
};

IconContainer.propTypes = {
    icons: React.PropTypes.array
};

module.exports = IconContainer;
