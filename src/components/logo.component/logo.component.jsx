import React from 'react';

const Logo =({className}) =>(
    <div className={className?className:"logo"}>
        <div className="logo-find">FIND</div>
        <div className= "logo-it">it</div>
        <div className="logo-o">O</div>
        <div className="logo-verseas">VERASEAS</div>
    </div>
);

export default Logo;