//HTML TEMPLATE FOR PROJECT SECTION
const more = `
      <!-- PROJECTS START -->
      <section id="projectsSection">
          <div class="project-slide">
            <div class="projInfo">
              <a href="https://smartbrain902101.herokuapp.com/" target="_blank">
                <p>SmartBrain - Face recognition App</p>
              </a>  
              <p>This face recognition app allows you to scan any image-link for faces within the picture, this is my first project fully leveraging an API, and a fully built backend, allowing user registration, login, and a rank - based around how many images that user entered.
              The data held within the database is secure, using such technologies as Bcrypt.</p>
            </div>
            <a href="https://smartbrain902101.herokuapp.com/" target="_blank">
              <img src="smartbrain.png" alt=""> 
            </a>                   
          </div> 
          <div class="project-slide">
            <div class="projInfo">
              <a href="https://codepen.io/dannydaley/full/RwWdVEp" target="_blank">
                <p>Final Fantasy VII:R Product Page</p>
              </a>  
              <p>Being a massive Final Fantasy fan, upon the release of FFVII:Remake I felt it was 100% necessary to make it the theme of my responsive web design submission for freeCodeCamp.
                I particularly enjoyed making a theme with a darker appeal, and using that very FF7 Mako green.</p>
            </div>
            <a href="https://codepen.io/dannydaley/full/RwWdVEp" target="_blank">
              <img src="https://dannydaley.github.io/7.png" alt=""> 
            </a>                   
          </div> 
          <div class="project-slide">
            <div class="projInfo">
              <a href="https://dannydaley.github.io/makkioikui/" target="_blank">
                <p>Makkio Ikui</p>
              </a>
              <p>Inspired by the Kawaii japanese art style, of course this website was a lot of fun to make, a great use of color in the design really made it pop. It came with its challenges, but its hard to stay frustrated when you're working with these kind of images.</p>
            </div>
            <a href="https://dannydaley.github.io/makkioikui/" target="_blank">
              <img src="makki.png" alt="">  
            </a>       
          </div>
            <div class="project-slide">
            <div class="projInfo">
              <a href="https://dannydaley.github.io/captivedesign/" target="_blank">
                <p>Captive Design Studio</p>
              </a>
              <p>I had a great time working on the Captive Design Studio site, the use of strong fonts and powerful colors was an absolute must to pull this design off and it came out looking fantastic. Definitely learned a lot about making an impact from this one.</p>
            </div>
            <a href="https://dannydaley.github.io/captivedesign/" target="_blank">
              <img src="https://dannydaley.github.io/cap.png" alt="">
            </a>          
          </div>
          <div class="project-slide">
            <div class="projInfo">
              <a href="https://dannydaley.github.io/eightBall/" target="_blank">
                <p>JavaScript Magic 8-ball</p>
              </a>
              <p>Had some fun and made a small Magic 8-Ball web app using some basic HTML, CSS shapes and simple JavaScript switch statement logic.</p>
            </div>
            <a href="https://dannydaley.github.io/eightBall/" target="_blank">
              <img src="https://dannydaley.github.io/8.png" alt=""> 
            </a>         
          </div>
          <div class="seeMore">
            <ul>
              <li id="seeLess" class="colorchange">see less</li>
            </ul>
          </div>
      </section>`
const less = `<!-- PROJECTS START -->
      <section id="projects">
          <div class="project-tile">
            <a href="https://smartbrain902101.herokuapp.com/" target="_blank">
              <img src="smartbrain.png" alt="">
              <p>SmartBrain - Face recognition app</p>
            </a>  
          </div>  
          <div class="project-tile">
            <a href="https://codepen.io/dannydaley/full/RwWdVEp" target="_blank">
              <img src="https://dannydaley.github.io/7.png" alt="">
              <p>Final Fantasy VII:R Product Page</p> 
            </a>          
          </div>
          <div class="project-tile">
            <a href="https://dannydaley.github.io/captivedesign/" target="_blank">
              <img src="https://dannydaley.github.io/cap.png" alt="">
              <p>Captive Design Studio</p>
            </a>
          </div>
          <div class="project-tile">
            <a href="https://dannydaley.github.io/makkioikui/" target="_blank">
              <img src="makki.png" alt="">
              <p>Makkio Ikui</p>
            </a>
          </div>
           <div class="project-tile">
              <a href="https://dannydaley.github.io/eightBall/" target="_blank">
              <img src="eightBall.png" alt="">
                <p>JavaScript Magic 8-ball</p>
              </a>
             </div>                  
          </section>
          <div class="seeMore">
      <ul>
        <li id="seeMore" class="colorchange">see more</li>
          </ul>
          </div>`
const projectWindow = document.getElementById('projWindow')          
          projectWindow.innerHTML = less;
//TARGETS FOR NAVIGATION LINKS
let seeMore = document.getElementById('seeMore');
let seeLess = '';//EMPTY VARIABLE TO AVOID ADDEVENTLISTENER OF NULL ON PAGE LOAD
const loadMore = () => {
    if (projectWindow.innerHTML === less) {
    projectWindow.innerHTML = more;
    window.location.hash = 'projWindow';//WINDOW FOCUS PROJECTS SECTION
    seeLess = document.getElementById('seeLess');//REASSIGNMENT OF EMPTY VARIABLE
    seeLess.addEventListener('click', loadLess)
  } 
}
const loadLess = () => {
  if (projectWindow.innerHTML === more) {
    projectWindow.innerHTML = less;
    window.location.hash = 'projWindow'
    seeMore = document.getElementById('seeMore');
    seeMore.addEventListener('click', loadMore);
  }
}
seeMore.addEventListener('click', loadMore);
