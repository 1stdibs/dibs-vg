"use strict";


const SvgComponent = require('../../js/SvgComponent.jsx');
const iconList = require('../../list.json');
const React = require('react');

/**
 * IconsContainer renders each of the icons using the SvgComponent for the react demo sample page.
 */
class IconContainer extends React.Component {
    allIcons() {
        return iconList.map((icon, idx) => {
            // Note* here we require the SVG file itself. See dibs-vg webpack config for info on how this works.
            const Icon = require('../../src/' + icon);
            return (
                <Icon />
            );
        });
    }
    render() {
        return (
            <div>
                <h1>These icons are all rendered by React :</h1>
                <hr />
                {this.allIcons()}
            </div>
        );
    }
};

module.exports = IconContainer;
