import React, {useState, useEffect, Component} from 'react';


class ContentsList extends Component {
  constructor(props){
	  super(props)
	  this.state = {
		 contents : [{
			 id : "",
			 title : "",
			 date : "",
			 thumbs : "",
	  	}],
	  }
  }
  thumbs_up = (id) => {
	  let newArr = [...this.state.contents]
	  //console.log(newArr)
	  newArr.map(data =>{
		  if(data.id === id) {
			data.thumbs = data.thumbs + 1
		  }
	  });
	  this.setState({newArr})
	  
	  
  }
  componentDidMount() {
    fetch('/titles')
      .then(res => res.json())
	  .then(res => {
		res.map((data) => {
			if (data.id === 1){
				this.setState({ contents : [data] } )
			}else {
				this.setState({
					contents : [...this.state.contents ,data]
				})
				
			}
			//console.log(this.state.contents)
		});
	  })
	
  };
  
	render(){
		
		return(
			<div className="contents">
			<p>{this.state.contents.title}</p>
			{this.state.contents.map(content =>
          		<div key={content.id}>
            		<h3>
						{content.title} 
						<p onClick={this.thumbs_up.bind(this,content.id)}>
						 👍{content.thumbs}
						</p>
					</h3>
					{content.date}에 작성
					<hr/>
          		</div>
        	)}
			</div>
		)
		
	}
}
export default ContentsList;