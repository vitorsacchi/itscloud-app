// ============ CARROSSEL DE IMAGENS ============
const images = [
  "https://bloginspanish.wordpress.com/wp-content/uploads/2015/03/gfs_cloud_scale_datacenters_590x590.jpg",
  "https://www.itexperts.com.br/wp-content/uploads/2022/10/20110333/300663-guia-completo-do-cloud-computing-para-pme-1.jpg",
  "https://cd.foundation/wp-content/uploads/sites/35/2020/09/devops.png"
]

let i = 0
setInterval(() => {
  i++
  if (i >= images.length) { i = 0 }
  document.getElementById("slide").src = images[i]
}, 4000)

// ============ PARTÍCULAS ============
const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2
  })
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  particles.forEach(p => {
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fillStyle = "white"
    ctx.fill()
  })
  requestAnimationFrame(draw)
}
draw()

// ============ FORMULÁRIO DE CONTATO ============
const API_URL = "https://zu309dxp93.execute-api.us-east-1.amazonaws.com/contact"

async function enviarFormulario(event) {
  event.preventDefault()

  const nome     = document.getElementById("nome").value
  const email    = document.getElementById("email").value
  const mensagem = document.getElementById("mensagem").value
  const botao    = document.getElementById("btn-enviar")
  const feedback = document.getElementById("feedback")

  botao.disabled = true
  botao.textContent = "Enviando..."

  try {
    const resposta = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, mensagem })
    })

    const dados = await resposta.json()

    if (resposta.ok) {
      feedback.style.color = "#4CAF50"
      feedback.textContent = "✅ Mensagem enviada com sucesso! Em breve entraremos em contato."
      document.getElementById("form-contato").reset()
    } else {
      feedback.style.color = "#f44336"
      feedback.textContent = "❌ " + (dados.erro || "Erro ao enviar. Tente novamente.")
    }

  } catch (erro) {
    feedback.style.color = "#f44336"
    feedback.textContent = "❌ Erro de conexão. Verifique sua internet e tente novamente."
  } finally {
    botao.disabled = false
    botao.textContent = "Enviar Mensagem"
  }
}