import MonacoEditor from 'react-monaco-editor'
import React, {useState} from 'react'
import useWindowDimensions from '../util/dimension';
import '../pages/main.css'

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

var python = `'''Write your code here'''
`

var c = `#include <stdio.h>

int main()
{
	//Enter your code here
	return 0;
}
`

var cpp = `#include <iostream>
using namespace std;

int main()
{
	//Enter your code here
	return 0;
}
`

var ruby = `#Write Your Code here
`

var tempCode = {
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


const IDE = () => {

	const {width, size, col} = useWindowDimensions();
	const [code, setCode] = useState(tempCode['typescript']);
	const [language, setLanguage] = useState('typescript');
	const [ext, setExt] = useState('ts');
	const [output, setOutput] = useState('');
	const [input, setInput] = useState('');

	const onChange = (newValue, e) =>{
		setCode(newValue)
	}

	const handleInput = (e) =>{
		setInput(e.target.value)
	}

	const handleLanguage = (e) =>{
		setLanguage(clanguage[e.target.value]);
		setExt(e.target.value);
		setCode(tempCode[clanguage[e.target.value]]);
		setOutput('')
		setInput('')

	}	

	const handleSubmit = async(e) => {
		e.preventDefault();
		var data = {
			code: code,
			input: input,
			lang: ext
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
		setOutput(ndata.output||ndata.error)
	}

	const options = {
      selectOnLineNumbers: true,
      fontSize: {size},
      colorDecorators: true
    };
	return(
		<>
		<div>
			<MonacoEditor
				width={width}
				height="300"
				defaultValue=''
				value={code}
				theme="vs-dark"
				options={options}
				language={language}
				onChange={onChange}
			/>
			<select onChange={handleLanguage} name="lang">
				<option  value="typescript">TypeScript</option>
				<option value="c">C</option>
				<option value="cpp">C++14</option>
				<option value="py">Python3</option>
				<option  value="rb">Ruby</option>
			</select>
			<button onClick={handleSubmit}>Run</button>
			</div>
			<div className="columns is-mobile">
			  <div className="column">
			  	<p style={{color: 'white', backgroundColor: 'black' }}>Input</p>
				<div className="control">
	 				<textarea onKeyUp={handleInput} style={{borderColor: 'black', color: 'white', backgroundColor: 'black' }} className="textarea has-fixed-size" rows="7" cols={col} placeholder="Input" ></textarea>
	 			</div>
			  </div>
			  <div className="column">
			  	<p style={{color: 'white', backgroundColor: 'black' }}>Output</p>
				<div className="control">
	 				<textarea style={{borderColor: 'black', color: 'white', backgroundColor: 'black' }} className="textarea has-fixed-size" rows="7" cols={col} placeholder={output} readOnly>{output}</textarea>
	 			</div>
			  </div>
			</div>
 			<footer className="ide-footer">
				<p className="ide-dev">Developed By Riyan Dhiman</p>
				<p className="ide-proj-link">Link to Project <a className="ide-link" href="https://github.com/Ryand1234/Online-Ide">Github</a></p>
			</footer>
		
	</>)
}
//"proxy": "https://floating-oasis-63694.herokuapp.com/",
export default IDE;