const images = [

"https://bloginspanish.wordpress.com/wp-content/uploads/2015/03/gfs_cloud_scale_datacenters_590x590.jpg",

"https://www.itexperts.com.br/wp-content/uploads/2022/10/20110333/300663-guia-completo-do-cloud-computing-para-pme-1.jpg",

"https://cd.foundation/wp-content/uploads/sites/35/2020/09/devops.png"

]

let i=0

setInterval(()=>{
i++
if(i>=images.length){i=0}
document.getElementById("slide").src=images[i]
},4000)

const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
})
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{
ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="white"
ctx.fill()
})

requestAnimationFrame(draw)

}

draw()