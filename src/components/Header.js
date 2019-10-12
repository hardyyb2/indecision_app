import React from 'react';


const Header = (props) =>(
      <div>
        <h1>{props.title}</h1>
        {<p>hoho</p>}
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    )
  
  Header.defaultProps = {
    title: 'Indecision'
  };
  
  export default Header;