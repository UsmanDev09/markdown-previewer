import React, {Component,Fragment} from 'react';
let marked = require("marked")
class Main extends Component{
    state = {
        type: ''
    }
     onType = (e) => {
        this.setState (
            {
                type : e.target.value,
                
            }
        )         
    }
    render(){
         
      
        
       console.log(marked("# s"))
        const {type} = this.state;
      
        
        return(
            <Fragment>
                <textarea id="editor" onChange = {this.onType} value = {type}>


                </textarea>
                <div id="preview">
                    <div dangerouslySetInnerHTML = {{__html:marked(type)}}></div>
                </div>
            </Fragment>
        )
    }
}
export default Main;