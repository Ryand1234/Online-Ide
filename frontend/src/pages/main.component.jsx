import React from 'react'
import {IDE} from '../component/ide.componenent'
import './main.css'
export class PAGE extends React.Component {
	render(){
		handleLanguage(e){
			this.setState({language: e.value, code: code[e.value]})
		}
		return (
		    <div>
		    	<div className="ide-head">
					<h1 className="ide-head-content"> Online IDE </h1>
				</div>
				<table>
					<tr>
						<th style={{color: 'white' }}>Text Color  |</th>
						<th style={{color: 'white' }}>  Code Background Color  |</th>
						<th style={{color: 'white' }}>  Background Color  |</th>
						<th style={{color: 'white' }}>  Font Size  |</th>
					</tr>
					<tr>
						<th>
							<select>
								<option onclick="txtColor(event)" value="red">Red</option>
								<option onclick="txtColor(event)" value="blue">Blue</option>
								<option onclick="txtColor(event)" value="green">Green</option>
								<option onclick="txtColor(event)" value="cyan">Cyan</option>
								<option onclick="txtColor(event)" value="black">Black</option>
								<option onclick="txtColor(event)" value="yellow">Yellow</option>
							</select>
						</th>
						<th>
							<select >
								<option onclick="ediBackColor(event)" value="red">Red</option>
								<option onclick="ediBackColor(event)" value="grey">Grey</option>
								<option onclick="ediBackColor(event)" value="white">white</option>
								<option onclick="ediBackColor(event)" value="blue">Blue</option>
								<option onclick="ediBackColor(event)" value="green">Green</option>
								<option onclick="ediBackColor(event)" value="cyan">Cyan</option>
								<option onclick="ediBackColor(event)" value="black">Black</option>
								<option onclick="ediBackColor(event)" value="yellow">Yellow</option>
							</select>
			
						</th>
						<th>
							<select >
								<option onclick="backColor(event)" value="red">Red</option>
								<option onclick="backColor(event)" value="grey">Grey</option>
								<option onclick="backColor(event)" value="white">white</option>
								<option onclick="backColor(event)" value="blue">Blue</option>
								<option onclick="backColor(event)" value="green">Green</option>
								<option onclick="backColor(event)" value="cyan">Cyan</option>
								<option onclick="backColor(event)" value="black">Black</option>
								<option onclick="backColor(event)" value="yellow">Yellow</option>
							</select>
						</th>
						<th>
							<select>
								<option onclick="font(event)" value="5px">5px</option>
								<option onclick="font(event)" value="10px">10px</option>
								<option onclick="font(event)" value="15px">15px</option>
								<option onclick="font(event)" value="20px">20px</option>
								<option onclick="font(event)" value="25px">25px</option>
								<option onclick="font(event)" value="30px">30px</option>
							</select>
						</th>
					</tr>
				</table>
				<div className="ide-content">			
				      <IDE />
					<form method="POST" action="/submit">
							<Select options={this.state.selectOptions} onChange={this.handleLanguage.bind(this)} />
							<button>Run</button>
					</form>
				</div>
				<footer className="ide-footer">
					<p className="ide-dev">Developed By Riyan Dhiman</p>
					<p className="ide-proj-link">Link to Project <a className="ide-link" href="https://github.com/Ryand1234/Online-Ide">Github</a></p>
				</footer>  
		    </div>
		  );
	}
}
