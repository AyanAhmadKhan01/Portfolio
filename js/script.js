const loading = document.getElementById("loading");
const content = document.getElementById("content");
const element = document.querySelector(".spinner");
element.classList.add("scroll-bar-hide");
element.style.animation = "spin 4s infinite";
setTimeout(() => {
  loading.style.display = "none";
  content.style.display = "block";
  element.classList.remove("scroll-bar-hide");
}, 3900);

loading.style.animation = "bgColor linear 4s";
loading.style.animation = "smooth linear 1s";

const skill = document.getElementById('skill-btn');
const skillPanel = document.getElementById('skill-view');
const closeSkill = document.querySelector('.fa-xmark');

skill.addEventListener('click', function() {
      skillPanel.classList.add('active');
      skillPanel.style.display = 'block';
      setTimeout(() => {
        skillPanel.classList.remove('active');
        navbar.style.display = 'none'
        borderBottom.style.border = '0px'
        socialIcon.style.display = 'none'
      }, 0);
    });


closeSkill.addEventListener('click', () => {
   skillPanel.classList.add('active');
   borderBottom.style.borderBottom = '1px solid rgb(39, 37, 37)';
   socialIcon.style.display = 'block'
   navbar.style.display = 'block'
  setTimeout(() => {
    skillPanel.style.display = 'none';
  }, 1000);
});


const dreamWall = document.querySelectorAll('.dreamWall');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxDreamwall = document.getElementById('lightbox-dreamwall');
const lightboxDreamwallClose = document.querySelector('.lightbox-dreamwall-close');
const prevBtn = document.querySelector('.lightbox-dreamwall-prev');
const nextBtn = document.querySelector('.lightbox-dreamwall-next');

let currentIndex = 0;
const images = Array.from(dreamWall);

function showImage(index) {
    lightboxImg.src = images[index].src;
    currentIndex = index;
}

dreamWall.forEach((item, index) => {
    item.addEventListener('click', () => {
        lightboxDreamwall.style.display = 'block';
        showImage(index);
    });
});

lightboxDreamwallClose.addEventListener('click', () => {
    lightboxDreamwall.style.display = 'none';
});



prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        showImage(currentIndex - 1);
    } else {
        showImage(images.length - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        showImage(currentIndex + 1);
    } else {
        showImage(0); 
    }
});

const dreamwallWebsite = document.getElementById('dreamwall-website')
const dreamWallClose = document.getElementById('dreamWall-close');
const dreamBox = document.querySelector('.feature-container');
const dreamBtn = document.getElementById('btn1');

const leftSide = document.getElementById('left-side');
const rightSide = document.getElementById('right-side');

const moreprojectBtn = document.getElementById('btn3');
const moreprojectSection = document.querySelector('.more-projects');

dreamWallClose.addEventListener('click', () => {
  dreamBox.style.translate = '0px 200px'
  dreamBox.classList.add('feature-view')
  setTimeout(() => {
        rightSide.style.height = '100%'
    dreamBox.style.display = 'none';
    dreamwallWebsite.style.display = 'none'
  },800);
  });

  // PRE DEFINE
dreamBox.style.display = 'none';
dreamwallWebsite.style.display ='none';

dreamBtn.addEventListener('click', () => {
if(dreamBox.style.display === 'none' && dreamwallWebsite.style.display === 'none') {
  dreamBox.style.display = 'block';
  dreamwallWebsite.style.display = 'block'
  moreprojectSection.style.display = 'none'
   rightSide.style.height = 'fit-content'
} else {
    dreamBox.style.display = 'none'
    dreamwallWebsite.style.display = 'none'
     rightSide.style.height = '100%'
}
  dreamBox.style.translate = '0px 400px'
    todolist.style.display = 'none';
  setTimeout(() => {
    dreamBox.style.translate = '0px 0px'
    dreamBox.classList.remove('feature-view')
  },0);
});


// NAVBAR

const navbar = document.querySelector('.navbar-remove');
const borderBottom = document.querySelector('.navbar');

const projectClose = document.getElementById('project-close');
const projectBtn = document.getElementById('project-btn');
const projectContainer = document.querySelector('.project-section');


projectClose.addEventListener('click', () => {
   projectContainer.classList.add('project-view')
   leftSide.style.translate = '-300px 0px'
   leftSide.classList.add('project-view');

   rightSide.style.translate = '1000px 0px'
   rightSide.classList.add('project-view');

   setTimeout(() => {
    projectContainer.style.display = 'none'
    navbar.style.display = 'block'
   }, 1000)
})

projectBtn.addEventListener('click', () => {
  projectContainer.style.display = 'flex'

  leftSide.classList.remove('project-view');
  rightSide.classList.remove('project-view');
  projectContainer.classList.add('project-view')

   setTimeout(() => {
    projectContainer.classList.remove('project-view')
    leftSide.style.translate = '0px 0px';
    rightSide.style.translate = '0px 0px'
   }, 0)
})



const todolistBtn = document.getElementById('btn2');
const todolist = document.querySelector('.todolist');

// PRE DEFINE
todolist.style.display = 'none'

todolistBtn.addEventListener('click', () => {
  if(todolist.style.display === 'none') {
    todolist.style.display = 'block';
    rightSide.style.height = 'fit-content'
    moreprojectSection.style.display = 'none'
  } else {
    todolist.style.display = 'none'
     rightSide.style.height = '100%'
  }
});



todolistBtn.addEventListener('click', function() {
     dreamBox.style.display = 'none'
    dreamwallWebsite.style.display = 'none'
})


// PRE DEFINE
moreprojectSection.style.display = 'none';

moreprojectBtn.addEventListener('click', () => {
  if(moreprojectSection.style.display === 'none') {
    moreprojectSection.style.display = 'block'
  } else {
    moreprojectSection.style.display = 'none';
  }
});

moreprojectBtn.addEventListener('click', () => {
   rightSide.style.height = '100%'
    dreamBox.style.display = 'none'
    dreamwallWebsite.style.display = 'none'
    todolist.style.display = 'none'
  });

  const homePage = document.querySelector('.hero-section');
  const resumePage = document.querySelector('.resume');
  const pageContainer = document.querySelector('.page-container')
 
  const homeBtn = document.getElementById('home-btn');
  const resumeBtn = document.getElementById('resume-btn');
 
 
  homeBtn.addEventListener('click', () => {
   if(homePage.style.display === 'none') {
     homePage.style.display = 'block';
     homePage.style.display = 'flex';
     resumePage.style.display = 'none';
       socialPage.style.display = 'none'
   } else {
      homePage.style.display = 'block'
     homePage.style.display = 'flex';
   }
  });
 
 // PRE DEFINE
 resumePage.style.display = 'none';

 resumeBtn.addEventListener('click', () => {
   if (resumePage.style.display === 'none') {
    socialPage.style.animation = '2s fadeIn ease';
    homePage.style.animation = '2s fadeIn ease';
    navbar.style.animation = '2s fadeIn ease';
    borderBottom.style.animation = '2s fadeIn ease';
     setTimeout(() => {
      homePage.style.animation = '2s fadeOut ease';
      socialPage.style.animation = '2s fadeOut ease';
      navbar.style.animation = '2s fadeOut ease';
      borderBottom.style.animation = '2s fadeOut ease';
       pageContainer.style.display = 'grid';
       socialPage.style.display = 'none'
       homePage.style.display = 'none';
       navbar.style.display = 'none';
       borderBottom.style.borderBottom = 'none';
     }, 1500);
 
     setTimeout(() => {
       resumePage.style.display = 'flex';
       pageContainer.style.display = 'none';
       navbar.style.display = 'block';
       borderBottom.style.borderBottom = '1px solid rgb(39, 37, 37)';
     }, 5500);
   }
 });


 const socialBtn = document.getElementById('social-btn');
 const socialPage = document.querySelector('.contact');

// PRE DEFINE

socialPage.style.display = 'none'

 socialBtn.addEventListener('click', () => {
  if(socialPage.style.display === 'none') {
    socialPage.style.display = 'flex'
    homePage.style.display = 'none'
    resumePage.style.display = 'none'
    socialPage.style.animation = '2s fadeOut ease';
  }
 });
  

const menuTab = document.getElementById('menu-tab');
const menuTabClose = document.getElementById('menu-tab-close');

menuTab.addEventListener('click', () => {
  navbar.style.display = 'block'
  setTimeout(() => {
  navbar.style.right = '0px'
  navbar.style.backgroundColor = '#06020d'
  },0)

});

menuTabClose.addEventListener('click', () => {
   navbar.style.right = '-200px'
  navbar.style.backgroundColor = 'transparent'
  setTimeout(() => {
   navbar.style.display = 'none'
  },600)
});


const socialIcon = document.querySelector('.hero-social')