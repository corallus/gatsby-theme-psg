import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Helmet } from 'react-helmet';

import useSiteMetadata from "gatsby-theme-psg/src/components/SiteMetadata";

import FormDisplay from "./form";

const ContactForm = () => {
    const {domain} = useSiteMetadata()

    const api = `https://wlpbkbt4zc.execute-api.eu-central-1.amazonaws.com/production/contact`

    return (
        <>
            <Helmet>
                <script src="https://www.google.com/recaptcha/api.js" async defer></script>
            </Helmet>

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
                {props => <FormDisplay {...props}/>}
            </Formik>
        </>
    )
}

export default ContactForm