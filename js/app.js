// Global Variables declaration

const ul = document.getElementById('navbar__list');
const sections = Array.from(document.querySelectorAll('section'));
let number = sections.length;

//Start addLists function to add lists and links
function addLists(){

for(let i = 1; i <= number; i++){
    //create local variables list, link elements
    const li = document.createElement('li');
    const link = document.createElement('a');
    //add menu__link class to links
    link.classList.add('menu__link');
    //set link href attribute to section number
    link.setAttribute('href', '#section' + i);
    //append link to list
    li.appendChild(link);
    
    //set link textNode to number of section
    link.textContent = 'section ' + i;
    ul.appendChild(li);
}
}
//end of add lists function

//Start function to get sectio position
function position(section){
    return Math.floor(section.getBoundingClientRect().top);
}
//End position function to get sectio position

//removing active class from the section
function removeActiveClass(section) {
    section.classList.remove('your-active-class');
};

// adding active class to the section
function addActiveClass(condition, section) {
    if(condition){
        section.classList.add('your-active-class');
    };
};

//Start activeClass function
const activeClass = () => {
    for(section of sections){
        //define element offset and call position function
        const elementOffset = position(section);

        //declare activeSection function to get the element offset
        function activeSection () {
            if(elementOffset < 50 && elementOffset >= -50){
                return true;
            }
            else {
                return false;
            }
        };
        //remove active class
        removeActiveClass(section);
        //add active class if active section offset is between 50 and -50
        addActiveClass(activeSection(), section);
    };
};
//End activeClass function

//Start activeNavbar function to get selected navbar
function activeNavbar(){
    
    const lists = Array.from(document.querySelectorAll('li'));
    const listNumber = lists.length;
    let current = document.getElementsByClassName("navbar__active");
    for (list of lists) {
        list.addEventListener("click", function() {   
          if (current.length > 0) {
            current[0].className = current[0].className.replace("navbar__active", "");
          }
          this.className += "navbar__active";
        });
      }
}
//End activeNavbar function

//call addLists function
addLists();
//call activeNavbar function
activeNavbar();
//call activeClass function by scrolling
document.addEventListener('scroll', activeClass);