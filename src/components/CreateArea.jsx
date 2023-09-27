import React, {useState} from "react"
import AddIcon from '@mui/icons-material/Add'
import Fab from '@mui/material/Fab'
import Zoom from '@mui/material/Zoom'

function CreateArea(props){

	const [isExpanded, setExpanded] = useState(false)
	const [input, setInput] = useState({
		title: "",
		content: ""
	})

	function preventRefresh(event){
		event.preventDefault()
	}

	function expand(){
		setExpanded(true)
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
			<form className="create-note" onSubmit={preventRefresh}>
				{isExpanded && 
					<input onChange={updateInput} name="title" placeholder="Title" value={input.title} />
				}
				<textarea onClick={expand} onChange={updateInput} name="content" placeholder="Take a Note..." rows={isExpanded ? "3" : "1"} value={input.content} />
				<Zoom in={isExpanded}>
				<Fab onClick={() => {
					props.addNote(input)
					setInput({
						title: "",
						content: ""
					})
					setExpanded(false)
				}}><AddIcon /></Fab>
				</Zoom>
			</form>
		</div>
	)
}
export default CreateArea