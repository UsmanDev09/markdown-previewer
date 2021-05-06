import React from "react";
import Badge from "react-bootstrap/Badge";
let marked = require("marked");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# usman 
## usman
### usman
#### usman 
##### usman 

- 1  
       
    
      `,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    

    return (
      <div className="App">
        
              
      <div style = {{width:"100vw"}}> 
      <div style = {{width:"50%",margin : "0 auto",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <h1>
                  Markdown Previewer
                </h1>
             
        
              <div className="input" style = {{justifyContent:"center"}}>
                <h3>Type something</h3>
                <textarea 
                  style = {{minHeight:"200px", height:"auto",width:"200px",margin:"0 auto",justifyContent:"center"}}
                  className="input"
                  
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                ></textarea>
              </div>
           
            <div >
            
             
              
                  <h3>
                    Preview 
                  </h3>
          
            
              <div style = {{border:"1px solid black",width:"200px",minHeight:"200px",height:"auto"}}
             
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
              </div>
       </div>
       </div>
       </div>
   
    );
  }
}