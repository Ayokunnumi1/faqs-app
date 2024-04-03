// faq logic starts
const plusIconBtn = document.querySelectorAll('.plus-icon-btn');
const paragraphs = document.querySelectorAll('p');
const minusIconBtn = document.querySelectorAll('.minus-icon-btn');
const plusIconImg = document.querySelectorAll('.plus-icon-img')

plusIconBtn.forEach((plusIcon, index) => {
    plusIcon.addEventListener('click', () => {
    paragraphs[index].style.display = 'block';
    minusIconBtn[index].style.display = 'block';
        plusIcon.style.display = 'none'
        console.log('index', index & 'paragraph', paragraphs[index])
    })
})

minusIconBtn.forEach((minusIcon, index) => {
    minusIcon.addEventListener('click', () => {
    console.log('clicked');
    paragraphs[index].style.display = 'none';
    plusIconBtn[index].style.display = 'block';
    minusIcon.style.display = 'none'
})
})

// faq logic ends

// navbar section starts
const mobileNav = document.querySelector('.mobile_nav');
const hamburgerBtn = mobileNav.querySelector('.hamburger_btn')
const navListContainer = mobileNav.querySelector('.nav_list_container');
const closeIconBtn = mobileNav.querySelector('.close_icon_btn');
// console.log(mobileNav);

hamburgerBtn.addEventListener('click', () => {
    navListContainer.classList.toggle('show_navList_container')
    console.log('clicked');
});

// FreeCodeCamp Role play game starts
// Declare the changing variables
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

// Declare constant variables
const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  }
];
// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// Activate goStore function
function goStore() {
  update(locations[1]);
}

