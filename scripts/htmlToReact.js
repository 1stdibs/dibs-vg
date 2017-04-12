"use strict";

/**
 * Converts HTML to a react component (string).
 * Returns a promise which resolves with a string to you can write to the file system.
 */

const Xml = require('xml2js');
const attrKey = 'attributes';
const parser = new Xml.Parser({attrkey: attrKey});
const builder = new Xml.Builder({attrkey: attrKey, headless: true});
const template = xml => {
    return `const React = require('react');
class Component extends React.Component {
    render() {
        return (
            ${xml}
        );
    }
}
module.exports = Component;
`;
};

const convertToJsx = (html) => {
    return new Promise((fulfill, reject) => {
        parser.parseString(html, (err, obj) => {

            if (err) {
                return reject(err);
            }

            const attr = obj.svg[attrKey];
            const openingTagWithClass = `<svg className={ [this.props.className, '${attr.class}'].join(' ')} `;

            ['version', 'class', 'xmlns', 'xmlns:xlink'].forEach(str => {
                delete attr[str];
            });

            const xml = builder.buildObject(obj);
            fulfill(template(xml.replace('<svg ', openingTagWithClass)));
            return true;
        });
    });
};

module.exports = convertToJsx;
