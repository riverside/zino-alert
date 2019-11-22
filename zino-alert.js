"use strict";

const template = document.createElement("template");

template.innerHTML = `
    <style>
    .alert-backdrop:not(.alert-backdrop-off) {
        background-color: rgba(0, 0, 0, 0.25);
        bottom: 0;
        display: none;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        left: 0;
        padding: .625em;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 9998;    
    }
    .alert-backdrop.active {
        display: flex;
    }
    .alert-backdrop-off {
    
    }
    .alert-backdrop.alert-top {
        align-items: flex-start;
    }
    .alert-backdrop.alert-top-start,
    .alert-backdrop.alert-top-left {
        align-items: flex-start;
        justify-content: flex-start;
    }
    .alert-backdrop.alert-top-end,
    .alert-backdrop.alert-top-right {
        align-items: flex-start;
        justify-content: flex-end;
    }
    .alert-backdrop.alert-center {
        align-items: center;
    }
    .alert-backdrop.alert-center-start,
    .alert-backdrop.alert-center-left {
        align-items: center;
        justify-content: flex-start;
    }
    .alert-backdrop.alert-center-end,
    .alert-backdrop.alert-center-right {
        align-items: center;
        justify-content: flex-end;
    }
    .alert-backdrop.alert-bottom {
        align-items: flex-end;
    }
    .alert-backdrop.alert-bottom-start,
    .alert-backdrop.alert-bottom-left {
        align-items: flex-end;
        justify-content: flex-start;
    }
    .alert-backdrop.alert-bottom-end,
    .alert-backdrop.alert-bottom-right {
        align-items: flex-end;
        justify-content: flex-end;
    }
    .alert {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
        display: none;
        font-family: "Open Sans", Helvetica, sans-serif;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        position: relative;
        padding: 1.25rem;
        width: 32rem;
        z-index: 9999;
    }
    .alert.active {
        display: flex;
    }
    .alert-icon {
        margin: 0 auto;
        height: 88px;
        width: 88px;
        position: relative;
        text-align: center;
        border-radius: 50%;
        border-style: solid;
        border-width: .25em;
    }
    .alert.success .alert-icon {
        border-color: rgba(165,220,134,.3);
    }  
    .alert.success .alert-icon:after {
        content: "";
        display: block;
        color: #a5dc86;
        position: absolute;
        top: 20px;
        left: 15px;
        width: 60%;
        height: 30%;
        border-radius: .125em;
        border-bottom: solid 5px currentColor;
        border-left: solid 5px currentColor;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    .alert.error .alert-icon {
        border-color: #f27474;
    }
    .alert.error .alert-icon:before {
        content: "";
        display: block;
        position: absolute;
        width: 70%;
        height: .25em;
        left: 15%;
        top: calc((100% - .25em)/2);
        border-radius: .125em;
        background-color: #f27474;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    .alert.error .alert-icon:after {
        content: "";
        display: block;
        position: absolute;
        width: .25em;
        height: 70%;
        top: 15%;
        left: calc((100% - .25em)/2);
        border-radius: .125em;
        background-color: #f27474;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    .alert-heading {
        color: #595959;
        font-size: 30px;
        font-weight: 600;
        margin: 15px 0 0;
        text-align: center;
    }
    .alert-text {
        color: #545454;
        font-size: 18px;
        font-weight: 400;
        margin: 15px 0 0;
        text-align: center;
    }
    .alert-actions {
        margin: 20px 0 0;
        text-align: center;
    }
    .alert-header {
        border-bottom: solid 1px #eee;
        color: #545454;
        font-size: 1em;
        margin: 0 0 1.25em;
        padding: 0 0 1em;
        text-align: center;
    }
    .alert-footer {
        border-top: solid 1px #eee;
        color: #545454;
        font-size: 1em;
        margin: 1.25em 0 0;
        padding: 1em 0 0;
        text-align: center;
    }
    .alert-button {
        border: none;
        border-radius: .25em;
        cursor: pointer;
        font-size: 1.0625em;
        padding: .625em 2em;
    }
    .alert-button + .alert-button {
        margin: 0 0 0 5px;
    }
    .alert-confirm {
        background-color: #3085d6;
        color: #fff;
    }
    .alert-confirm:not(:disabled):hover {
        background-color: #236BB0;
    }
    .alert-confirm:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    .alert-cancel {
        background-color: #aaa;
        color: #fff;
    }
    .alert-cancel:not(:disabled):hover {
        background-color: #909090;
    }
    .alert-cancel:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
    .alert-close {
        background-color: transparent;
        border: none;
        border-radius: 0;
        color: rgba(0,0,0,.6);
        text-align: left;
        padding: 0;
        margin-top: 0;
        margin-left: 0;
        position: absolute;
        right: 15px;
        top: 15px;
        height: 21px;
        width: 21px;
        -webkit-appearance: none;
    }
    .alert-close:before {
        content: '';
        position: absolute;
        top: 10px;
        width: 21px;
        height: 1px;
        background-color: currentColor;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    .alert-close:after {
        content: '';
        position: absolute;
        top: 10px;
        width: 21px;
        height: 1px;
        background-color: currentColor;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .alert-close:hover {
        color: rgba(0,0,0,.8);
    }
    .hidden {
        display: none;
    }
    .alert-show {
        -webkit-animation: alert-show .3s;
        animation: alert-show .3s;
    }
    .alert-hide {
        -webkit-animation: alert-hide .15s;
        animation: alert-hide .15s;
    }
    @-webkit-keyframes alert-show {
        0% {
            transform: scale(.7);
        }
        45% {
            transform: scale(1.05);
        }
        80% {
            transform: scale(.95);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes alert-show {
        0% {
            transform: scale(.7);
        }
        45% {
            transform: scale(1.05);
        }
        80% {
            transform: scale(.95);
        }
        100% {
            transform: scale(1);
        }
    }
    @-webkit-keyframes alert-hide {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(.5);
            opacity: 0;
        }
    }
    @keyframes alert-hide {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(.5);
            opacity: 0;
        }
    }
    </style>
    <div class="alert-backdrop">
        <div tabindex="0"></div>
        <div class="alert" role="dialog" aria-modal="true" aria-labelledby="alert-heading" aria-describedby="alert-text">
            <button type="button" class="alert-button alert-close hidden" tabindex="3" aria-label="Close" hidden></button>
            <div class="alert-header hidden"></div>
            <div class="alert-icon"></div>
            <div class="alert-heading" id="alert-heading"></div>
            <div class="alert-text" id="alert-text"></div>
            <div class="alert-actions">
                <button type="button" class="alert-button alert-confirm" aria-label="OK" tabindex="1">OK</button>
                <button type="button" class="alert-button alert-cancel hidden" aria-label="Cancel" tabindex="2" hidden>Cancel</button>
            </div>
            <div class="alert-footer hidden"></div>
        </div>
        <div tabindex="0"></div>
    </div>`;

class ZinoAlert extends HTMLElement {
    constructor(options={}) {
        super();

        const shadowRoot = this.attachShadow({
            mode: "open"
        });

        shadowRoot.appendChild(template.content.cloneNode(true));

        for (const [key, value] of Object.entries(options)) {
            if (key in this) {
                this[key] = value;
            }
        }
    }
    static get observedAttributes() {
        return [
            "allow-escape-key",
            "animation",
            "backdrop",
            "background",
            "cancel-button-aria-label",
            "cancel-button-color",
            "cancel-button-text",
            "close-button-aria-label",
            "confirm-button-aria-label",
            "confirm-button-color",
            "confirm-button-text",
            "focus-cancel",
            "focus-confirm",
            "footer",
            "header",
            "heading",
            "position",
            "show-cancel-button",
            "show-close-button",
            "show-confirm-button",
            "text",
            "type"
        ];
    }
    static get positionNames() {
        return [
            "top",
            "top-start",
            "top-left",
            "top-end",
            "top-right",
            "center",
            "center-start",
            "center-left",
            "center-end",
            "center-right",
            "bottom",
            "bottom-start",
            "bottom-left",
            "bottom-end",
            "bottom-right"
        ];
    }
    connectedCallback() {
        this.$alert    = this.shadowRoot.querySelector(".alert");
        this.$backdrop = this.shadowRoot.querySelector(".alert-backdrop");
        this.$confirm  = this.$alert.querySelector(".alert-confirm");
        this.$cancel   = this.$alert.querySelector(".alert-cancel");
        this.$close    = this.$alert.querySelector(".alert-close");

        this.cancel   = this.cancel.bind(this);
        this.close    = this.close.bind(this);
        this.confirm  = this.confirm.bind(this);
        this.onEscape = this.onEscape.bind(this);
        this.open     = this.open.bind(this);

        this.$confirm.addEventListener("click", this.confirm);
        this.$cancel.addEventListener("click", this.cancel);
        this.$close.addEventListener("click", this.close);
    }
    disconnectedCallback() {
        if (this.allowEscapeKey === "true") {
            document.removeEventListener("keyup", this.onEscape);
        }
        this.$confirm.removeEventListener("click", this.confirm);
        this.$cancel.removeEventListener("click", this.cancel);
        this.$close.removeEventListener("click", this.close);
    }
    adoptedCallback() {

    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
        case "allow-escape-key":
            if (newVal === "true" && (oldVal === null || oldVal === "false")) {
                document.addEventListener("keyup", this.onEscape.bind(this));
            } else if (oldVal === "true" && newVal === "false") {
                document.removeEventListener("keyup", this.onEscape.bind(this));
            }
            break;
        case "animation":
            this.$alert = this.shadowRoot.querySelector(".alert");
            if (newVal === "true") {
                this.$alert.classList.add("alert-show");
            } else if (newVal === "false") {
                this.$alert.classList.remove("alert-show");
            }
            break;
        case "backdrop":
            this.$backdrop = this.shadowRoot.querySelector(".alert-backdrop");
            if (newVal === "true") {
                this.$backdrop.classList.remove("alert-backdrop-off");
            } else if (newVal === "false") {
                this.$backdrop.classList.add("alert-backdrop-off");
            }
            break;
        case "background":
            this.shadowRoot.querySelector(".alert").style.backgroundColor = newVal;
            break;
        case "cancel-button-aria-label":
            this.shadowRoot.querySelector(".alert-cancel").setAttribute("aria-label", newVal);
            break;
        case "cancel-button-color":
            this.shadowRoot.querySelector(".alert-cancel").style.backgroundColor = newVal;
            break;
        case "cancel-button-text":
            this.shadowRoot.querySelector(".alert-cancel").innerHTML = newVal;
            break;
        case "close-button-aria-label":
            this.shadowRoot.querySelector(".alert-close").setAttribute("aria-label", newVal);
            break;
        case "confirm-button-aria-label":
            this.shadowRoot.querySelector(".alert-confirm").setAttribute("aria-label", newVal);
            break;
        case "confirm-button-color":
            this.shadowRoot.querySelector(".alert-confirm").style.backgroundColor = newVal;
            break;
        case "confirm-button-text":
            this.shadowRoot.querySelector(".alert-confirm").innerHTML = newVal;
            break;
        case "focus-cancel":
            this.$cancel = this.shadowRoot.querySelector(".alert-cancel");
            if (newVal === "true") {
                this.$cancel.setAttribute("autofocus", "");
            } else if (newVal === "false") {
                this.$cancel.removeAttribute("autofocus");
            }
            break;
        case "focus-confirm":
            this.$confirm = this.shadowRoot.querySelector(".alert-confirm");
            if (newVal === "true") {
                this.$confirm.setAttribute("autofocus", "");
            } else if (newVal === "false") {
                this.$confirm.removeAttribute("autofocus");
            }
            break;
        case "footer":
            this.$footer = this.shadowRoot.querySelector(".alert-footer");
            if (newVal !== null && newVal.trim() !== "") {
                this.$footer.innerHTML = newVal;
                this.$footer.classList.remove("hidden");
            } else {
                this.$footer.classList.add("hidden");
                this.$footer.innerHTML = "";
            }
            break;
        case "header":
            this.$header = this.shadowRoot.querySelector(".alert-header");
            if (newVal !== null && newVal.trim() !== "") {
                this.$header.innerHTML = newVal;
                this.$header.classList.remove("hidden");
            } else {
                this.$header.classList.add("hidden");
                this.$header.innerHTML = "";
            }
            break;
        case "heading":
            this.shadowRoot.querySelector(".alert-heading").innerHTML = newVal;
            break;
        case "position":
            if (ZinoAlert.positionNames.includes(newVal)) {
                this.$backdrop = this.shadowRoot.querySelector(".alert-backdrop");
                this.$backdrop.classList.remove("alert-" + oldVal);
                this.$backdrop.classList.add("alert-" + newVal);
            }
            break;
        case "show-cancel-button":
            this.$cancel = this.shadowRoot.querySelector(".alert-cancel");
            if (newVal === "true") {
                this.$cancel.classList.remove("hidden");
                this.$cancel.removeAttribute("hidden");
            } else if (newVal === "false") {
                this.$cancel.classList.add("hidden");
                this.$cancel.setAttribute("hidden", "");
            }
            break;
        case "show-close-button":
            this.$close = this.shadowRoot.querySelector(".alert-close");
            if (newVal === "true") {
                this.$close.classList.remove("hidden");
                this.$close.removeAttribute("hidden");
            } else if (newVal === "false") {
                this.$close.classList.add("hidden");
                this.$close.setAttribute("hidden", "");
            }
            break;
        case "show-confirm-button":
            this.$confirm = this.shadowRoot.querySelector(".alert-confirm");
            if (newVal === "true") {
                this.$confirm.classList.remove("hidden");
                this.$confirm.removeAttribute("hidden");
            } else if (newVal === "false") {
                this.$confirm.classList.add("hidden");
                this.$confirm.setAttribute("hidden", "");
            }
            break;
        case "text":
            this.shadowRoot.querySelector(".alert-text").innerHTML = newVal;
            break;
        case "type":
            this.$alert = this.shadowRoot.querySelector(".alert");
            this.$alert.classList.remove(oldVal);
            this.$alert.classList.add(newVal);
            break;
        }
    }
    get allowEscapeKey() {
        console.log('allowEscapeKey:get');
        return this.getAttribute("allow-escape-key") || "true";
    }
    set allowEscapeKey(val) {
        console.log('allowEscapeKey:set');
        this.setAttribute("allow-escape-key", val);
    }
    get animation() {
        console.log('animation:get');
        return this.getAttribute("animation") || "true";
    }
    set animation(val) {
        console.log('animation:set');
        this.setAttribute("animation", val);
    }
    get backdrop() {
        console.log('backdrop:get');
        return this.getAttribute("backdrop") || "true";
    }
    set backdrop(val) {
        console.log('backdrop:set');
        this.setAttribute("backdrop", val);
    }
    get background() {
        console.log('background:get');
        return this.getAttribute("background");
    }
    set background(val) {
        console.log('background:set');
        this.setAttribute("background", val);
    }
    get cancelButtonAriaLabel() {
        console.log('cancelButtonAriaLabel:get');
        return this.getAttribute("cancel-button-aria-label");
    }
    set cancelButtonAriaLabel(val) {
        console.log('cancelButtonAriaLabel:set');
        this.setAttribute("cancel-button-aria-label", val);
    }
    get cancelButtonColor() {
        console.log('cancelButtonColor:get');
        return this.getAttribute("cancel-button-color");
    }
    set cancelButtonColor(val) {
        console.log('cancelButtonColor:set');
        this.setAttribute("cancel-button-color", val);
    }
    get cancelButtonText() {
        console.log('cancelButtonText:get');
        return this.getAttribute("cancel-button-text");
    }
    set cancelButtonText(val) {
        console.log('cancelButtonText:set');
        this.setAttribute("cancel-button-text", val);
    }
    get closeButtonAriaLabel() {
        console.log('closeButtonAriaLabel:get');
        return this.getAttribute("close-button-aria-label");
    }
    set closeButtonAriaLabel(val) {
        console.log('closeButtonAriaLabel:set');
        this.setAttribute("close-button-aria-label", val);
    }
    get confirmButtonAriaLabel() {
        console.log('confirmButtonAriaLabel:get');
        return this.getAttribute("confirm-button-aria-label");
    }
    set confirmButtonAriaLabel(val) {
        console.log('confirmButtonAriaLabel:set');
        this.setAttribute("confirm-button-aria-label", val);
    }
    get confirmButtonColor() {
        console.log('confirmButtonColor:get');
        return this.getAttribute("confirm-button-color");
    }
    set confirmButtonColor(val) {
        console.log('confirmButtonColor:set');
        this.setAttribute("confirm-button-color", val);
    }
    get confirmButtonText() {
        console.log('confirmButtonText:get');
        return this.getAttribute("confirm-button-text");
    }
    set confirmButtonText(val) {
        console.log('confirmButtonText:set');
        this.setAttribute("confirm-button-text", val);
    }
    get focusCancel() {
        console.log('focusCancel:get');
        return this.getAttribute("focus-cancel") || "false";
    }
    set focusCancel(val) {
        console.log('focusCancel:set');
        this.setAttribute("focus-cancel", val);
    }
    get focusConfirm() {
        console.log('focusConfirm:get');
        return this.getAttribute("focus-confirm") || "true";
    }
    set focusConfirm(val) {
        console.log('focusConfirm:set');
        this.setAttribute("focus-confirm", val);
    }
    get footer() {
        console.log('footer:get');
        return this.getAttribute("footer");
    }
    set footer(val) {
        console.log('footer:set');
        this.setAttribute("footer", val);
    }
    get header() {
        console.log('header:get');
        return this.getAttribute("header");
    }
    set header(val) {
        console.log('header:set');
        this.setAttribute("header", val);
    }
    get heading() {
        console.log('heading:get');
        return this.getAttribute("heading");
    }
    set heading(val) {
        console.log('heading:set');
        this.setAttribute("heading", val);
    }
    get position() {
        console.log('position:get');
        return this.getAttribute("position");
    }
    set position(val) {
        console.log('position:set');
        this.setAttribute("position", val);
    }
    get showCancelButton() {
        console.log('showCancelButton:get');
        return this.getAttribute("show-cancel-button") || "false";
    }
    set showCancelButton(val) {
        console.log('showCancelButton:set');
        this.setAttribute("show-cancel-button", val);
    }
    get showCloseButton() {
        console.log('showCloseButton:get');
        return this.getAttribute("show-close-button") || "false";
    }
    set showCloseButton(val) {
        console.log('showCloseButton:set');
        this.setAttribute("show-close-button", val);
    }
    get showConfirmButton() {
        console.log('showConfirmButton:get');
        return this.getAttribute("show-confirm-button") || "true";
    }
    set showConfirmButton(val) {
        console.log('showConfirmButton:set');
        this.setAttribute("show-confirm-button", val);
    }
    get text() {
        console.log('text:get');
        return this.getAttribute("text");
    }
    set text(val) {
        console.log('text:set');
        this.setAttribute("text", val);
    }
    get type() {
        console.log('type:get');
        return this.getAttribute("type");
    }
    set type(val) {
        console.log('type:set');
        this.setAttribute("type", val);
    }
    open() {
        console.log('open');
        this.$alert.classList.remove("alert-hide");
        this.$alert.classList.add("alert-show");

        this.$alert.classList.add("active");
        this.$backdrop.classList.add("active");
        document.body.style.overflow = "hidden";
    }
    close() {
        console.log('close');
        this.$alert.classList.remove("alert-show");
        this.$alert.classList.add("alert-hide");
        //this.$alert.classList.remove("active");
        window.setTimeout(() => {
            this.$backdrop.classList.remove("active");
            document.body.style.overflow = "";
            //that.remove();

            this.dispatchEvent(new Event("close.alert"));

        }, 150);
    }
    cancel(event) {
        this.dispatchEvent(new Event("cancel.alert"));
        this.close();
    }
    confirm(event) {
        this.shadowRoot.querySelector(".alert-confirm").disabled = true;
        if (this.dispatchEvent(new Event("confirm.alert", {bubbles: false, cancelable: true}))) {
            this.close();
        }
    }
    onEscape(event) {
        const key = event.which || event.keyCode;
        if (key === 27) {
            console.log("escape");
            this.close();
            event.stopPropagation();
        }
    }
}

if (typeof customElements !== "undefined") {
    customElements.define("zino-alert", ZinoAlert);
}

export { ZinoAlert };