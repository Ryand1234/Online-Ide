import React from 'react'
import IDE from '../component/ide.componenent'
import './main.css'
export class PAGE extends React.Component {
	
	render(){
		
		return (
		    <div>
		    	<div className="ide-head">
					<h1 className="ide-head-content"> Online IDE </h1>
				</div>
				<div className="ide-content">			
				      <IDE />
					
				</div>
				<footer className="ide-footer">
					<p className="ide-dev">Developed By Riyan Dhiman</p>
					<p className="ide-proj-link">Link to Project <a className="ide-link" href="https://github.com/Ryand1234/Online-Ide">Github</a></p>
				</footer>  
		    </div>
		  );
	}
}
