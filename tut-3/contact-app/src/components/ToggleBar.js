import React from "react";


class ToggleBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            viewModeStatus:"",
            backgroundTheme:"bg-dark"
        };
    }

    viewModeFunction = () =>{
        
    }

    backgroundThemeFunction = (backgroundTheme) =>{
        if(backgroundTheme==="bg-dark")
        {
            this.setState({backgroundTheme:"bg-light"})
        }
        else{
            this.setState({backgroundTheme:"bg-dark"})
        }
    }

    render(){
        return(
            <>
            <div className={`container-fluid ${this.state.backgroundTheme} bg-gradient align-items-end`}>
                <div className="row justify-content-end">
                    <div className="col-2 p-1">
                        <button className={"btn btn-primary m-0"} onClick={this.backgroundThemeFunction(this.state.backgroundTheme)}>dark Mode</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
    
}

export default ToggleBar;