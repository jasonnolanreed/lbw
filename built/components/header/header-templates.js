const makeHtml = (component) => (`
<section>
	<span class="logo">Library BeWell</span>
	<nav>
		<a href="#/home" ${component.view === "home" ? "active" : ""} class="click-zone-10">Home</a>
		<a href="#/resources" ${component.view === "resources" ? "active" : ""} class="click-zone-10">Mental Health Resources</a>
		<a href="#/testimonials" ${component.view === "testimonials" ? "active" : ""} class="click-zone-10">Testimonials</a>
		<a href="#/about" ${component.view === "about" ? "active" : ""} class="click-zone-10">About Us</a>
	</nav>
</section>
`);
const makeCss = (component) => (`
<style>
@import "styles/global-styles.css";

:host {
	background-color: var(--color--sky);
	color: var(--color--white);
}

section {
	max-width: var(--scaffold--main-max-width);
	margin: 0 auto;
	padding: 2rem var(--scaffold--main-side-padding);
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 1.5em 3em;
}

.logo {
	font-size: 1.125em;
	font-weight: 700;
	letter-spacing: 0.2em;
}

nav {
	display: flex;
	flex-wrap: wrap;
	gap: 1em 3em;
}

nav a,
nav a:visited {
	color: var(--color--white);
	text-decoration: none;
}

nav a:hover {
	text-decoration: underline;
}

nav a[active] {
	/*font-weight: 500;*/
	text-shadow: 0 0 0.3px var(--color--white);
	text-decoration: underline;
}
</style>
`);
export const makeTemplate = (component) => {
    return makeCss(component) + makeHtml(component);
};
