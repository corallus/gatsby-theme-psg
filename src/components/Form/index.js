import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Recaptcha from "react-recaptcha"
import axios from 'axios'
import FieldWrapper from './FieldWrapper'
import { Helmet } from 'react-helmet';
import useSiteMetadata from "../SiteMetadata";
import {
    Box,
    Button,
    Checkbox,
    createStyles, FormControl,
    FormControlLabel,
    FormHelperText,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
        },
        formControl: {
            width: '100%'
        },
        button: {
        }
    }),
);
export const ResponseForm = () => {
    const classes = useStyles();

    const {domain} = useSiteMetadata()

    const api = `https://wlpbkbt4zc.execute-api.eu-central-1.amazonaws.com/production/contact`

    return (
        <Formik
            initialValues={{
                privacy: false,
                recaptcha: "",
                to: `info@${domain}`,
                response: {
                    naam: "",
                    email: "",
                    telefoonnummer: "",
                    bericht: ""
                }
            }}
            onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
                const httpOptions = {
                    headers: {
                        'Content-Type': 'application/json',
                        'g-recaptcha': values.recaptcha,
                    }
                };

                axios.post(api, values, httpOptions)
                    .then(res => {
                        setSubmitting(false);
                        resetForm({})
                        setStatus({ message: 'Het formulier is succesvol verstuurd' })
                    })
                    .catch(error => {
                        setStatus({ message: error.response.data })
                        setSubmitting(false)
                    });
            }}

            validationSchema={Yup.object().shape({
                response: Yup.object().shape({
                    naam: Yup.string()
                        .required('Verplicht'),
                    email: Yup.string()
                        .email('Geen juist mail adres')
                        .required('Verplicht'),
                    telefoonnummer: Yup.string(),
                    bericht: Yup.string()
                        .required('Verplicht'),
                }),
                privacy: Yup.boolean()
                    .oneOf([true], 'U dient akkoord te gaan met de privacy voorwaarden'),
                recaptcha: Yup.string()
                    .required('Verifieer dat je geen robot bent'),
            })}
        >
            {props => {
                const {
                    touched,
                    errors,
                    isSubmitting,
                    handleSubmit,
                    setFieldValue,
                    status
                } = props;
                return (
                    <form className={classes.root} onSubmit={handleSubmit}>
                        <Helmet>
                            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
                        </Helmet>

                        <FieldWrapper className={classes.formControl} id="naam" label="Naam" name="response.naam" type="text" />
                        <FieldWrapper className={classes.formControl} id="email" label="Email" name="response.email" type="email" />
                        <FieldWrapper className={classes.formControl} id="telefoonnummer" label="Telefoonnummer" name="response.telefoonnummer" type="tel" />
                        <FieldWrapper className={classes.formControl} id="bericht" label="Bericht" name="response.bericht" rows={5} multiline />

                        <FormControl className={classes.formControl} required error={errors.privacy && touched.privacy} component="fieldset">
                            <FormControlLabel
                                control={
                                    <FieldWrapper
                                        component={Checkbox}
                                        id={"privacy"}
                                        name="privacy"
                                    />
                                }
                                label={<span>Ik ga akkoord met de <a href="/static/privacy-statement.pdf" rel="noopener noreferrer" target="_blank"> privacy voorwaarden</a></span>}
                            />
                            {(errors.privacy && touched.privacy) &&
                            <FormHelperText>
                                {errors.privacy}
                            </FormHelperText>
                            }
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <Recaptcha
                                sitekey="6LeZnxkaAAAAAHsyk5igUVRWXPmLRz78Il6s8g0d"
                                render="explicit"
                                theme="light"
                                verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                                onloadCallback={() => { console.log("done loading!"); }}
                            />
                        </FormControl>

                        <Box className={classes.formControl} textAlign={'left'}>
                            <Button className={classes.button} color={'primary'} variant="contained" type="submit" disabled={isSubmitting} >
                                {isSubmitting ? 'Aan het versturen…' : 'Versturen'}
                            </Button>
                        </Box>
                        {status && status.message &&
                        <div>{status.message}</div>
                        }
                    </form>
                )
            }}
        </Formik>
    )
}