'use strict';

const ATTRIBUTES = {
    'class': 'className',
    'fill-rule': 'fillRule',
    'fill-opacity': 'fillOpacity',
    'stop-color': 'stopColor'
};

const transformHtmlToJsxAttributes = () => {
    return {
        visitor: {
            JSXAttribute: function (node) {
                if (node.node.name.name in ATTRIBUTES) {
                    node.node.name.name = ATTRIBUTES[node.node.name.name];
                }
            }
        }
    };
};

module.exports = transformHtmlToJsxAttributes;
