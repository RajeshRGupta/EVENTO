import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import NoteContext from '../../context/NotContext';



export default function DropDown(props) {
  const [show, setShow] = React.useState(true)
  const currencies = props.massage
  const default12 = props.default

  const context = React.useContext(NoteContext)

  console.log('datatatatat', props.default)


  return (
    <Box
      className='ps-2'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        {/* {
          props.plece==='Genar'?
          
        } */}
        <select className=' w-100' placeholder={props.plece} onClick={() => setShow(false)} style={{height:'50px',border:'solid 1px rgba(0, 0, 0, 0.2)',borderRadius:'5px'}} name="" id="" onChange={(event) => props.onChange(event.target.value)} >
       <option value="">{props.plece}</option>
        {currencies&&
          currencies.map((option) => (
            option.id===props.default?
            <option key={option.id} value={option.id} selected>
              {
                props.plece==='Genar'?
                option.categry[0].toUpperCase() + option.categry.slice(1):
                option.Location[0].toUpperCase() + option.Location.slice(1)
              }
              {/* {option.categry[0].toUpperCase() + option.categry.slice(1)} */}
            </option> : <option key={option.id} value={option.id}>
            {
                props.plece==='Genar'?
                option.categry[0].toUpperCase() + option.categry.slice(1):
                option.Location[0].toUpperCase() + option.Location.slice(1)
              }
              {/* {option.categry[0].toUpperCase() + option.categry.slice(1)} */}
            </option>
           ))}
        </select>

      </div>
    </Box>
  );
}
