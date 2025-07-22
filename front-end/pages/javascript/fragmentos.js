
const logoURL = 'https://cms.ap.senac.br/storage/settings/YRPTJlh3XMC3WjMjpB3RKfqRwhmGAzc6Vud8Nmaj.png'
const container = document.getElementById('container')

// Use o "// #region" para delimitar áreas do código, 
// podendo ocultá-las ou mostrá-las quando quiser.

// #region TOPO

var topo = document.createDocumentFragment()

var containerTopo = document.createElement('div')
containerTopo.className = 'topo'

var logo = document.createElement('img')
logo.setAttribute('src', logoURL)
logo.setAttribute('alt', 'Logo')
logo.setAttribute('width', '70')
logo.setAttribute('height', '70')

var nav = document.createElement('nav')

var sobre = document.createElement('a')
sobre.setAttribute('href', '#')
sobre.textContent = "Sobre"

var servicos = document.createElement('a')
servicos.setAttribute('href', '#')
servicos.textContent = 'Serviços'

var login = document.createElement('a')
login.setAttribute('href', '#')
login.textContent = 'Login'

nav.append(sobre,servicos,login)
containerTopo.append(logo, nav)
topo.appendChild(containerTopo)
container.appendChild(topo)

// #endregion

// #region MAIN

const main = document.createDocumentFragment()

var title = document.createElement('div')
title.className = 'title'
var left = document.createElement('div')
left.className = 'left'
var right = document.createElement('div')
right.className = 'right'

var p1 = document.createElement('p')
p1.textContent = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
var p2 = document.createElement('p')
p2.innerText = `What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`
var p3 = document.createElement('p')
p3.innerText = `Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</br>
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
</br>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
</br>
Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
title.appendChild(p1)
left.appendChild(p2)
right.appendChild(p3)
main.append(title,left,right)
container.appendChild(main)
// #endregion
