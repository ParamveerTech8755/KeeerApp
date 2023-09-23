import React, {useState} from "react"

function CreateArea(props){

	const [input, setInput] = useState({
		title: "",
		content: ""
	})

	function preventRefresh(event){
		event.preventDefault()
	}

	function updateInput(event){
		const {name, value} = event.target
		setInput(prev => {
			return {
				...prev,
				[name]: value
			}
		})
	}

	// function handleClick(){
	// 	//
	// 	setInput({})
	// }
 
	return (
		<div>
			<form onSubmit={preventRefresh}>	
				<input onChange={updateInput} name="title" placeholder="Title" value={input.title} />
				<textarea onChange={updateInput} name="content" placeholder="Take a Note..." rows="3" value={input.content} />
				<button onClick={() => {
					props.addNote(input, setInput)
					setInput({
						title: "",
						content: ""
					})
				}}>Add</button>
			</form>
		</div>
	)
}
export default CreateArea