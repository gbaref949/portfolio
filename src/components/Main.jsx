import{ useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    // Code for the nav
    const addClassToLogo = () => {
      const logos = document.querySelectorAll('.logo:nth-child(2n)');
      logos.forEach((logo) => logo.classList.add('on'));
    };

    const toggleLogo = () => {
      const logos = document.querySelectorAll('.logo');
      logos.forEach((logo) => {
        logo.addEventListener('click', () => {
          logo.classList.toggle('on');
        });
      });
    };

    addClassToLogo();
    toggleLogo();

    // Function to open navigation
    const openNav = () => {
      document.getElementById('myNav').style.width = '100%';
    };

    // Function to close navigation
    const closeNav = () => {
      document.getElementById('myNav').style.width = '0%';
    };

    // Code for dark mode
    const handleLinkClick = () => {
      const links = document.querySelectorAll('a');
      links.forEach((link) => {
        link.onclick = () => {
          window.location.href = link.href;
        };
      });
    };

    handleLinkClick();
  }, []);

  return (
    <div>
      <header>
        <label for='active' className='menu-btn'>
      
        </label>
        <div className='wrapper'>
          <ul>
            <li>
              <a href='/index.html'>HOME</a>
            </li>
            <li>
              <a href='/pages/about.html'>ABOUT</a>
            </li>
            <li>
              <a href='/pages/resume.html'>RESUME</a>
            </li>
            <li>
              <a href='/pages/projects.html'>PROJECTS</a>
            </li>
            <li>
              <a href='/pages/contact.html'>CONTACT</a>
            </li>
          </ul>
        </div>
      </header>
      <div className='bannerWords'>
        <div className='bannerText'>
          <h1>GEORGIANA BAREFIELD</h1>
        </div>
      </div>

      <article>
        <div className='parent-container'>
          <div className='centered-text'>This is the Landing Page</div>
        </div>
      </article>

      {/* <main>
        <h1></h1>
      </main> */}

      <footer className='footer-distributed'>
        <div className='footer-left'>
          <h3>Reach Out!</h3>

          <p className='footer-links'>
            <a href='./' className='link-1'>
              Home
            </a>

            <a href='./'>About</a>

            <a href='./'>Resume</a>

            <a href='./'>Projects</a>

            <a href='./'>Contact</a>
          </p>

          <p className='footer-company-name'>
            Copyright &copy; 2023 Georgiana Barefield
          </p>
        </div>

        <div className='footer-center'>
          <div>
            <i className='fa fa-map-marker'></i>
            <p>
              <span>Phoenix</span> Arizona, United States
            </p>
          </div>

          <div>
            <i className='fa fa-phone'></i>
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <i className='fa fa-envelope'></i>
            <p>
              <a href='contactgeorgi7@gmail.com'>contactgeorgi7@gmail.com</a>
            </p>
          </div>
        </div>

        <div className='footer-right'>
          <p className='footer-company-about'>
            <span>About the company</span>
            Hello, my name is Georgiana Barefield, I'm in my junior year of high
            school. I'm enrolled in three schools: my home high school, West-Mec
            where I'm involed in a coding in programming technical class. In my
            spare time, I destress by dancing and programming I feel the freest
            when I create through my dance or projects.
          </p>

          <div className='footer-icons'>
            <a href='#'>
              <i className='fa fa-facebook'></i>
            </a>
            <a href='#'>
              <i className='fa fa-twitter'></i>
            </a>
            <a href='https://www.linkedin.com/in/georgibarefield'>
              <i className='fa fa-linkedin'></i>
            </a>
            <a href='https://github.com/gbaref949'>
              <i className='fa fa-github'></i>
            </a>
          </div>
        </div>
      </footer>
      <script></script>
    </div>
  );
};

export default Main;
