// المحتويات الداخلية للـ nav
let navContents = `
   <ul>
       <li><a href="#section1" id="link1">section1</a></li>
       <li><a href="#section2" id="link2">section2</a></li>
       <li><a href="#section3" id="link3">section3</a></li>
       <li><a href="#section4" id="link4">section4</a></li>
   </ul>
`;

// إنشاء عنصر nav وإضافة المحتويات
let navElement = document.createElement('nav');
navElement.innerHTML = navContents;

// تعيين خاصية sticky للـ nav
navElement.style.position = 'sticky';
navElement.style.top = '0'; // يمكن تعيين أي قيمة مثل '0px' أو '10%' أو '100px' حسب الموضع المرغوب

// إضافة nav إلى بداية الصفحة
document.body.insertBefore(navElement, document.body.firstChild);

// دالة لتعيين كلاس محدد والتمرير إلى السيكشن عند النقر على الرابط
function setActiveClassAndScroll(event) {
   event.preventDefault(); // منع السلوك الافتراضي للرابط
   
   // إزالة الكلاس النشط من جميع الروابط
   let allLinks = navElement.querySelectorAll('a');
   allLinks.forEach(link => link.classList.remove('your-active-class'));
   
   // إضافة الكلاس النشط إلى الرابط المنقر
   event.target.classList.add('your-active-class');
   
   // التمرير إلى السيكشن المرتبط بالرابط
   let targetId = event.target.getAttribute('href').substring(1);
   let targetSection = document.getElementById(targetId);
   targetSection.scrollIntoView({ behavior: 'smooth' });
}

// ربط دالة setActiveClassAndScroll بكل روابط الـ nav
let links = navElement.querySelectorAll('a');
links.forEach(link => {
   link.addEventListener('click', setActiveClassAndScroll);
});







function makeActive() {
    let sections = document.getElementsByTagName("section");

    for (let section of sections) {
        const box = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        // Calculate the value based on viewport height (e.g., 1/3rd or 1/2nd of the viewport height)
        // This determines when the section should be considered active
        const value = viewportHeight / 2; // For example, halfway through the viewport

        if (box.top <= value && box.bottom >= value) {
            // Apply active state on current section and corresponding Nav link
            section.classList.add("active");
            let nav = document.querySelector(`li#nav-${section.id}`);
            if (nav) {
                nav.classList.add("active-nav");
            }
        } else {
            // Remove active state from other section and corresponding Nav link
            section.classList.remove("active");
            let nav = document.querySelector(`li#nav-${section.id}`);
            if (nav) {
                nav.classList.remove("active-nav");
            }
        }
    }
}

// Call makeActive when the page is scrolled
window.addEventListener('scroll', makeActive);





