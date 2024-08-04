gsap.from("#img1" ,{
    delay: 0.4,
    opacity: 100,
    duration: 2,
    y:60,
})
gsap.from("#img2",{
    delay: 0.4,
    opacity: 0,
    duration: 1,
    x:60
})
gsap.from("#img3",{
    delay: 0.4,
    opacity: 0,
    duration: 1,
    y:-60
})

gsap.from("h1",{
    y:1000,
    opacity: 0,
    duration: 2,
    delay:0.4
})
gsap.from("#part2",{
    y:1000,
    opacity: 0,
    duration: 2,
    delay:0.4
    
})
