import {Loader} from '../components/loader/loader';

export class LoadView {
	// Fetches HTML for layout, parses and loads contained scripts,
	// inserts into DOM with $view as parent, fetches HTML for
	// view (if supplied), parses and loads ITS contained scripts, and inserts
	// into DOM for $view -> .content-container as parent
	static layout($view: HTMLElement, layoutUrl: string, viewUrl?: string) {
		window.scrollTo(0, 0);

		fetch(layoutUrl)
		.then(response => response.text(), error => { throw new Error(error); })
		.then(responseAsText => {
			$view.innerHTML = responseAsText;
			const $$scripts = $view.querySelectorAll(`script[src]`);
			$$scripts.forEach($script => {
				let $newScript = document.createElement(`script`);
				$newScript.src = $script.getAttribute(`src`);
				if ($script.getAttribute(`type`) === `module`) {
					$newScript.type = `module`;
				}
				$script.parentNode.removeChild($script);
				$view.appendChild($newScript);
			});
			if (viewUrl) {
				LoadView._fetch($view.querySelector(`.content-container`), viewUrl);
			} else {
				setTimeout(_ => {
					(document.querySelector(`jnr-loader`) as Loader).loading = false;
				}, 0);
			}
		})
		.catch(error => null);

		(document.querySelector(`jnr-loader`) as Loader).loading = true;
		const $contentContainer = $view.querySelector(`.content-container`);
		if ($contentContainer) {
			$contentContainer.classList.remove(`in`);
		}
	}

	// Fetches HTML for view, parses and loads contained scripts,
	// and inserts into DOM with $view as parent
	static _fetch($view: HTMLElement, viewUrl: string) {
		fetch(viewUrl)
		.then(response => response.text())
		.then(responseAsText => {
			$view.innerHTML = responseAsText;
			const $$scripts = $view.querySelectorAll(`script[src]`);
			const $$inlineScripts = $view.querySelectorAll(`script:not([src])`);
			$$scripts.forEach($script => {
				let $newScript = document.createElement(`script`);
				$newScript.src = $script.getAttribute(`src`);
				if ($script.getAttribute(`type`) === `module`) {
					$newScript.type = `module`;
				}
				$script.parentNode.removeChild($script);
				$view.appendChild($newScript);
			});
			$$inlineScripts.forEach($script => {
				eval($script.textContent);
			});
			requestAnimationFrame(_ => {
				$view.classList.add(`in`);
			});
		});
	}
}
