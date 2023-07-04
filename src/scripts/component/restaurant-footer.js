class flavorfoot extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <!-- Footer Icon -->
    <div class='footer-container'>
    <div class='footer-logo'>
      <img src='images/logo.png' alt='Logo'>
    </div>
    <div class='footer-links'>
    <h3>Product<h3>
      <ul>
        <li><a href='#favorite'>Favorite</a></li>
        <li><a href='#menu'>Menu</a></li>
        <li><a href='#testim'>Testimonials</a></li>
      </ul>
    </div>
    <div class='footer-social'>
      <a href='https://github.com/zcx47' target='_blank' rel='noopener noreferrer'><i class='fab fa-github'></i></a>
      <a href='#'><i class='fab fa-twitter'></i></a>
      <a href='https://www.instagram.com/_synzm/' target='_blank' rel='noopener noreferrer'><i class='fab fa-instagram'></i></a>
    </div>
  </div>
  <div class='footer-bottom'>
    <p>Copyright &copy; 2023 by Flavor, Inc. All rights reserved by Syahrul Nizam.</p>
  </div>
         `;
  }
}
customElements.define("flavor-footer", flavorfoot);
