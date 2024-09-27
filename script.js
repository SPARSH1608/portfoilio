gsap.from('#intro-bg', {
  scale: 1.2,
  duration: 0.9,
  delay: 1.1,
});

gsap.from('#intro h1', {
  opacity: 0,
  y: '10%',
  duration: 1,
  delay: 1,
});

gsap.from('#intro h3', {
  opacity: 0,
  y: '15%',
  duration: 1,
  delay: 1.5,
});

gsap.from('#intro h4', {
  opacity: 0,
  y: '20%',
  duration: 1,
  delay: 2,
});
gsap.to('#page2 h1', {
  transform: 'translateX(-150%)',

  scrollTrigger: {
    trigger: '#page2',
    scroller: 'body',

    start: 'top 80%',
    end: 'top -340%',
    scrub: 2,
  },
});
gsap.to('#page2 h2', {
  transform: 'translateX(150%)',

  scrollTrigger: {
    trigger: '#page2',
    scroller: 'body',

    start: 'top 60%',
    end: 'top -340%',
    scrub: 2,
  },
});

gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray('.project-section');

contents.forEach((el, i) => {
  ScrollTrigger.create({
    trigger: el,
    start: 'top 32px',
    end: 'top bottom-=10px',
    pin: true,
    scrub: 3,
    pinSpacing: false,
    endTrigger: '.final',
    id: i + 1,
  });
});
