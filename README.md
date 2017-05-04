
![](https://cdn.rawgit.com/1stdibs/dibs-vg/master/src/logo-no-reg.svg)

# dibs-vg 
1stdibs's in-house vector graphics. See the full list of SVGs in action [HERE.](http://beautifulcode.1stdibs.com/dibs-vg/)

## Description

Dibs VG are broken up into individual SVG files so you can require them to be inlined in your HTML, or required directly in your client side JS for easy use. Instructions on how to do the latter follow.

We also provide some basic styling and wrapper modules for React and Backbone. 


# Contributing :

Please view the guide on [contributing here](https://github.com/1stdibs/dibs-vg/blob/master/CONTRIBUTING.md).

# Using inline SVG files :

## With REACT / JSX :

### Require Precompiled react component (recommended):

This is our recommended method because you don't have to do any setup to start requiring SVG files. This is particularly important if you plan on running your modules in a node environment (ie. unit tests). Pre-compiled react components are available in any environment that supports JSX. 

React components are compiled and placed in dist/react, and for users who don't code in React we build template strings into the dist/templateString directory. 

Each pre-compiled React component supports a className prop so that you can specify styling. 

```js
const svgComponent = require('dibs-vg/dist/react/account-filled.js');
const stringSvg = require('dibs-vg/dist/templateString/account-filled.es.js');
```

Require these files directly in your modules and use just like you would any React component or string for inserting into pages. Pre-compiled React components accept a className prop so you can apply custom styling. 

### loading with Webpack (not recommended):

You don't have to use pre-compiled modules. If you want to grab the raw SVG files and manipulate them go ahead, or if you want to use webpack to load the SVG files, use the method(s) below.

If you are using Webpack, and want to render your SVG with React we recommend [svg-react-loader](https://github.com/jhamlet/svg-react-loader) which will allow you to require your SVG files direclty in your JS as React components. 

Configuration for svg-react-loader looks like this (see gotcha below, [via their documentation](https://github.com/jhamlet/svg-react-loader)) : 

```js
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

```js
{ test: /\.svg$/, loader: 'babel!svg-react' }
```

will not work if you already have babel configured as a loader in your config. To solve, add ".svg" to the list of extensions to match against, and remove it from that line to end up with something like :

```js
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

Now that that's out of the way, require your icon and let it rip : 

```js
const Icon = require('dibs-vg/src/bell.svg');
// ...
<Icon className={myKlass} />
```

Use it with the icon wraper React component : 
```js
const IconWrapper = require('dibs-vg/js/SvgComponent');
const Icon = require('dibs-vg/src/bell.svg');
// ...
<IconWrapper className="icon-spin" size={25} title={"Weeee! Weeeeeeeee!"}>
    <Icon />
</IconWrapper>
```

## In Backbone :

### Require the precompiled string version directly :

require the string and pass it into the template or append it to the dom using jquery

```js
const stringSvg = require('dibs-vg/dist/templateString/account-filled.es.js');
```
### With webpack:

If you are using Webpack and want to render your SVG with Backbone we recommend using the [html loader](https://www.npmjs.com/package/html-loader) which returns the SVG file as a string, or the [webpack compile templates loader](https://www.npmjs.com/package/webpack-compile-templates) which will transform the SVG file to an underscore template.

```js
var SvgWrapper = require('dibs-vg/js/SvgWrapper.es.js');
const icon = require('!html!dibs-vg/src/bell.svg');

$('.place').append(new SvgWrapper({
    icon : icon,
    className : 'some-thing',
    size : '25',
    title : 'Flerg! I did it!'
}).render().el);
```

## Versioning : 

New icons added to the set will be considered a minor version bump. Changes to existing icons will be a major version.  

## Customize it, style it, resize it : 

Inline SVGs are great, not only because they're more performant, but they're also easier for developers to manipulate. Of course you can scale them infinitely in either direction just by changing some CSS, but having different paths inside of your SVG files also allows you to apply colors or other transformations to individual parts of the SVG. Check out this example : 

![](https://cdn.rawgit.com/1stdibs/dibs-vg/master/readme_imgs/do-not-edit-two-color.svg)

## Gotchas :

A SVG will not be compiled into the `dist` folder properly if the opening `<svg>` tag contains the `xml:space="preserve"` attribute.
