import { router } from '../../router.js';
import { JNRElement } from '../../classes/jnr-element.js';
import { makeTemplate } from './header-templates.js';
export class Header extends JNRElement {
    loadingTimeout = null;
    view = router[`view`] || ``;
    constructor() {
        super();
        this.attachShadow({ mode: `open` });
    }
    connectedCallback() {
        super.connectedCallback();
        this.render();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    render() {
        try {
            this.shadowRoot.innerHTML = makeTemplate(this);
        }
        catch (error) {
            console.error(`Error rendering`, error);
        }
    }
}
customElements.define(`lbw-header`, Header);
