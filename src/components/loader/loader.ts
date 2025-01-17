import {JNRElement} from '../../classes/jnr-element.js';
import {makeTemplate} from './loader-templates.js';

export class Loader extends JNRElement {
	loadingTimeout = null;

	constructor() {
		super();
		this.attachShadow({mode: `open`});
	}

	static get observedAttributes() {
		return [`loading`];
	}

	get loading() {
		return !!this.getAttribute(`loading`);
	}

	set loading(newValue: boolean) {
		if (typeof newValue !== `boolean`) { return; }
		if (newValue === true) {
			this.loadingTimeout = setTimeout(_ => {
				this.setAttribute(`loading`, String(newValue));
			}, 1000);
		} else {
			if (this.loadingTimeout) {
				clearTimeout(this.loadingTimeout);
				this.loadingTimeout = null;
			}
			this.removeAttribute(`loading`);
		}
	}

	attributeChangedCallback(name, oldValue, newValue) {
		// Only called for attributes return from observedAttributes
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

customElements.define(`jnr-loader`, Loader);
