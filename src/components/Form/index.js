import React from 'react'
import {Formik, Field, ErrorMessage, Form} from 'formik'
import * as Yup from 'yup'
import Recaptcha from "react-recaptcha"
import axios from 'axios'
import FieldWrapper from './FieldWrapper'
import { Helmet } from 'react-helmet';
import useSiteMetadata from "../SiteMetadata";
import {Button, Checkbox, createStyles, FormGroup, makeStyles, TextField} from "@material-ui/core";

const TextAreaField = (props) => {
    return (
        <Field as="textarea" rows={6} {...props} />
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '> *': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
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

                        <FieldWrapper id="naam" label="Naam" name="response.naam" type="text" />
                        <FieldWrapper id="email" label="Email" name="response.email" type="email" />
                        <FieldWrapper id="telefoonnummer" label="Telefoonnummer" name="response.telefoonnummer" type="tel" />
                        <FieldWrapper id="bericht" label="Bericht" name="response.bericht" type="textarea" component={TextAreaField} />

                        <label>
                            <Field
                                type="checkbox"
                                name="privacy"
                            />
                            <span>Ik ga akkoord met de <a href="/static/privacy-statement.pdf" rel="noopener noreferrer" target="_blank"> privacy voorwaarden</a></span>
                        </label>
                        {errors.privacy && touched.privacy ? (
                            <div>{errors.privacy}</div>
                        ) : null}

                        <Recaptcha
                            sitekey="6LeZnxkaAAAAAHsyk5igUVRWXPmLRz78Il6s8g0d"
                            render="explicit"
                            theme="light"
                            verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                            onloadCallback={() => { console.log("done loading!"); }}
                        />

                        <Button variant="contained" type="submit" disabled={isSubmitting} >
                            {isSubmitting ? 'Aan het versturen…' : 'Versturen'}
                        </Button>
                        {status && status.message &&
                        <div>{status.message}</div>
                        }
                    </form>
                )
            }}
        </Formik>
    )
}