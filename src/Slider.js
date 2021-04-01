import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches() {
    const [state, setState] = React.useState({
      checkedA: false
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
    console.log(state);
    return (
        <div className="slideOne">
            <Switch 
            onChange={handleChange}
            color="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}
            />
         </div>
  );
}