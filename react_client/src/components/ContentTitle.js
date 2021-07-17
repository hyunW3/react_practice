import React from 'react';

class ContentTitle extends React.Component {
	PostContent = () => {
		console.log("POST clicked")
	}
	render(){
		const buttonStyle = { color:'black','textAlign':'right','border':'2px solid black' };
		return(
		<div>
			<div className="contents_title">
				<div>
        			<h1 style={{'paddingRight' : '350px',}}>Contents</h1> 
				</div>
				<div>
					<button style={buttonStyle} onClick={this.PostContent}> POST </button>
				</div>
			</div>
			<hr/>
		</div>
		)
	};
}
export default ContentTitle;