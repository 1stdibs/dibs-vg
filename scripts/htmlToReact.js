"use strict";

/**
 * Converts HTML to a react component (string).
 * Returns a promise which resolves with a string to you can write to the file system.
 */

const camelCase = require('camelcase');
const Xml = require('xml2js');
const attrKey = 'attributes';
const styleKey = 'style';
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

const convertStyleStringToObjectString = node => {
    const attributes = node[attrKey];
    const styleAttr = attributes[styleKey];
    if (styleAttr && typeof styleAttr === 'string') {
        const styleStrings = styleAttr.split(';').filter(Boolean);
        const keysAndValues = styleStrings
            .map(styleString => {
                let [key, rawValue] = styleString.split(':');
                key = camelCase(key.trim());
                rawValue = rawValue.trim();

                let value;
                if (isNaN(rawValue)) {
                    value = `'${rawValue}'`;
                } else {
                    value = rawValue;
                }

                return `${key}: ${value}`;
            })
            .join(',');
        attributes[styleKey] = `{{${keysAndValues}}}`;
    }
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

            // this will need to be made recursive if styles are ever added to children's children
            const children = obj.svg.path;
            if (Array.isArray(children)) {
                children.forEach(child => convertStyleStringToObjectString(child));
            }

            const xml = builder.buildObject(obj);
            const xmlString = xml
                .replace('"{{', '{{') // remove quotes surrounding style objects, example:
                .replace('}}"', '}}') // style="{{ opacity: .25 }}" => style={{ opacity: .25 }}
                .replace('<svg ', openingTagWithClass);

            const warningString = deprecationWarning(fileName);
            const templateString = template(xmlString, warningString);
            fulfill(templateString);
            return true;
        });
    });
};

module.exports = convertToJsx;
