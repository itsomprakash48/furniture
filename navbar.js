// Navbar Component
function createNavbar() {
    return `
      <link rel="stylesheet" href="assets/css/styles.css">
<!--=============== HEADER ===============-->
<header class="header">
    <nav class="nav container">
        <div class="nav__data">
            <a href="#" class="nav__logo">
                <i class="ri-code-s-slash-line"></i> Devyanshi Ambience
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

                <!--=============== Designs  ===============-->
                <li class="dropdown__item">
                    <div class="nav__link dropdown__button">
                        Designs <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                    </div>

                    <div class="dropdown__container">
                        <div class="dropdown__content">
                            <!-- Modular Kitchen Designs -->
                            <div class="dropdown__group">
                                <span class="dropdown__title">Modular Kitchen Designs</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Modern Kitchens</a></li>
                                    <li><a href="#" class="dropdown__link">Compact Kitchens</a></li>
                                    <li><a href="#" class="dropdown__link">Luxury Kitchens</a></li>
                                </ul>
                            </div>

                            <!-- Dining Room Designs -->
                            <div class="dropdown__group">
                                <span class="dropdown__title">Dining Room Designs</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Formal Dining</a></li>
                                    <li><a href="#" class="dropdown__link">Casual Dining</a></li>
                                </ul>
                            </div>

                            <!-- Tile Designs -->
                            <div class="dropdown__group">
                                <span class="dropdown__title">Tile Designs</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Floor Tiles</a></li>
                                    <li><a href="#" class="dropdown__link">Wall Tiles</a></li>
                                </ul>
                            </div>

                            <!-- Wardrobe Designs -->
                            <div class="dropdown__group">
                                <span class="dropdown__title">Wardrobe Designs</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Walk-in Wardrobes</a></li>
                                    <li><a href="#" class="dropdown__link">Sliding Wardrobes</a></li>
                                </ul>
                            </div>

                            <!-- Living Room Designs -->
                            <div class="dropdown__group">
                                <span class="dropdown__title">Living Room Designs</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Contemporary Living Rooms</a></li>
                                    <li><a href="#" class="dropdown__link">Minimalist Living Rooms</a></li>
                                </ul>
                            </div>

                            <!-- Bathroom Designs -->
                            <div class="dropdown__group">
                                <span class="dropdown__title">Bathroom Designs</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Modern Bathrooms</a></li>
                                    <li><a href="#" class="dropdown__link">Small Bathrooms</a></li>
                                </ul>
                            </div>

                            <!-- Master Bedroom Designs -->
                            <div class="dropdown__group">
                                <span class="dropdown__title">Master Bedroom Designs</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Luxury Bedrooms</a></li>
                                    <li><a href="#" class="dropdown__link">Cozy Bedrooms</a></li>
                                </ul>
                            </div>

                            <!-- Kids Bedroom Designs -->
                            <div class="dropdown__group">
                                <span class="dropdown__title">Kids Bedroom Designs</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Themed Bedrooms</a></li>
                                    <li><a href="#" class="dropdown__link">Playful Designs</a></li>
                                </ul>
                            </div>

                            <!-- Balcony Designs -->
                            <div class="dropdown__group">
                                <span class="dropdown__title">Balcony Designs</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Small Balconies</a></li>
                                    <li><a href="#" class="dropdown__link">Garden Balconies</a></li>
                                </ul>
                            </div>

                            <!-- Pooja Room Designs -->
                            <div class="dropdown__group">
                                <span class="dropdown__title">Pooja Room Designs</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Traditional Pooja Rooms</a></li>
                                    <li><a href="#" class="dropdown__link">Modern Pooja Rooms</a></li>
                                </ul>
                            </div>

                            <!-- Add more categories as needed -->
                        </div>
                    </div>
                </li>

                <!--=============== Cities ===============-->
                <li class="dropdown__item">
                    <div class="nav__link dropdown__button">
                        Cities <i class="ri-arrow-down-s-line dropdown__arrow"></i>
                    </div>

                    <div class="dropdown__container">
                        <div class="dropdown__content">
                            <!-- Maharashtra -->
                            <div class="dropdown__group">
                                <div class="dropdown__icon">
                                    <i class="ri-map-pin-line"></i> <!-- City Icon -->
                                </div>
                                <span class="dropdown__title">Maharashtra</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Mumbai</a></li>
                                    <li><a href="#" class="dropdown__link">Pune</a></li>
                                    <li><a href="#" class="dropdown__link">Nagpur</a></li>
                                </ul>
                            </div>

                            <!-- Karnataka -->
                            <div class="dropdown__group">
                                <div class="dropdown__icon">
                                    <i class="ri-map-pin-line"></i> <!-- City Icon -->
                                </div>
                                <span class="dropdown__title">Karnataka</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Bangalore</a></li>
                                    <li><a href="#" class="dropdown__link">Mysore</a></li>
                                    <li><a href="#" class="dropdown__link">Hubli</a></li>
                                </ul>
                            </div>

                            <!-- Tamil Nadu -->
                            <div class="dropdown__group">
                                <div class="dropdown__icon">
                                    <i class="ri-map-pin-line"></i> <!-- City Icon -->
                                </div>
                                <span class="dropdown__title">Tamil Nadu</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">Chennai</a></li>
                                    <li><a href="#" class="dropdown__link">Coimbatore</a></li>
                                    <li><a href="#" class="dropdown__link">Madurai</a></li>
                                </ul>
                            </div>

                            <!-- Delhi -->
                            <div class="dropdown__group">
                                <div class="dropdown__icon">
                                    <i class="ri-map-pin-line"></i> <!-- City Icon -->
                                </div>
                                <span class="dropdown__title">Delhi</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">New Delhi</a></li>
                                    <li><a href="#" class="dropdown__link">Noida</a></li>
                                    <li><a href="#" class="dropdown__link">Gurgaon</a></li>
                                </ul>
                            </div>

                            <!-- Delhi -->
                            <div class="dropdown__group">
                                <div class="dropdown__icon">
                                    <i class="ri-map-pin-line"></i> <!-- City Icon -->
                                </div>
                                <span class="dropdown__title">Delhi</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">New Delhi</a></li>
                                    <li><a href="#" class="dropdown__link">Noida</a></li>
                                    <li><a href="#" class="dropdown__link">Gurgaon</a></li>
                                </ul>
                            </div>

                            <!-- Delhi -->
                            <div class="dropdown__group">
                                <div class="dropdown__icon">
                                    <i class="ri-map-pin-line"></i> <!-- City Icon -->
                                </div>
                                <span class="dropdown__title">Delhi</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">New Delhi</a></li>
                                    <li><a href="#" class="dropdown__link">Noida</a></li>
                                    <li><a href="#" class="dropdown__link">Gurgaon</a></li>
                                </ul>
                            </div>

                            <!-- Delhi -->
                            <div class="dropdown__group">
                                <div class="dropdown__icon">
                                    <i class="ri-map-pin-line"></i> <!-- City Icon -->
                                </div>
                                <span class="dropdown__title">Delhi</span>
                                <ul class="dropdown__list">
                                    <li><a href="#" class="dropdown__link">New Delhi</a></li>
                                    <li><a href="#" class="dropdown__link">Noida</a></li>
                                    <li><a href="#" class="dropdown__link">Gurgaon</a></li>
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
}

// Footer Component
function createFooter() {
    return `
      <!-- Footer Section -->
<footer class="footer">
    <div class="footer__container container">
      <!-- Social Media Links -->
      <div class="footer__social">
        <h3 class="footer__title">Follow Us</h3>
        <div class="footer__social-links">
          <a href="#" class="footer__social-link"><i class="ri-facebook-fill"></i></a>
          <a href="#" class="footer__social-link"><i class="ri-twitter-fill"></i></a>
          <a href="#" class="footer__social-link"><i class="ri-instagram-fill"></i></a>
          <a href="#" class="footer__social-link"><i class="ri-linkedin-fill"></i></a>
          <a href="#" class="footer__social-link"><i class="ri-youtube-fill"></i></a>
        </div>
      </div>
  
      <!-- Quick Links -->
      <div class="footer__links">
        <h3 class="footer__title">Quick Links</h3>
        <ul class="footer__list">
          <li><a href="#" class="footer__link">About Us</a></li>
          <li><a href="#" class="footer__link">Services</a></li>
          <li><a href="#" class="footer__link">Solutions</a></li>
          <li><a href="#" class="footer__link">Insights</a></li>
          <li><a href="#" class="footer__link">Contact</a></li>
          <li><a href="#" class="footer__link">Explore</a></li>
        </ul>
      </div>
  
      <!-- Our Services -->
      <div class="footer__links">
        <h3 class="footer__title">Our Services</h3>
        <ul class="footer__list">
          <li><a href="#" class="footer__link">Modular Interiors</a></li>
          <li><a href="#" class="footer__link">Full Home Interiors</a></li>
          <li><a href="#" class="footer__link">Renovation</a></li>
          <li><a href="#" class="footer__link">Custom Designs</a></li>
        </ul>
      </div>
  
      <!-- Legal Links -->
      <div class="footer__links">
        <h3 class="footer__title">Legal</h3>
        <ul class="footer__list">
          <li><a href="#" class="footer__link">Privacy Policy</a></li>
          <li><a href="#" class="footer__link">Terms of Service</a></li>
          <li><a href="#" class="footer__link">GDPR</a></li>
          <li><a href="#" class="footer__link">Security</a></li>
        </ul>
      </div>
  
      <!-- Contact Form -->
      <div class="footer__contact">
        <h3 class="footer__title">Contact Us</h3>
        <form class="footer__form">
          <input type="text" placeholder="Your Name" class="footer__input" required />
          <input type="email" placeholder="Your Email" class="footer__input" required />
          <textarea placeholder="Your Message" class="footer__input footer__textarea" required></textarea>
          <button type="submit" class="footer__button">Send Message</button>
        </form>
      </div>
  
      <!-- Location -->
      <div class="footer__location">
        <h3 class="footer__title">Our Location</h3>
        <p class="footer__text">123 Interior Street, Creative City, Designland</p>
        <p class="footer__text">Phone: +123 456 7890</p>
        <p class="footer__text">Email: info@interiordesign.com</p>
      </div>
    </div>
  
    <!-- Copyright and Made with Love -->
    <div class="footer__bottom">
      <p class="footer__copy">&copy; 2023 Interior Design. All Rights Reserved.</p>
      <p class="footer__made">Made with <i class="ri-heart-fill"></i> by Om Prakash</p>
    </div>
  </footer>

    `;
}

// Add navbar to the page
function loadNavbar() {
    const header = document.createElement('header');
    header.innerHTML = createNavbar();
    document.body.prepend(header); // Add navbar at the top of the page
}

// Add footer to the page
function loadFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = createFooter();
    document.body.appendChild(footer); // Add footer at the bottom of the page
}

// Call the functions to load navbar and footer
loadNavbar();
loadFooter();

// Show/hide mobile menu
function showMenu(toggleId, navId) {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
            toggle.classList.toggle('show-icon');
        });
    }
}

showMenu('nav-toggle', 'nav-menu');

// Dropdown functionality
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button');

    if (dropdownButton) {
        dropdownButton.addEventListener('click', () => {
            const showDropdown = document.querySelector('.show-dropdown');
            toggleItem(item);

            if (showDropdown && showDropdown !== item) {
                toggleItem(showDropdown);
            }
        });
    }
});

// Toggle dropdown item
function toggleItem(item) {
    const dropdownContainer = item.querySelector('.dropdown__container');

    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style');
        item.classList.remove('show-dropdown');
    } else {
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
        item.classList.add('show-dropdown');
    }
}

// Remove dropdown styles on larger screens
function removeDropdownStyles() {
    const mediaQuery = matchMedia('(min-width: 1118px)');
    const dropdownContainers = document.querySelectorAll('.dropdown__container');
    const dropdownItems = document.querySelectorAll('.dropdown__item');

    if (mediaQuery.matches) {
        dropdownContainers.forEach((container) => {
            container.removeAttribute('style');
        });

        dropdownItems.forEach((item) => {
            item.classList.remove('show-dropdown');
        });
    }
}

// Add resize event listener
window.addEventListener('resize', removeDropdownStyles);

// Theme toggle functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// Add theme toggle button event listener
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}