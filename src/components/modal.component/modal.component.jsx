import React from 'react'
import './model.style.scss'
class LogInModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show:this.props.show
        }
        console.log(this.state)
        console.log(this.props)

    }
    closeModal = () =>{
        this.setState({show:false})
    }
    render(){
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={this.closeModal}>&times;</span>
                    <p>Some text in the Modal..</p>
                    <div>
                    <button onClick={this.closeModal}>close</button>
                    </div>
                </div>
            </div>  
        )
    }
};
  
export default LogInModal