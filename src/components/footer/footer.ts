import {router} from '../../router.js';
import {JNRElement} from '../../classes/jnr-element.js';
import {makeTemplate} from './footer-templates.js';

export class Footer extends JNRElement {
	loadingTimeout = null;
	view: string = router[`view`] || ``;

	constructor() {
		super();
		this.attachShadow({mode: `open`});
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
		} catch(error) {
			console.error(`Error rendering`, error);
		}
	}
}

customElements.define(`lbw-footer`, Footer);
