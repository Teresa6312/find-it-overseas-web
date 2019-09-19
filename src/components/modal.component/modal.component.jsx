import React from 'react'
import SignInAndSignUp from '../sign-in-and-sign-up.component/sign-in-and-sign-up.componunt';

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            show:true
        }
    }
    closeModal = () =>{
        this.setState({show:false});
        window.location.reload();
    }
    render(){
        return (
            <div 
                className="modal"
                style={{display: this.props.show&&this.state.show? "block":"none"}}
                >
                <div className="modal-content">
                <div className="modal-content-close-x" onClick={this.closeModal}>&times;</div>
                    <div className="modal-content-title">
                    {this.props.title}
                    </div>
                    <SignInAndSignUp/>
                </div>
            </div>    
        )
    }
};
  

export default Modal