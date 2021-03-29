import React from 'react'
import { useFormikContext } from 'formik'
import {TextField} from "@material-ui/core";

export default (props) => {
    const { errors, touched } = useFormikContext()
    return (
        <TextField
            {...props}
            margin={'dense'}
            error={touched[props.name] && Boolean(errors[props.name])}
            helperText={touched[props.name] && errors[props.name]}
        />
    )
}
