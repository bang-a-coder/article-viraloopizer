import "./styles.scss";

let transformBtn = document.querySelector('.adapt')
let codeScr = document.querySelector('#input')
let codeOut = document.querySelector('#output')
let workbench = document.querySelector('.workbench')

function getClipboard(){
	return codeScr.value
}

function pasteOutput(html) {
	codeOut.value = html.innerHTML

	codeScr.classList.add('collapse')
	codeOut.classList.add('expand')
}


function transform(){
	let htmlOG = getClipboard()
	workbench.innerHTML = htmlOG

	let links = workbench.querySelectorAll('a')

	//make all link open in new tab
	links.forEach(a=>{
		a.target = '_blank'
	})

	//delete new lines


	//Remove descriptive headings


	//make make images large & aligncenter
	let images = workbench.querySelectorAll('img')

	images.forEach(img =>{
		img.classList.remove('size-medium', 'alignleft')
		img.classList.add('size-large', 'aligncenter')
		let ratio = parseFloat(img.width / img.height)

		if (ratio < 1) {
			img.setAttribute('height', '1024')
			img.setAttribute('width', `${Math.ceil(1024*ratio)}`)
		} else {
			img.setAttribute('width', '1024')
			img.setAttribute('height', `${Math.ceil(1024 / (ratio))}`)
		}
	})


	//center align "image-souce"
	let spans = workbench.querySelectorAll('span')

	spans.forEach(span=>{
		if (span.innerHTML.includes("Image Source:")) {
			let linkAfter = span.nextSibling

			let p = document.createElement('p')
			let em = document.createElement('em')
			span.parentNode.insertBefore(em, span)
			em.appendChild(span)
			em.appendChild(linkAfter)
			p.setAttribute('style', "text-align: center;")
			em.parentNode.insertBefore(p, em)
			p.appendChild(em)
		}
	})

	//italics "image souce"


	//remove bold from headings


	//Add links to table of contents


	pasteOutput(workbench)
	return workbench
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

