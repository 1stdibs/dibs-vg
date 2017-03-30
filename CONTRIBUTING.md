# Contributing

## Instructions on creating SVG files via Illustrator

1. Start with a document of 250 X 250 px, and use 9px stroke in your icon.

2. Make sure the icon is always sized to the edges of the document.

3. The color should always be #000000 black unless it has to have more than one color.

3. When you're done, create outlines, and use pathfinder to merge it into one shape. But, I would urge you to drag a copy of the original stroked icon to the side of the artboard, so that if you need to go back you can edit it!

4. Save this as an illustrator file. Then open up a new file, also 250 X 250 px.

5. Copy and paste the outlined/merged icon into the new document, and save that as an SVG. (the reason for copying and pasting it as a new file is because something weird seems to happen with the original document size unless you do this!) 

5. When saving as an SVG, you can follow these settings- but you'll only have to do this once since Illustrator will default to it next time around.
  1. Save an Illustrator copy (.ai extension)
  2. "Save As..." -> "SVG" dropdown
  3. A "SVG Options" window should pop up. The following are the SVG export settings (if a checkbox is not mentioned, leave unchecked)
      - SVG Profiles: 1.1
          - Type: SVG
          - Subsetting: Only Glyphs Used
      - Image Location: Link
      - "More Options" button
          - CSS Properties: Style Elements
          - Decimal Places: 1 (This reduces SVG number output from a decimal number like 47.644043 down to just 47.6 which will obviously reduce the SVG size)
          - Encoding: Unicode (UTF-8)
          - Checkbox:
              - Output fewer <tspan> elements
              - Use <textPath> element for Text on Path
              - TODO: look into new "responsive" option

6. Handing the icon over to dev- Whichever dev you're working with on the project should be adding the new icon file to the dev icon library. If you aren't working with a particular dev on the project, then you can always ask Dale or Ron to add it. 

7. Saving the icon into our Designer Library - I've created a new place for our icons in Dropbox instead of Google Drive, since we've switched over to Dropbox within the last year. 
[https://www.dropbox.com/sh/9k28zalqh2j5xpo/AAA_oVJPDXzqDjryTlV8RRC4a?dl=0](https://www.dropbox.com/sh/9k28zalqh2j5xpo/AAA_oVJPDXzqDjryTlV8RRC4a?dl=0)
This folder includes a master illustrator file, and a folder for each icon individually. If you do create a new icon, please add it into both the individual folder, and also into the master illustrator file in alphabetical order. 


## For developers

1. Double check there none of the elemts are using a "stroke" property, and that there aren't extra elements.

2. Name your file and add it to the /src directory within dibs-vg : [https://github.com/1stdibs/dibs-vg/tree/master/src](https://github.com/1stdibs/dibs-vg/tree/master/src). By convention file names are all lower case, hyphen delimited. 

3. Add class names to your icon using the format "dibsvg-svg dibsvg-{FILE_NAME}", where FILE_NAME is the name of the file you created.

4. Clean up the SVG file by removing other auto generated properties on the SVG element. The only allowed properties at this time are : class, viewBox, xmlns, xmlns:xlink, and version. 
	- The xmlns and xmlns:xlink attributes are for XML name spacning and aren't strictly necessary, but they are useful for displaying SVGs outside of the context of HTML documents, so we like to include them. [Reference](http://stackoverflow.com/a/18468348/4002508), [Explanation](https://developer.mozilla.org/en/docs/Web/SVG/Namespaces_Crash_Course)
	- Version is not required, and is ignored by browsers but we currently don't force developers to delete it. 

5. Remove any classes or IDs illustrator added to the SVG elements. For example, sometimes you will see markup that looks like this : 
```
<svg ...>
    <path class="AUTOMATICALLY-GENERATED-CLASS" d="..." />
    <circle id="LAYER-1" />
</svg>
```
6. Add any required classes to sub-paths that you want to color differently. For example :
```
<svg ...>
    <path class="i-will-make-this-green-with-css" d="..." />
    <circle class="i-will-make-this-red-with-css" />
</svg>
```
7. Run the command "yarn build" and create your PR to be merged (don't worry if you forget, it's also run as a pre-publish step).

8. Once your changes are merged new SVGs should be published to the public NPM registry with a minor version. 

9. You can include your new SVG file in the dibs-vg display library by merging your changes to the branch "gh-pages." Check out that page here : [http://beautifulcode.1stdibs.com/dibs-vg/](http://beautifulcode.1stdibs.com/dibs-vg/)
