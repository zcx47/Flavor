class flavorherro extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class='hero' id='menu'>
        <h1  tabindex='0'>Restaurant Catalogue</h1>
        <p  tabindex='0'>Let's Find The Best Food Here</p>
      </div>`;
  }
}
customElements.define("flavor-hero", flavorherro);
