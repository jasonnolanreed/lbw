const makeHtml = (component) => (`
<article>
	<div class="copy">
		<h1 class="jumbo">Welcome to Library BeWell</h1>
		<br>
		<p>Library BeWell offers free, anonymous, self-guided mental health tools for teens. It empowers teens to learn new ways of dealing with stress while helping others do the same.</p>
		<br>
		<a href="#0" class="button calm">Calm Corner</a>
		<br><br><br>
		<p>Library BeWell was designed with teens in mind, but people of all ages are welcome to try the tools in Library BeWell, anywhere and anytime. Library BeWell is run by scientists at Northwestern University in partnership with Cook County Public Libraries.</p>
	</div>
	<aside class="illustration">
		<img class="calm-logo" src="assets/images/calm.svg" alt="Illustration of person meditating" width="492" height="466"/>
		<br>
		<a href="#0">
			<img class="sos-button" src="assets/images/sos.svg" alt="Toggle button with s.o.s. label" width="264" height="152"/>
		</a>
	</aside>
</article>
`);
const makeCss = (component) => (`
<style>
@import "styles/global-styles.css";

:host {
	container-name: cq-page-home;
	container-type: inline-size;
}

article {
	display: flex;
	gap: 4rem 2rem;
}

.copy {
	width: 55cqw;
}

.illustration {
	width: 45cqw;
	position: relative;
	text-align: right;
}

.illustration:before {
	content: "";
	position: absolute;
	top: 0; right: -20%; bottom: -20%; left: -40%;
	background-image: url(assets/images/geometry.svg);
	background-repeat: no-repeat;
	background-size: contain;
	pointer-events: none;
}

.illustration .calm-logo {
	width: 100%;
	height: auto;
}

.illustration .sos-button {
	display: inline-block;
	width: 235px;
	max-width: 100%;
	height: auto;
}

.button.calm {
	width: 420px;
	max-width: 100%;
}

@container cq-page-home (width < 950px) {
	article {
		flex-wrap: wrap;
		max-width: 700px;
		margin: 0 auto;
	}

	article > * {
		width: 100cqw !important;
	}

	.illustration {
		order: -1;
		text-align: center;
	}

	.copy {
		text-align: center;
	}
}
</style>
`);
export const makeTemplate = (component) => {
    return makeCss(component) + makeHtml(component);
};
