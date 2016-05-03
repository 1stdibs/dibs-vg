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
            const Icon = require('../../src/' + icon);
            return (
                <span className="icon-container">
                    <SvgComponent key={idx} size={25}>
                        <Icon />
                    </SvgComponent>
                </span>
            );
        });
    }
    render() {
        return (
            <div>
                <h1>These icons are all rendered by React :</h1>
            {this.allIcons()}
            </div>
        );
    }
};

module.exports = IconContainer;
