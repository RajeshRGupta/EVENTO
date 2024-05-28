import React from 'react'
import {TextField,Autocomplete} from '@mui/material';

const SelectField = ({ field, form,label,options,onChange }) => {
    return (
        <div>
            <Autocomplete
                {...field}
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label={label} />}
                onChange={(_,e, value) => {
                    onChange(e.target.value)
                    form.setFieldValue(field.name, value)
                }}
            />
        </div>
    )
}

export default SelectField
