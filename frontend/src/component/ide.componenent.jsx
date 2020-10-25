import MonacoEditor from 'react-monaco-editor'
import React from 'react'

var typescript = `

//Define TypeScript Interface
interface IPerson{
	name: String;
	age: Number;
	mobile: Number;
}

//TypeScript Interface can be used 
//to know what values a variable holds.
const Aman:IPerson = {
	name: "Aman",
	age: 23,
	mobile: 9874563215
}
`

var python = `
//Write your code here
`

var c = `
#include <stdio.h>

int main()
{
	//Enter your code here
	return 0;
}
`
var code = {
	python: python,
	c: c,
	typescript: typescript
}

var clanguage = {}

clanguage['c'] = 'c';
clanguage['cpp'] = 'cpp';
clanguage['rb'] = 'ruby';
clanguage['py'] = 'python';
clanguage['typescript'] = 'typescript';


export class IDE extends React.Component {

	constructor(props)
	{
		super(props);
		this.state={
			code: code['typescript'],
			language: "typescript"
		}
	}

	editorDidMount = (editor) => {
	    // eslint-disable-next-line no-console
	    console.log("editorDidMount", editor, editor.getValue(), editor.getModel());
	    this.editor = editor;
	};

	onChange = (newValue, e) =>{
		console.log("CHnage: ", newValue," E: ",e)
		this.setState({code: newValue})
	}

	show = () =>{
		console.log("CODE: ", this.state.code)
	}

	

	handleLanguage = (e) =>{
		this.setState({language: clanguage[e.target.value], code: code[clanguage[e.target.value]]})
	}	

	handleSubmit = async(e) => {
		e.preventDefault();
		var data = {
			code: this.state.code,
			lang: this.state.language
		}
		var options = {
			method: 'POST',
			body: JSON.stringify(data)
		}
		var res = await fetch("http://localhost:5000/submit", options);
		console.log("D: ", res);
	}

	render(){
		const options = {
	      selectOnLineNumbers: true,
	      fontSize: 15,
	      colorDecorators: true
	    };
		return(
			<div>
				<MonacoEditor
					width="1300"
					height="300"
					defaultValue=''
					value={this.state.code}
					theme="vs-dark"
					options={options}
					language={this.state.language}
					editorDidMount={this.editorDidMount}
					onChange={this.onChange}
				/>
				<select onChange={this.handleLanguage} name="lang">
					<option  value="typescript">TypeScript</option>
					<option value="c">C</option>
					<option value="cpp">C++14</option>
					<option value="py">Python3</option>
					<option  value="rb">Ruby</option>
				</select>
				<button onClick={this.handleSubmit}>Run</button>
			</div>
		)
	}
}

