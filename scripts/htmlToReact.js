"use strict";

/**
 * Converts HTML to a react component (string).
 * Returns a promise which resolves with a string to you can write to the file system.
 */

const Xml = require('xml2js');
const attrKey = 'attributes';
const parser = new Xml.Parser({attrkey: attrKey});
const builder = new Xml.Builder({attrkey: attrKey, headless: true});
const deprecatedFileMap = require('./deprecatedFileMap');
const template = (xml, warning = "") => {
    return `const React = require('react');
class Component extends React.Component {
    render() {
        ${warning}return (
            ${xml}
        );
    }
}
module.exports = Component;
`;
};

const deprecationWarning = (fileName) => {
    if (deprecatedFileMap[fileName]) {
        return `if (process.env.NODE_ENV !== 'production') {
            console.warn("dibs-vg | '${fileName}' svg is deprecated. Use '${deprecatedFileMap[fileName]}'. ❤️ Majd");
        }
        `;
    }

    return "";
};

const convertToJsx = (fileName, html) => {
    return new Promise((fulfill, reject) => {
        parser.parseString(html, (err, obj) => {

            if (err) {
                return reject(err);
            }

            const attr = obj.svg[attrKey];
            const openingTagWithClass = `<svg className={ [this.props.className, '${attr.class}'].join(' ')} data-tn={'${fileName}'}`;

            ['version', 'class', 'xmlns', 'xmlns:xlink'].forEach(str => {
                delete attr[str];
            });
            const xml = builder.buildObject(obj);
            const xmlString = xml.replace('<svg ', openingTagWithClass);
            const warningString = deprecationWarning(fileName);
            const templateString = template(xmlString, warningString);
            fulfill(templateString);
            return true;
        });
    });
};

module.exports = convertToJsx;
