import "./styles.scss";

let transformBtn = document.querySelector('.adapt')
let codeScr = document.querySelector('#input')
let codeOut = document.querySelector('#output')

function getClipboard(){
	return codeScr.value
}

function pasteOutput(html) {
	codeOut.value = html

	codeScr.classList.add('collapse')
	codeOut.classList.add('expand')
}


function transform(){
	let htmlOG = getClipboard()

	pasteOutput(htmlOG)
	return htmlOG
}










transformBtn.addEventListener('click', ()=>{
	console.log('enter')
	console.log(transform())
})

window.addEventListener('keydown', (e)=>{
	if (e.key === 'Enter') {
		console.log('enter')
		console.log(transform())
	}
})

