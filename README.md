# JavaScript Alert Web Component
Autonomous open source alert component with RTL support built on Custom Elements and Shadow DOM specifications.

## How to use

### Installation
- Install with `npm`
```
$ npm install zino-alert
```

- Install with `bower`
```
$ bower install zino-alert
```

### Using `zino-alert`
- HTML way
```html
<zino-alert id="alert-1"
    heading="HTML"
    text="Lorem ipsum dolor sit amet."
    type="success"></zino-alert>

<script type="module" src="../zino-alert.js"></script>
```
Alert customizations are possible via `data-*` attributes.

- using the DOM API
```html
<script type="module" src="../zino-alert.js"></script>

<script>
const alert = document.createElement("zino-alert");
alert.heading = "DOM API";
alert.type = "success";
alert.text = "Autonomous WAI-ARIA accessible alert dialog.";
document.body.appendChild(alert);
alert.open();
</script>
```

- using the constructor
```html
<script type="module">
import {ZinoAlert} from "../zino-alert.js";

const alert = new ZinoAlert({
    heading: "Constructor",
    type: "success",
    text: "A web component build on Custom Elements and Shadow DOM APIs.",
    showCancelButton: "true",
    allowEscapeKey: "true"
});
document.body.appendChild(alert);
alert.open();
</script>
```

##### Styling
```css
:root {
  --background-head: #fff;
  --color-head: #FA4251;
  --color-head-active: #FA4251;
  --background-foot: #fff;
  --color-foot: #222;
  --background-odd: #fff;
  --background-even: #fff;
  --color-odd: #333;
  --color-even: #222;
}
zino-grid {
  margin: 20px auto 0;
  width: 100%;
  max-width: 1024px;
}
```

## Options
|Option|Required|Type|Default|Description|
|---|:---:|---|---|---|
|**allowEscapeKey**        |No |Boolean|**true**   |Whether to close the alert when the Escape key is pressed|
|**animation**             |No |Boolean|**true**   |Whether to use an animation when show the alert|
|**backdrop**              |No |Boolean|**true**   |Whether to use a backdrop|
|**background**            |No |String |**#fff**   |The alert's background color|
|**cancelButtonAriaLabel** |No |String |**Cancel** |The cancel button's aria-label attribute|
|**cancelButtonColor**     |No |String |**#aaa**   |The cancel button's background color|
|**cancelButtonText**      |No |String |**Cancel** |The cancel button's text|
|**closeButtonAriaLabel**  |No |String |**Close**  |The close button's aria-label attribute|
|**confirmButtonAriaLabel**|No |String |**OK**     |The confirm button's aria-label attribute|
|**confirmButtonColor**    |No |String |**#3085d6**|The confirm button's background color|
|**confirmButtonText**     |No |String |**OK**     |The confirm button's text|
|**debug**                 |No |Boolean|**false**  |If `true` will log events into console|
|**focusCancel**           |No |Boolean|**false**  |Whether to focus on cancel button when alert show|
|**focusConfirm**          |No |Boolean|**true**   |Whether to focus on confirm button when alert show|
|**footer**                |No |String |**(empty)**|If not empty will show it's content at the alert's footer|
|**header**                |No |String |**(empty)**|If not empty will show it's content at the alert's header|
|**heading**               |No |String |**(empty)**|The alert's heading text|
|**position**              |No |String |**center** |The alert's position. Accepts: top, top-start, top-left, top-end, top-right, center, center-start, center-left, center-end, center-right, bottom, bottom-start, bottom-left, bottom-end, bottom-right|
|**showCancelButton**      |No |Boolean|**false**  |Whether to show the cancel button|
|**showCloseButton**       |No |Boolean|**false**  |Whether to show the close button|
|**showConfirmButton**     |No |Boolean|**true**   |Whether to show the confirm button|
|**text**                  |No |String |**(empty)**|The alert's text|
|**type**                  |Yes|String |**(empty)**|The alert's icon. Accepts: success, error|

## Methods
| Method  | Description |
| ------- | ----------- |
| cancel  | Manually triggers the `cancel.alert` event. |
| close   | Manually closes an alert and triggers the `close.alert` event. | 
| confirm | Manually triggers the `confirm.alert` event. |
| open    | Manually opens an alert and triggers the `open.alert` event. |

```javascript
document.querySelector("zino-alert").open();
```

## Events
| Event         | Description |
| ------------- | ----------- |
| cancel.alert  | This event is fired immediately when the `Cancel` button has been clicked. |
| close.alert   | This event is fired immediately when the `close` instance method has been called. |
| confirm.alert | This event is fired immediately when the `Confirm` button has been clicked. |
| open.alert    | This event is fired immediately when the `open` instance method has been called. |

```javascript
document.querySelector("zino-alert").addEventListener("close.alert", function(event) {
    // do something...    
});
```

## Browser Support
|Polyfill|Edge|IE11+|Chrome 54+|Firefox 63+|Safari 10.1+|Opera 41+|
|---|:---:|:---:|:---:|:---:|:---:|:---:|
|Yes|✓|✓|✓|✓|✓|✓|
|No|✗|✗|✓|✓|✓|✓| 

## License
zino-alert is licensed under the MIT license.

Copyright (c) 2019-2020 Dimitar Ivanov