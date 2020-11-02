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
		    </div>
		  );
	}
}
