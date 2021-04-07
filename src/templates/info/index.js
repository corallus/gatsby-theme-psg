import React from 'react'
import Section from "../../components/Section";
import {graphql} from "gatsby";
import Content from "./category";
import {Page} from "../../components/Page";
import {ResponseForm} from "./form";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    contact: {
        margin: theme.spacing(0, 'auto'),
        maxWidth: '450px'
    },
}));
const InfoPageTemplate = ({data}) => {
    const classes = useStyles()
    return (
        <Page markdown={data.markdownRemark}>
            {data.allMarkdownRemark.group.map((group, i) =>
                <Section title={group.fieldValue} key={i}>
                    <Content items={group.nodes}/>
                </Section>
            )}
            <Section title={'Antwoord niet gevonden?'}>
                <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />

                <div className={classes.contact}>
                    <ResponseForm />
                </div>
            </Section>
        </Page>
    )
}

export const query = graphql`
    query InfoPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
            html
            frontmatter {
                title
                description
            }
        }
        allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___order] }
            filter: { frontmatter: { templateKey: { eq: "info" } } }
        ) {
            group(field: frontmatter___category) {
                fieldValue
                nodes {
                    ...Topic
                }
            }
        }
    }
`

export default InfoPageTemplate