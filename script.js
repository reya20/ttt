const question = document.querySelector(".question");
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = " I Love ya so much";
    gif.src="https://media.tenor.com/O0L78rE1EZQAAAAC/milk-and-mocha-cute.gif"
})

noBtn.addEventListener("mouseover", ()=> {
    const noBtnRect =noBtn.getBoundingClientRect();
    const maxX = Window.innerWidth - noBtnRect.width;
    const maxY = Window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomy = Math.floor(Math.random() * maxY)

    noBtn.style.left =randomX + "px";
    noBtn.style.top =randomX + "px";
})