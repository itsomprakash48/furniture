
// Navbar component
function createNavbar() {
    const navbar = `
  <link rel="stylesheet" href="assets/css/styles.css">
       <!--=============== HEADER ===============-->
          <header class="header">
              <nav class="nav container">
                  <div class="nav__data">
                      <a href="index.html" class="nav__logo">
                          <i class="ri-code-s-slash-line"></i> CodeBox
                      </a>
      
                      <div class="nav__toggle" id="nav-toggle">
                          <i class="ri-menu-line nav__toggle-menu"></i>
                          <i class="ri-close-line nav__toggle-close"></i>
                      </div>
                  </div>
  
                  <!--=============== NAV MENU ===============-->
                  <div class="nav__menu" id="nav-menu">
                      <ul class="nav__list">
                          <li>
                              <a href="index.html" class="nav__link">Home</a>
                          </li>
  
                          <!--=============== DROPDOWN 1 ===============-->
                          <li class="dropdown__item">                      
                              <div class="nav__link dropdown__button">
                                  Cities <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                              </div>
  
                              <div class="dropdown__container">
                                  <div class="dropdown__content">
                                      <div class="dropdown__group">
                                          <div class="dropdown__icon">
                                              <i class="ri-flashlight-line"></i>
                                          </div>
      
                                          <span class="dropdown__title">Most viewed courses</span>
      
                                          <ul class="dropdown__list">
                                              <li>
                                                  <a href="#" class="dropdown__link">HTML for beginners</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Advanced CSS</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">JavaScript OOP</a>
                                              </li>
                                          </ul>
                                      </div>
      
                                      <div class="dropdown__group">
                                          <div class="dropdown__icon">
                                              <i class="ri-heart-3-line"></i>
                                          </div>
      
                                          <span class="dropdown__title">Popular courses</span>
      
                                          <ul class="dropdown__list">
                                              <li>
                                                  <a href="#" class="dropdown__link">Development with Flutter</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Web development with React</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Backend development expert</a>
                                              </li>
                                          </ul>
                                      </div>
      
                                      <div class="dropdown__group">
                                          <div class="dropdown__icon">
                                              <i class="ri-book-mark-line"></i>
                                          </div>
      
                                          <span class="dropdown__title">Careers</span>
      
                                          <ul class="dropdown__list">
                                              <li>
                                                  <a href="#" class="dropdown__link">Web development</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Applications development</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">UI/UX design</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Informatic security</a>
                                              </li>
                                          </ul>
                                      </div>
      
                                      <div class="dropdown__group">
                                          <div class="dropdown__icon">
                                              <i class="ri-file-paper-2-line"></i>
                                          </div>
      
                                          <span class="dropdown__title">Certifications</span>
      
                                          <ul class="dropdown__list">
                                              <li>
                                                  <a href="#" class="dropdown__link">Course certificates</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Free certifications</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </li>
  
                          <!--=============== DROPDOWN 2 ===============-->
                          <li class="dropdown__item">
                              <div class="nav__link dropdown__button">
                                  Desines <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                              </div>
  
                              <div class="dropdown__container">
                                  <div class="dropdown__content">
                                      <div class="dropdown__group">
                                          <div class="dropdown__icon">
                                              <i class="ri-code-line"></i>
                                          </div>
      
                                          <span class="dropdown__title">Web templates</span>
      
                                          <ul class="dropdown__list">
                                              <li>
                                                  <a href="#" class="dropdown__link">Free templates</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Premium templates</a>
                                              </li>
                                          </ul>
                                      </div>
      
                                      <div class="dropdown__group">
                                          <div class="dropdown__icon">
                                              <i class="ri-pen-nib-line"></i>
                                          </div>
      
                                          <span class="dropdown__title">Designs</span>
      
                                          <ul class="dropdown__list">
                                              <li>
                                                  <a href="#" class="dropdown__link">Web designs</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">App designs</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Component design</a>
                                              </li>
                                          </ul>
                                      </div>
      
                                      <div class="dropdown__group">
                                          <div class="dropdown__icon">
                                              <i class="ri-apps-2-line"></i>
                                          </div>
      
                                          <span class="dropdown__title">Others</span>
      
                                          <ul class="dropdown__list">
                                              <li>
                                                  <a href="#" class="dropdown__link">Recent blogs</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Tutorial videos</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Webinar</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </li>
  
                          <li>
                              <a href="#" class="nav__link">Pricing</a>
                          </li>
  
                          <!--=============== DROPDOWN 3 ===============-->
                          <li class="dropdown__item">                        
                              <div class="nav__link dropdown__button">
                                  Company <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                              </div>
  
                              <div class="dropdown__container">
                                  <div class="dropdown__content">
                                      <div class="dropdown__group">
                                          <div class="dropdown__icon">
                                              <i class="ri-community-line"></i>
                                          </div>
      
                                          <span class="dropdown__title">About us</span>
      
                                          <ul class="dropdown__list">
                                              <li>
                                                  <a href="#" class="dropdown__link">About us</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Support</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Contact us</a>
                                              </li>
                                          </ul>
                                      </div>
      
                                      <div class="dropdown__group">
                                          <div class="dropdown__icon">
                                              <i class="ri-shield-line"></i>
                                          </div>
      
                                          <span class="dropdown__title">Safety and quality</span>
      
                                          <ul class="dropdown__list">
                                              <li>
                                                  <a href="#" class="dropdown__link">Cookie settings</a>
                                              </li>
                                              <li>
                                                  <a href="#" class="dropdown__link">Privacy Policy</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <a href="contactus.html" class="nav__link">Contact Us</a>
                          </li>
                      </ul>
                  </div>
              </nav>
          </header>
  
          
    `;
      
    return navbar;
  }
  // Add navbar to the page
  function loadNavbar() {
    const header = document.createElement('header');
    header.innerHTML = createNavbar();
    document.body.prepend(header); // Add navbar at the top of the page
  }
  
  // Call the function to load navbar
  loadNavbar();
  
  
  
  
  
  
  /*=============== SHOW MENU ===============*/
  const showMenu = (toggleId, navId) =>{
     const toggle = document.getElementById(toggleId),
           nav = document.getElementById(navId)
  
     toggle.addEventListener('click', () =>{
         // Add show-menu class to nav menu
         nav.classList.toggle('show-menu')
         // Add show-icon to show and hide menu icon
         toggle.classList.toggle('show-icon')
     })
  }
  
  showMenu('nav-toggle','nav-menu')
  
  /*=============== SHOW DROPDOWN MENU ===============*/
  const dropdownItems = document.querySelectorAll('.dropdown__item')
  
  // 1. Select each dropdown item
  dropdownItems.forEach((item) =>{
      const dropdownButton = item.querySelector('.dropdown__button') 
  
      // 2. Select each button click
      dropdownButton.addEventListener('click', () =>{
          // 7. Select the current show-dropdown class
          const showDropdown = document.querySelector('.show-dropdown')
          
          // 5. Call the toggleItem function
          toggleItem(item)
  
          // 8. Remove the show-dropdown class from other items
          if(showDropdown && showDropdown!== item){
              toggleItem(showDropdown)
          }
      })
  })
  
  // 3. Create a function to display the dropdown
  const toggleItem = (item) =>{
      // 3.1. Select each dropdown content
      const dropdownContainer = item.querySelector('.dropdown__container')
  
      // 6. If the same item contains the show-dropdown class, remove
      if(item.classList.contains('show-dropdown')){
          dropdownContainer.removeAttribute('style')
          item.classList.remove('show-dropdown')
      } else{
          // 4. Add the maximum height to the dropdown content and add the show-dropdown class
          dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
          item.classList.add('show-dropdown')
      }
  }
  
  /*=============== DELETE DROPDOWN STYLES ===============*/
  const mediaQuery = matchMedia('(min-width: 1118px)'),
        dropdownContainer = document.querySelectorAll('.dropdown__container')
  
  // Function to remove dropdown styles in mobile mode when browser resizes
  const removeStyle = () =>{
      // Validate if the media query reaches 1118px
      if(mediaQuery.matches){
          // Remove the dropdown container height style
          dropdownContainer.forEach((e) =>{
              e.removeAttribute('style')
          })
  
          // Remove the show-dropdown class from dropdown item
          dropdownItems.forEach((e) =>{
              e.classList.remove('show-dropdown')
          })
      }
  }
  
  addEventListener('resize', removeStyle)
  