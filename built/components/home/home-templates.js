const makeHtml = (component) => (`
<h1>LBW Home</h1>
`);
const makeCss = (component) => (`
<style>
@import "styles/global-styles.css";
</style>
`);
export const makeTemplate = (component) => {
    return makeCss(component) + makeHtml(component);
};