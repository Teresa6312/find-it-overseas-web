import React from 'react'
import PropTypes from "prop-types";

class Modal extends React.Component {
    
    onClose = e => {
        // this.props.onClose && this.props.onClose(e);
        this.props.onClose(e);
      };
    componentWillUnmount(e){
        this.onClose(e);
    }
    render(){
        if(!this.props.show){
            return null;
        }
        return (
            <div 
                className="modal"
                >
                <div className={`modal-content ${this.props.width}`}>
                <div className="modal-content-close-x" onClick={this.onClose} >&times;</div>
                    <div className="modal-content-title">
                    {this.props.title}
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