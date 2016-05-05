![](https://cdn.rawgit.com/1stdibs/dibs-vg/master/src/logo-no-reg.svg)

# dibs-vg 
1stdibs's in-house vector graphics.

## Description

Dibs VG are broken up into individual SVG files so you can require them to be inlined in your HTML, or required directly in your client side JS for easy use. Instructions on how to do the latter follow.

We also provide some basic styling and wrapper modules for React and Backbone. 


## Versioning : 

New icons added to the set will be considered a minor version bump. Changes to existing icons will be a major version.  

## Customize it, style it, resize it : 

Inline SVGs are great, not only because they're more performant, but they're also easier for developers to manipulate. Of course you can scale them infinitely in either direction just by changing some CSS, but having different paths inside of your SVG files also allows you to apply colors or other transformations to individual parts of the SVG. Check out this example : 

![](https://cdn.rawgit.com/1stdibs/dibs-vg/master/readme_imgs/do-not-edit-two-color.svg)

## With React / JSX : 

If you are using Webpack, and want to render your SVG with React we recomment [svg-react-loader](https://github.com/jhamlet/svg-react-loader) which will allow you to require your SVG files direclty in your JS as React components. 

Configuration for svg-react-loader looks like this (see gotcha below, [via their documentation](https://github.com/jhamlet/svg-react-loader)) : 

```javascript
module.exports = {
    loaders: [
        { test: /\.svg$/, loader: 'babel!svg-react' }
    ],
    resolve: {
        alias: {
            react-dom: __dirname + '/node_modules/react'
        }
    }
}
```

One gotcha I ran into while implementing is that svg-react-loader requires that you also use babel loader, so this line : 

```javascript
{ test: /\.svg$/, loader: 'babel!svg-react' }
```

will not work if you already have babel configured as a loader in your config. To solve, add ".svg" to the list of extensions to match against, and remove it from that line to end up with something like :

```javascript
module.exports = {
    loaders: [
        { test: /\.(js|jsx|svg)$/, loader: 'babel' },
        { test: /\.svg$/, loader: 'svg-react' }
    ],
    resolve: {
        alias: {
            react-dom: __dirname + '/node_modules/react'
        }
    }
}
```

Now that that's out of the way, require your icon and the icon wrapper then let it rip : 

```javascript
const IconWrapper = require('dibs-vg/js/SvgComponent');
const Icon = require('dibs-vg/src/bell');
// ...
<IconWrapper className="icon-spin" size={25} title={"Weeee! Weeeeeeeee!"}>
    <Icon />
</IconWrapper>
```

## In Backbone : 

If you are using Webpack and want to render your SVG with Backbone we recomment using the [html loader](https://www.npmjs.com/package/html-loader) which returns the SVG file as a string, or the [webpack compile templates loader](https://www.npmjs.com/package/webpack-compile-templates) which will transform the SVG file to an underscore template.

```javascript
var SvgWrapper = require('dibs-vg/js/SvgWrapper.es.js');
const icon = require('!html!dibs-vg/src/bell.svg');

$('.place').append(new SvgWrapper({
    icon : icon,
    className : 'some-thing',
    size : '25',
    title : 'Flerg! I did it!'
}).render().el);
```
