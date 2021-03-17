import React from 'react'
import { useFormikContext } from 'formik'
import {TextField} from "@material-ui/core";

export default ({ label, id, name, type }) => {
    const { errors, touched } = useFormikContext()
    return (
        <TextField
            name={name}
            id={id}
            label={label}
            type={type}
            error={touched[name] && Boolean(errors[name])}
            helperText={touched[name] && errors[name]}
        />
    )
}
