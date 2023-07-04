class flavortesti extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class='testimonials' id='testim'>
      <div>
        <h1>What are they saying?</h1>
  
        <div class='row'>
          <div class='col'>
            <div class='testi' tabindex='0'>
              <div class='profile'>
                <img class='profile' src='images/profile/Syahrul-Nizam.jpg' alt='Profile'>
              </div>
              <div class='name'>
                <p>Syahrul Nizam<p>
              </div>
              
              <div class='stars'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
              </div>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur ullam est illo officia accusantium nemo nisi maxime exercitationem asperiores nam perspiciatis ea iste id, reiciendis itaque consectetur molestias ab.
              </p>
            </div>
          </div>
          
          <div class='col'>
            <div class='testi' tabindex='0'>
              <div class='profile'>
                <img class='profile' src='images/profile/Luffy.jpg' alt='Profile'>
              </div>
              <div class='name'>
                <p>Monkey D Luffy</p> 
                </div>
              
                <div class='stars'>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='fas fa-star'></i>
                <i class='far fa-star'></i>
              </div>
  
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit necessitatibus officia facilis dolor quas eos ratione alias similique id, nihil nisi, animi nam vero exercitationem iusto laudantium! Itaque, dicta?
              </p>
            </div>
          </div>

          <div class='col'>
          <div class='testi' tabindex='0'>
            <div class='profile'>
              <img class='profile' src='images/profile/Naruto.jpg' alt='Profile'>
            </div>
            <div class='name'>
              <p>Uzumaki Naruto</p> 
              </div>
            
              <div class='stars'>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='far fa-star'></i>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit necessitatibus officia facilis dolor quas eos ratione alias similique id, nihil nisi, animi nam vero exercitationem iusto laudantium! Itaque, dicta?
            </p>
          </div>
        </div>

        <div class='col'>
          <div class='testi' tabindex='0'>
            <div class='profile'>
              <img class='profile' src='images/profile/Zoro.jpg' alt='Profile'>
            </div>
            <div class='name'>
              <p>Roronoa Zoro<p>
            </div>
            
            <div class='stars'>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur ullam est illo officia accusantium nemo nisi maxime exercitationem asperiores nam perspiciatis ea iste id, reiciendis itaque consectetur molestias ab.
            </p>
          </div>
        </div>

        <div class='col'>
        <div class='testi' tabindex='0'>
          <div class='profile'>
            <img class='profile' src='images/profile/Sasuke.jpg' alt='Profile'>
          </div>
          <div class='name'>
            <p>Uchiha Sasuke</p> 
            </div>
          
            <div class='stars'>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='fas fa-star'></i>
            <i class='far fa-star'></i>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse velit necessitatibus officia facilis dolor quas eos ratione alias similique id, nihil nisi, animi nam vero exercitationem iusto laudantium! Itaque, dicta?
          </p>
        </div>
      </div>
    `;
  }
}
customElements.define("flavor-testi", flavortesti);
