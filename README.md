1 Creating the Navigation Structure: 
let navContents = 
   <ul>
       <li><a href="#section1" id="link1">section1</a></li>
       <li><a href="#section2" id="link2">section2</a></li>
       <li><a href="#section3" id="link3">section3</a></li>
       <li><a href="#section4" id="link4">section4</a></li>
   </ul>
;

This defines the HTML structure for the navigation (nav) bar with four links (section1, section2, section3, section4). Each link is an anchor (<a>) element pointing to a specific section on the page via its href.

2 
Creating and Styling the nav Element:
let navElement = document.createElement('nav');
navElement.innerHTML = navContents;

navElement.style.position = 'sticky';
navElement.style.top = '0';

Here, an actual nav element is created using document.createElement('nav'). The innerHTML property is set to navContents, which contains the list of links created earlier. The navigation bar is styled to have a sticky position (position: sticky) at the top of the viewport (top: 0).

3. Inserting the nav Element into the Document:
document.body.insertBefore(navElement, document.body.firstChild);

This line inserts the navElement at the beginning of the body element. This effectively places the navigation bar at the top of the page, given its sticky positioning.


4.Adding Click Behavior to Navigation Links:
function setActiveClassAndScroll(event) {
   event.preventDefault();

   let allLinks = navElement.querySelectorAll('a');
   allLinks.forEach(link => link.classList.remove('your-active-class'));

   event.target.classList.add('your-active-class');

   let targetId = event.target.getAttribute('href').substring(1);
   let targetSection = document.getElementById(targetId);
   targetSection.scrollIntoView({ behavior: 'smooth' });
}

let links = navElement.querySelectorAll('a');
links.forEach(link => {
   link.addEventListener('click', setActiveClassAndScroll);
});

setActiveClassAndScroll(event): This function is called when a navigation link (<a>) is clicked. It prevents the default behavior of the link, removes the your-active-class from all links, adds your-active-class to the clicked link, and scrolls smoothly to the corresponding section (targetSection) on the page.

The forEach loop at the end iterates over all <a> elements inside navElement and attaches an event listener (click) to each one. When clicked, each link triggers the setActiveClassAndScroll function to update the active state and scroll behavior.


5.Monitoring and Updating Active Sections on Scroll:
function makeActive() {
   let sections = document.getElementsByTagName("section");

   for (let section of sections) {
      const box = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      const value = viewportHeight / 2;

      if (box.top <= value && box.bottom >= value) {
         section.classList.add("active");
         let nav = document.querySelector(`li#nav-${section.id}`);
         if (nav) {
            nav.classList.add("active-nav");
         }
      } else {
         section.classList.remove("active");
         let nav = document.querySelector(`li#nav-${section.id}`);
         if (nav) {
            nav.classList.remove("active-nav");
         }
      }
   }
}

window.addEventListener('scroll', makeActive);

makeActive(): This function is triggered on every scroll event (window.addEventListener('scroll', makeActive)). It checks each <section> element (sections) on the page to see if it is currently within the viewport (box.top <= value && box.bottom >= value). If so, it adds the active class to the section and its corresponding navigation link (nav.classList.add("active-nav")). If not, it removes these classes.
This code effectively creates a sticky navigation bar at the top of the page, allows smooth scrolling to sections when navigation links are clicked, and updates the active state of both sections and navigation links based on scroll position.
