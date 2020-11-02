import MonacoEditor from 'react-monaco-editor'
import React, {useEffect, useState} from 'react'
import useWindowDimensions from '../util/dimension';

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

	const {width, size} = useWindowDimensions();
	const [code, setCode] = useState(tempCode['typescript']);
	const [language, setLanguage] = useState('typescript');
	const [ext, setExt] = useState('ts');
	const [output, setOutput] = useState('');

	const onChange = (newValue, e) =>{
		console.log("CHnage: ", newValue," E: ",e)
		setCode(newValue)
	}

	const show = () =>{
		console.log("CODE: ", code)
	}

	

	const handleLanguage = (e) =>{
		setLanguage(clanguage[e.target.value]);
		setExt(e.target.value);
		setCode(tempCode[clanguage[e.target.value]]);
		setOutput('')

	}	

	const handleSubmit = async(e) => {
		e.preventDefault();
		var data = {
			code: code,
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
		setOutput(ndata.output)
	}

		const options = {
	      selectOnLineNumbers: true,
	      fontSize: {size},
	      colorDecorators: true
	    };
		return(
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
				<div>
					<p style={{color: 'white'}}>{output}</p>
				</div>
				<div class="box">
				  <article class="media">
				    <div class="media-content">
				      <div class="content">
				        <p>
				          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
				          <br />
				          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
				        </p>
				      </div>
				      <nav class="level is-mobile">
				        <div class="level-left">
				          <a class="level-item" aria-label="reply">
				            <span class="icon is-small">
				              <i class="fas fa-reply" aria-hidden="true"></i>
				            </span>
				          </a>
				          <a class="level-item" aria-label="retweet">
				            <span class="icon is-small">
				              <i class="fas fa-retweet" aria-hidden="true"></i>
				            </span>
				          </a>
				          <a class="level-item" aria-label="like">
				            <span class="icon is-small">
				              <i class="fas fa-heart" aria-hidden="true"></i>
				            </span>
				          </a>
				        </div>
				      </nav>
				    </div>
				  </article>
				</div>
			</div>
		)
}

export default IDE;