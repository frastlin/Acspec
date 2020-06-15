import React from "react"
import ReactDOM from 'react-dom'

export default function Demo(props){
	/*
		title: STR, a string that is the title of the section, as well as the title of the window that opens
		children: elements, pass in the elements you wish to demo.
	*/

	const title = props.title ? props.title + " | Demo" : "Demo"

function openWindow(){
const data = `<div id="root"></div>`
	const w = window.open("about:blank", "_blank")
	w.document.head.innerHTML = `<title>${title}</title>`
	w.document.body.innerHTML = data
	ReactDOM.render(props.children, w.document.getElementById('root'))
	w.focus()
}

	return(
	<pre role="region" aria-label={title}>
	{props.children}
	<button onClick={openWindow} style={{backgroundColor: 'black', color: 'white', fontSize: "1.3em"}}>Launch</button>
	</pre>
	)
}