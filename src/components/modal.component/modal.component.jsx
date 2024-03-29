import React from 'react'
import PropTypes from "prop-types";
import {MdClose} from 'react-icons/md';
import Logo from '../logo.component/logo.component';

class Modal extends React.Component {
    
    onClose = () => {
        // this.props.onClose && this.props.onClose(e);
        this.props.onClose();
      };
    render(){
        if(!this.props.show){
            return null;
        }
        return (
            <div 
                className="modal"
                >
                <div className={`modal-content ${this.props.width}`}>
                    <div className="modal-content-close-x" onClick={this.onClose}><MdClose/></div>
                    <div className="modal-content-title">
                        {
                            this.props.title ?
                                this.props.title
                                :
                                <Logo className="logo-small"/>
                        }                   
                    </div>

                    
                    {this.props.children}
                </div>
            </div>    
        )
    }
};
  
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };

export default Modal