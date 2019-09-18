import React from 'react'

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

                    {this.props.content}
                    <div className="modal-content-buttons">
                        <button className="modal-content-buttons__button" onClick={this.closeModal}> close </button>
                        {
                            this.props.button ?
                            <button className="modal-content-buttons__button" onClick={this.props.handelChange}> 
                                {this.props.button} 
                            </button>
                            : 
                            null
                        }
                    </div>
                </div>
            </div>    
        )
    }
};
  

export default Modal