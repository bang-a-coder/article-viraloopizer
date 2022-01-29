import "./styles.scss";

let transformBtn = document.querySelector('.adapt')

function getClipboard(){
	const text = document.querySelector('.paste-code').value

	return text
}

function transform(){
	let htmlOG = getClipboard()

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

