import { JNRElement } from '../../classes/jnr-element.js';
import { makeTemplate } from './home-templates.js';
export class Home extends JNRElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        super.render();
        try {
            this.innerHTML = makeTemplate(this);
        }
        catch (error) {
            console.error(`Error rendering`, error);
        }
    }
}
customElements.define(`lbw-home`, Home);
