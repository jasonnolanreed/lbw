const makeHtml = (component) => (
`
<section>
	<article>
		<img class="bee-logo" src="assets/images/bee-logo.svg" alt="Library BeWell Logo" width="296" height="214"/>
	</article>
	<article>
		<div>
			<h2 class="northwestern">Northwestern</h2>
			Address
			<span>&nbsp;&nbsp;</span>
			<span class="flat-line">-------------</span>
			<br><br>
			Northwestern University,
			<br>
			Feinberg School of Medicine,
			<br>760 N. Lake Shore drive,
			<br>
			Chicago, IL 60611
		</div>
	</article>
	<article>
		<div>
			<img class="op-logo" src="assets/images/op-library.svg" alt="Oak Park Public Library Logo" width="293" height="119"/>
			Address
			<span>&nbsp;&nbsp;</span>
			<span class="flat-line">-------------</span>
			<br><br>
			Oak Park Public Library,
			<br>834 Lake St.,
			<br>
			Oak Park, IL, 60301
		</div>
	</article>
</section>
`
);

const makeCss = (component) => (
`
<style>
@import "styles/global-styles.css";

:host {
	container-name: cq-footer;
	container-type: inline-size;
	background-color: var(--color--sky);
	color: var(--color--white);
}

section {
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	padding: 6rem 4rem 10rem 4rem;
	display: flex;
	align-items: stretch;
	gap: 3rem;
	line-height: 1.5em;
}

article {
	width: calc(100cqw / 3);
	border-right: 1px solid var(--color--white);
	display: flex;
	align-items: center;
}

article:last-of-type {
	border: none !important;
}

.bee-logo {
	width: 175px;
	max-width: 100%;
	height: auto;
}

.northwestern {
	margin-bottom: 1.3rem;
}

.flat-line {
	letter-spacing: -0.1em;
}

.op-logo {
	width: 140px;
	max-width: 100%;
	height: auto;
	margin-bottom: 1.3rem;
}

@container cq-footer (width < 1100px) {
	section {
		flex-wrap: wrap;
		max-width: 500px;
	}

	article {
		width: 100cqw;
		border-right: none;
		border-bottom: 1px solid var(--color--white);
		padding-bottom: 3rem;
	}
}
</style>
`
);

export const makeTemplate = (component) => {
	return makeCss(component) + makeHtml(component);
};
