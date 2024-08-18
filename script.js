function lenisScroll() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        // console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
}
lenisScroll()

function page1Animation() {
    gsap.from(".heading1", {
        x: -100,
        opacity: 0,
        duration: 1.5,
    }, "heading")

    gsap.from(".heading2", {
        x: 100,
        opacity: 0,
        duration: 1.5,
    }, "heading")
}
page1Animation()

function page2Animation() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            start: "top 50%",
            end: "65% 50%",
            scrub: true,
        }
    })

    tl.to("#sticker1", {
        opacity: 1,
    })
    tl.to("#sticker2", {
        opacity: 1,
    })
    tl.to("#sticker3", {
        opacity: 1,
    })
    tl.to("#sticker5", {
        opacity: 1,
    })
    tl.to("#sticker4", {
        opacity: 1,
    })
}
page2Animation()

function page3Animation() {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3 .elem1",
            start: "top 50%",
            end: "top 30%",
            scrub: true,
            stagger: 0.2
        }
    })

    tl2.from("#page3 .elem1 h2, #page3 .elem1 p", {
        x: -50,
        opacity: 0
    }, "page31")

    tl2.from("#page3 .elem1 .right", {
        x: 50,
        opacity: 0
    }, "page31")


    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3 .elem2",
            start: "top 50%",
            end: "top 30%",
            scrub: true,
            stagger: 0.2
        }
    })

    tl3.from("#page3 .elem2 h2, #page3 .elem2 p", {
        x: -50,
        opacity: 0
    }, "page32")

    tl3.from("#page3 .elem2 .right", {
        x: 50,
        opacity: 0
    }, "page32")

    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3 .elem3",
            start: "top 50%",
            end: "top 30%",
            scrub: true,
            stagger: 0.2
        }
    })

    tl4.from("#page3 .elem3 h2, #page3 .elem3 p", {
        x: -50,
        opacity: 0
    }, "page33")

    tl4.from("#page3 .elem3 .right", {
        x: 50,
        opacity: 0
    }, "page33")
}
page3Animation()

function page4Animation() {
    let headings = document.querySelectorAll("#page4 .page4-left h2");

    function splitText() {
        headings.forEach((heading) => {
            let clutter = "";
            let h2head = heading.textContent
            let splith2 = h2head.split("");
            splith2.forEach((e) => {
                clutter += `<span>${e}</span>`
            })

            heading.innerHTML = clutter
        })
    }

    function changeColor() {
        gsap.to("#page4 .page4-left h2 span", {
            color: "#55dd4a",
            stagger: 0.1,
            scrollTrigger: {
                trigger: "#page4",
                start: "top 50%",
                end: "top -30%",
                scrub: 1,
            }
        })
    }

    splitText()
    changeColor()
}
page4Animation()

function page5Animation() {
    let headings = document.querySelectorAll("#page5 .page5-top h2");

    function splitText() {
        headings.forEach((heading) => {
            let clutter = "";
            let h2head = heading.textContent
            let splith2 = h2head.split("");
            splith2.forEach((e) => {
                clutter += `<span>${e}</span>`
            })

            heading.innerHTML = clutter
        })
    }

    function changeColor() {
        gsap.to("#page5 .page5-top h2 span", {
            color: "#203d25",
            stagger: 0.1,
            scrollTrigger: {
                trigger: "#page5",
                start: "top 50%",
                end: "top -30%",
                scrub: 1,
            }
        })
    }

    splitText()
    changeColor()

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4",
            start: "top 50%",
            end: "top -30%",
            scrub: true,
        }
    })

    tl2.to(".page4Img1", {
        opacity: 1,
    })
    tl2.to(".page4Img2", {
        opacity: 1,
    })
    tl2.to(".page4Img3", {
        opacity: 1,
    })

}
page5Animation()

function page7Animation() {
    // gsap.to("#page7 .page7-text h2", {
    //     color: "#55dd4a",
    //     stagger: 0.2,
    //     scrollTrigger: {
    //         trigger: "#page7",
    //         start: "top 0%",
    //         end: "top -40%",
    //         scrub: 1,
    //     }
    // })

    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page7",
            start: "top 0%",
            end: "top -40%",
            scrub: 1,
        }
    })

    tl5.to("#page7 #page7t1", {
        color: "#55dd4a"
    })
    tl5.to("#page7 #page7t2", {
        color: "#55dd4a"
    })
    tl5.to("#page7 #page7t3", {
        color: "#55dd4a"
    })
    tl5.to("#page7 #page7t4", {
        color: "#55dd4a"
    })
    tl5.to("#page7 #page7t5", {
        color: "#55dd4a"
    })
}
page7Animation();



