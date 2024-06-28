# Labeling Controls 



Provide labels to identify all form controls, including text fields,  checkboxes, radio buttons, and drop-down menus. In most cases, this is  done by using the `<label>` element.

Labels need to describe the purpose of the form control. This section of the tutorial describes how to provide labels that are properly  associated with form controls. Later sections explain how to provide [instructions](https://www.w3.org/WAI/tutorials/forms/instructions/), [validate user input](https://www.w3.org/WAI/tutorials/forms/validation/), and [provide feedback](https://www.w3.org/WAI/tutorials/forms/notifications/) to help users complete your form.

A label and a form control should be associated with each other  either implicitly or explicitly. Web browsers provide the label as a  larger clickable area, for example, to select or activate the control.  It also ensures that assistive technology can refer to the correct label when presenting a form control.



## Associating labels explicitly

Whenever possible, use the `label` element to associate text with form elements explicitly. The `for` attribute of the label must exactly match the `id` of the form control.

Example: 

Code snippet: HTML

```
<label for="firstname">First name:</label>
<input type="text" name="firstname" id="firstname"><br>

<input type="checkbox" name="subscribe" id="subscribe">
<label for="subscribe">Subscribe to newsletter</label>
```



### Hiding label text

A label for a form control helps everyone better understand its  purpose. In some cases, the purpose may be clear enough from the context when the content is rendered visually. The label can be hidden  visually, though it still needs to be provided within the code to  support other forms of presentation and interaction, such as for screen  reader and speech input users. The method used in this tutorial to hide  an element visually but make it available for assistive technologies is  explained in [Note on hiding element](https://www.w3.org/WAI/tutorials/forms/labels/#note-on-hiding-elements).

In the example below, the search field is positioned directly beside  the search button. The purpose of the text input field is evident from  the context in most situations.

#### **Approach 1:** Hiding the label element

In this approach, the `<label>` element is provided  to identify a form control within the code, but it is visually hidden to avoid redundancy for users who can derive the purpose from the visual  cues.

Code snippet: 

```
<label for="search" class="visuallyhidden">Search: </label>
<input type="text" name="search" id="search">
<button type="submit">Search</button>
```



#### **Approach 2:** Using aria-label

The `aria-label` attribute can also be used to identify  form controls. This approach is well supported by screen readers and  other assistive technology, but, unlike the `title` attribute (see below), the information is not conveyed to visual users. The  approach should therefore only be used when the label of the control is  clear from the surrounding content, like the button in the example  below.

Code snippet: 

```
<input type="text" name="search" aria-label="Search">
<button type="submit">Search</button>
```



#### **Approach 3:** Using aria-labelledby

The `aria-labelledby` attribute can also be used to  identify form controls. This approach is well supported by screen  readers and other assistive technology, but, unlike the `title` attribute (see below), the information is not conveyed to visual users. The approach should therefore only be used when the label of the  control is clear from the surrounding content, like the button in the  example below.

The `id` of the element containing the label text is used as the value of the `aria-labelledby` attribute.

Code snippet: 

```
<input type="text" name="search" aria-labelledby="searchbutton">
<button id="searchbutton" type="submit">Search</button>
```



#### **Approach 4:** Using the `title` attribute

The `title` attribute can also be used to identify form  controls. This approach is generally less reliable and not recommended  because some screen readers and assistive technologies do not interpret  the `title` attribute as a replacement for the label element, possibly because the `title` attribute is often used to provide non-essential information. The information of the `title` attribute is shown to visual users as a tool tip when hovering over the form field with the mouse.

Code snippet: 

```
<input title="Search" type="text" name="search">
<button type="submit">Search</button>
```





#### Note on hiding elements

Screen readers and other assistive technology, just as web browsers, hide elements from their users when they are styled using `display: none;` and `visibility: hidden;`.

The common approach used to hide information visually but keep them  available to screen reader and other assistive technology users is to  use CSS that will keep the information technically visible but  practically hidden. For example, presenting the label in a 1-by-1 pixel  area with a 1-pixel margin, as demonstrated with the CSS class `visuallyhidden` (**do not confuse** with CSS `visibility: hidden`) below:

Code snippet: 

```
.visuallyhidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
```

Note that interactive elements are still active when using this code, so it is not suitable to hide other parts of forms but the labels.



## Associating labels implicitly

In some situations, form controls cannot be labeled explicitly. For example, a content author might not know the `id` of a form field generated by a script, or that script might not add an `id` at all. In this case, the `label` element is used as a container for both the form control and the label  text, so that the two are associated implicitly. Generally, explicit  labels are better supported by assistive technology.

Code snippet: HTML

```
<label>
  First name:
  <input type="text" name="firstname">
</label>
<br>
<label>
  <input type="checkbox" name="subscribe">
  Subscribe to newsletter
</label>
```



## Labeling buttons

The label of a `<button>` element is set inside the  element and can include markup. This allows more advanced accessibility  hints to be included, like marking up language change. When using the `<input>` element to create buttons, the label is set in the `value` attribute of the element.

Code snippet: HTML

```
<button type="submit">Submit</button>
<button type="button">Cancel</button>

<input type="submit" value="Submit">
<input type="button" value="Cancel">
```

**Note:** If the image button (`<input type="image">`) is used, the label is set in the `alt` attribute, for example: `<input type="image" src="searchbutton.png" alt="Search">`. See [Functional Images](https://www.w3.org/WAI/tutorials/images/functional/#image-used-in-a-button) for more information on how to describe images in buttons.



## Visual position of label text

In left-to-right languages, it is customary to visually position  labels to the right of radio buttons and checkboxes, and to the left or  directly above other form fields. Maintaining this practice increases  predictability and understandability of your form for all users.

In general, placing labels above the form fields helps reduce  horizontal scrolling for people with low vision and mobile device users. However, the usefulness of this approach depends on other design  aspects, such as the proximity of other nearby form fields and content,  and needs to be assessed individually. The aim should be to maintain a  close and distinct visual relationship between the label and the form  control.