import React, {useState} from "react"
import Header from "./Header.jsx"
import Note from "./Note.jsx"
import Footer from "./Footer.jsx"
import CreateArea from "./CreateArea"


function App(){

	const [notes, setNotes] = useState([])

	function addNote(note){
		if(note.title || note.content)
			setNotes(prevVal => [...prevVal, note])
	}
	function deleteNote(ind){
		setNotes(prevVal => {
			return prevVal.filter((note, index) => {
				return (index !== ind)
			})
		})
	}

	return (
		<div>
			<Header />
			<CreateArea addNote={addNote} />
			<div className="note-container">
			{notes.map((note,ind) =>
				<Note
				key={ind}
				id={ind}
				title={note.title}
				content={note.content}
				deleteNote={deleteNote}
				/>
			)}
			</div>
			<Footer />
		</div>
		)
}

export default App

