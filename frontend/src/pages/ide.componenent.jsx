import MonacoEditor from 'react-monaco-editor'
import React from 'react'
import Select from 'react-select'

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


export class IDE extends React.Component {

	constructor(props)
	{
		super(props);
		this.state={
			selectOptions: [{value: 'typescript', label: 'typescript'},{value: 'cpp', label: 'cpp'}, {value: 'c', label: 'c' }, {value: 'python', label: 'python'}, {value: 'ruby', label: 'ruby'}],
			code: code['typescript'],
			language: "typescript"
		}
	}

	onChange = (newValue, e) =>{
		console.log("CHnage: ", newValue," E: ",e)
		this.setState({code: newValue})
	}

	show = () =>{
		console.log("CODE: ", this.state.code)
	}

	handleLanguage(e){
		this.setState({language: e.value, code: code[e.value]})
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
				width="600"
				height="400"
				defaultValue=''
				value={this.state.code}
				theme="vs-dark"
				options={options}
				language={this.state.language}
				onChange={this.onChange}
			/>
			<button onClick={this.show}>
				Show code
			</button>
			<Select options={this.state.selectOptions} onChange={this.handleLanguage.bind(this)} />
			</div>
		)
	}
}
