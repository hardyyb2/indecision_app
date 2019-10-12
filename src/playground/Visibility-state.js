class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            details: "show details",
            para : "how are you doing",
            visibility:true
        }
    }
    handleVisibility(){
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick ={this.handleVisibility}>{this.state.details}</button>
            {this.state.visibility && <p>{this.state.para}</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector(`#app`))