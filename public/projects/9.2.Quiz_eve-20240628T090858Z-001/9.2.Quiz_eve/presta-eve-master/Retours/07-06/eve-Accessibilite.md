# éve - Accessibilité





## Accueil



### Errors

#### Provide alternative text for images - Severity : 10

All images within a page must be given an alternate text equivalent.   Text equivalents for non-text elements communicate the meaning of images to users who cannot perceive the image such as users of screen readers. Proper equivalents provide text which contributes the same level of  understanding to the content of the page as the image itself.  In  instances where the image does not contribute to the understanding of  the content and is purely decorative, it needs to be marked in a way to  indicate its purely decorative purpose.



```html
<svg sodipodi:docname="to_top.svg" id="svg8">
    <g transform="translate(-75.992854,-107.06034)">
        <path inkscape:connector-curvature="0" id="path819" d="m 96.31324,107.36461 -20.040332,43.66998 19.741221,-10.16972 22.134101,9.5715 z" style="fill:var(--app-color-violetblue);fill-opacity:1;stroke:#333;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"></path>
        <ellipse transform="matrix(0.98893983,-0.14831728,0.18991887,0.98179979,0,0)" ry="7.0520911" rx="6.9475183" cy="164.86597" cx="65.640541" id="path831" style="opacity:1;fill:var(--app-color-violetblue);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:218.47689819;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers"></ellipse>
    </g>
</svg>
```



#### Ensure containing elements allow text resize without loss of functionality. - Severity 3

Developers must use relative sizing to ensure that text including form field text and text  containers resize appropriately.  When absolute sizing is used to size  and position elements on the page, content and other elements do not  scale correctly or scale at all when the text size is adjusted.  Users  with low vision and users with cognitive impairments benefit from  increased text size and space between elements.

Developers must ensure that text can be resized up to 200% without assistive technology.

On mobile platforms with limited screen space browsers offer pinch  zoom features allowing users to enlarge or shrink the page to read text. Developers should not disable these features to allow low vision users  to use the feature to enlarge text.



```html
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui, shrink-to-fit=no" name="viewport">
```





#### Ensure the language of a document is set

Developers should define the natural language of a document to ensure  that screen readers and other user agents understand the language the  document is to be interpreted in.  Specifically, when a document  contains multiple inline language choices, screen readers and other  assistive technology types must know what the default language type is  to ensure they can appropriately switch between languages.  Per the HTML 4.01 recommendation, language declarations should be made  in accordance with IETF RFC 1766.

Always declare the default language for text in the page using attributes on the html tag. 

- Do NOT use the meta element with the content attribute set to Content-Language.
- Use language attributes rather than HTTP to declare the default  language for 'text processing' (ie. when language needs to be known for  things such as font choice, styling, spell-checking, hyphentation, quote mark styling, etc.). 
- Do not declare the default language of a document in the body element, use the html element. 
- Where a document contains content aimed at speakers of more  than one language, decide whether you want to declare one language in  the html tag, or leave the languages undefined until later. 
- Where a document contains content aimed at speakers of more than one language, try to divide the document linguistically at the highest  possible level, and declare the appropriate language for each of those  divisions. 
- For HTML use the lang attribute only, for XHTML 1.0 served as  text/html use the lang and xml:lang attributes, and for XHTML served as  XML use the xml:lang attribute only. 



## Mage

pareil que Accueil





## Evaluation

mêmes que pour Accueil et :

#### Provide a valid label for form fields - Severity : 10

When on-screen  labels are present, they must be programmatically associated with form  fields. When on-screen labels are not present, form fields must be given an accessible label.

When form fields do not have a programmatic (accessible) label,  assistive technologies may incorrectly render the label or provide no  label at all to users. When labels are not present or are incorrect,  users of assistive technologies may not be able to complete a form.

The HTML5 specification has a new form field attribute called `placeholder`. This represents a label or hint, such as a word or short phrase, that  is assigned to a form field such as an input field. The label or hint  appears within the form field and goes away when users start typing.  When the `placeholder` attribute is used, the label or hint  may not be detected by assistive technologies. Therefore, developers  should provide off-screen text in the `label` element of the form field or provide a `title`

```html
<label class="radio-container" for="q1-singularite">
    <input type="radio" name="q1-singularite" value="1" class="value-one-two" />
    <span>1</span>
</label>
<label class="radio-container" for="q1-singularite">
    <input type="radio" name="q1-singularite" value="2" class="value-one-two" />
    <span>2</span>
</label>
<label class="radio-container" for="q1-singularite">
    <input type="radio" name="q1-singularite" value="3" class="value-three-four" />
    <span>3</span>
</label>
<label class="radio-container" for="q1-singularite">
    <input type="radio" name="q1-singularite" value="4" class="value-three-four"/>
    <span>4</span>
</label>
<label class="radio-container" for="q1-singularite">
    <input type="radio" name="q1-singularite" value="5" class="value-five" />
    <span>5</span>
</label>
```





## Ressources



#### Provide alternative text for images

Severity: 10



All images within a page must be given an alternate text equivalent.  Text  equivalents for non-text elements communicate the meaning of images to  users who cannot perceive the image such as users of screen readers.  Proper equivalents provide text which contributes the same level of  understanding to the content of the page as the image itself.  In  instances where the image does not contribute to the understanding of  the content and is purely decorative, it needs to be marked in a way to  indicate its purely decorative purpose.

```html
<svg sodipodi:docname="men-on-right-arrow_orange.svg" inkscape:version="0.92.3 (2405546, 2018-03-11)" id="svg10595" version="1.1" viewbox="0 0 26.81633 28.293964" height="28.293964mm" width="26.81633mm" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" aria-hidden="">
   <defs id="defs10589"></defs>
   <sodipodi:namedview inkscape:window-maximized="1" inkscape:window-y="0" inkscape:window-x="1600" inkscape:window-height="870" inkscape:window-width="1600" showgrid="false" inkscape:current-layer="layer1" inkscape:document-units="mm" inkscape:cy="39.183236" inkscape:cx="-693.60918" inkscape:zoom="0.35" inkscape:pageshadow="2" inkscape:pageopacity="0.0" borderopacity="1.0" bordercolor="#666666" pagecolor="#ffffff" id="base"></sodipodi:namedview>
   <metadata id="metadata10592">
      <rdf:rdf>
         <cc:work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
            <dc:title></dc:title>
         </cc:work>
      </rdf:rdf>
   </metadata>
```

```html
<svg sodipodi:docname="men-on-right-arrow_orange.svg" inkscape:version="0.92.3 (2405546, 2018-03-11)" id="svg10595" version="1.1" viewbox="0 0 26.81633 28.293964" height="28.293964mm" width="26.81633mm" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">
   <defs id="defs10589"></defs>
   <sodipodi:namedview inkscape:window-maximized="1" inkscape:window-y="0" inkscape:window-x="1600" inkscape:window-height="870" inkscape:window-width="1600" showgrid="false" inkscape:current-layer="layer1" inkscape:document-units="mm" inkscape:cy="39.183236" inkscape:cx="-693.60918" inkscape:zoom="0.35" inkscape:pageshadow="2" inkscape:pageopacity="0.0" borderopacity="1.0" bordercolor="#666666" pagecolor="#ffffff" id="base"></sodipodi:namedview>
   <metadata id="metadata10592">
      <rdf:rdf>
         <cc:work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
            <dc:title></dc:title>
         </cc:work>
      </rdf:rdf>
   </metadata>
```

```html
<svg sodipodi:docname="to_top.svg" id="svg8">
   <g transform="translate(-75.992854,-107.06034)">
      <path inkscape:connector-curvature="0" id="path819" d="m 96.31324,107.36461 -20.040332,43.66998 19.741221,-10.16972 22.134101,9.5715 z" style="fill:var(--app-color-violetblue);fill-opacity:1;stroke:#333;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"></path>
      <ellipse transform="matrix(0.98893983,-0.14831728,0.18991887,0.98179979,0,0)" ry="7.0520911" rx="6.9475183" cy="164.86597" cx="65.640541" id="path831" style="opacity:1;fill:var(--app-color-violetblue);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:218.47689819;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:stroke fill markers"></ellipse>
   </g>
</svg>
```





#### Ensure markup documents contain well-formed elements

Severity: 6

Documents that use markup languages must be well-formed.  When documents are not  well-formed user agents and/or assistive technology may not correctly  parse and render the content to users.  Many major user-agents are able  to cope well with "bad" markup, however, to be consistent across all  platforms and browsers well-formed markup must be used. This is  especially important for assistive technology which may or may not be  programmed to perform the same level of "coping" that can be found in  browsers (which are created by multinational corporations) or assistive  technology brands that cost several hundred dollars or more. 

```html
<svg sodipodi:docname="men-on-right-arrow_orange.svg" inkscape:version="0.92.3 (2405546, 2018-03-11)" id="svg10595" version="1.1" viewbox="0 0 26.81633 28.293964" height="28.293964mm" width="26.81633mm" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" aria-hidden="">
   <defs id="defs10589"></defs>
   <sodipodi:namedview inkscape:window-maximized="1" inkscape:window-y="0" inkscape:window-x="1600" inkscape:window-height="870" inkscape:window-width="1600" showgrid="false" inkscape:current-layer="layer1" inkscape:document-units="mm" inkscape:cy="39.183236" inkscape:cx="-693.60918" inkscape:zoom="0.35" inkscape:pageshadow="2" inkscape:pageopacity="0.0" borderopacity="1.0" bordercolor="#666666" pagecolor="#ffffff" id="base"></sodipodi:namedview>
   <metadata id="metadata10592">
      <rdf:rdf>
         <cc:work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
            <dc:title></dc:title>
         </cc:work>
      </rdf:rdf>
   </metadata>
```

```html
<svg sodipodi:docname="men-on-right-arrow_orange.svg" inkscape:version="0.92.3 (2405546, 2018-03-11)" id="svg10595" version="1.1" viewbox="0 0 26.81633 28.293964" height="28.293964mm" width="26.81633mm" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/">
   <defs id="defs10589"></defs>
   <sodipodi:namedview inkscape:window-maximized="1" inkscape:window-y="0" inkscape:window-x="1600" inkscape:window-height="870" inkscape:window-width="1600" showgrid="false" inkscape:current-layer="layer1" inkscape:document-units="mm" inkscape:cy="39.183236" inkscape:cx="-693.60918" inkscape:zoom="0.35" inkscape:pageshadow="2" inkscape:pageopacity="0.0" borderopacity="1.0" bordercolor="#666666" pagecolor="#ffffff" id="base"></sodipodi:namedview>
   <metadata id="metadata10592">
      <rdf:rdf>
         <cc:work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
            <dc:title></dc:title>
         </cc:work>
      </rdf:rdf>
   </metadata>
```

```html
<svg sodipodi:docname="men-on-right-arrow_orange.svg" inkscape:version="0.92.3 (2405546, 2018-03-11)" id="svg10595" version="1.1" viewbox="0 0 26.81633 28.293964" height="28.293964mm" width="26.81633mm" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" aria-hidden="true">
   <defs id="defs10589"></defs>
   <sodipodi:namedview inkscape:window-maximized="1" inkscape:window-y="0" inkscape:window-x="1600" inkscape:window-height="870" inkscape:window-width="1600" showgrid="false" inkscape:current-layer="layer1" inkscape:document-units="mm" inkscape:cy="39.183236" inkscape:cx="-693.60918" inkscape:zoom="0.35" inkscape:pageshadow="2" inkscape:pageopacity="0.0" borderopacity="1.0" bordercolor="#666666" pagecolor="#ffffff" id="base"></sodipodi:namedview>
   <metadata id="metadata10592">
      <rdf:rdf>
         <cc:work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
            <dc:title></dc:title>
         </cc:work>
      </rdf:rdf>
   </metadata>
```

```html
<defs id="defs10589"></defs>
```





## Partenaires

Pareil que les autres

### Provide a valid label for form fields

Severity: 10



When on-screen labels are present, they must be programmatically associated  with form fields. When on-screen labels are not present, form fields  must be given an accessible label.

When form fields do not have a programmatic (accessible) label,  assistive technologies may incorrectly render the label or provide no  label at all to users. When labels are not present or are incorrect,  users of assistive technologies may not be able to complete a form.

The HTML5 specification has a new form field attribute called `placeholder`. This represents a label or hint, such as a word or short phrase, that  is assigned to a form field such as an input field. The label or hint  appears within the form field and goes away when users start typing.  When the `placeholder` attribute is used, the label or hint  may not be detected by assistive technologies. Therefore, developers  should provide off-screen text in the `label` element of the form field or provide a `title`

