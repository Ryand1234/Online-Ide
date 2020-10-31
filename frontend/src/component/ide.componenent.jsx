import MonacoEditor from 'react-monaco-editor'
import React from 'react'

var typescript = `//Define TypeScript Interface
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

var python = `''Write your code here'''
`

var c = `#include <stdio.h>

int main()
{
	//Enter your code here
	return 0;
}
`

var cpp = `#include <iostream>

int main()
{
	//Enter your code here
	return 0;
}
`

var ruby = `#Write Your Code here
`

var code = {
	python: python,
	c: c,
	typescript: typescript,
	cpp: cpp,
	ruby: ruby
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
			language: "typescript",
			ext: "ts",
			output: ''
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
		this.setState({output: '', ext: e.target.value, language: clanguage[e.target.value], code: code[clanguage[e.target.value]]})
	}	

	handleSubmit = async(e) => {
		e.preventDefault();
		var data = {
			code: this.state.code,
			lang: this.state.ext
		}
		var options = {
			method: 'POST',
			headers: {
		      'Content-type': 'application/json',
		      Accept: 'application/json'
		    },
			body: JSON.stringify(data)
		}
		var res = await fetch("submit", options);
		var ndata = await res.json()
		this.setState({output: ndata.output})
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
				<div>
					<p style={{color: 'white'}}>{this.state.output}</p>
				</div>
			</div>
		)
	}
}

