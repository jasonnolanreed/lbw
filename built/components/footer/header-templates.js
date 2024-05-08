const makeHtml = (component) => (`
<section>
	<span class="logo">Library BeWell</span>
	<nav>
		<a href="#/home" ${component.view === "home" ? "active" : ""}>Home</a>
		<a href="#/resources">Mental Health Resources</a>
		<a href="#/testimonials">Testimonials</a>
		<a href="#/about">About Us</a>
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
	padding: 2rem 4rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 1.5em 3em;
}

.logo {
	font-size: 1.25em;
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
	font-size: 1.12em;
	color: var(--color--white);
	text-decoration: none;
}

nav a:hover {
	text-decoration: underline;
}

nav a[active] {
	font-weight: 700;
	text-decoration: underline;
}
</style>
`);
export const makeTemplate = (component) => {
    return makeCss(component) + makeHtml(component);
};
