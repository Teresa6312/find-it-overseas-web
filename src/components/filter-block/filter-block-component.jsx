import React from 'react';

class FilterBlock extends React.Component {

    constructor(props){
        super(props);
        this.state={
            // selectField : props.selectField,
        }
    }

    render(){
        return(
            <div className="tab-block">
                <input type="text" 
                        className="tab-block-text__input" 
                        placeholder="search posts" 
                        onChange={e=>{this.setState({selectField:e.target.value},()=>{
    
                        })}}/>
                {this.props.selectedTabs.map((tab, index)=>(
                    <div key={index} className="tab-block-tab__div">{tab}</div>
                ))}
            </div>
        );
    }



}

export default FilterBlock;