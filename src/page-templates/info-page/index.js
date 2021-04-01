import React from 'react'
import Section from "../../components/Section";
import {graphql} from "gatsby";
import Info from "../../components/Info";
import {Page} from "../../components/Page";
import {ResponseForm} from "./form";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
    },
    contact: {
        margin: theme.spacing(0, 'auto')
    },
}));
const InfoPageTemplate = ({data}) => {
    return (
        <Page markdown={data.markdownRemark}>
            {data.allMarkdownRemark.group.map((group, i) =>
                <Section title={group.fieldValue} key={i}>
                    <Info items={group.nodes}/>
                </Section>
            )}
            <Section title={'Antwoord niet gevonden?'}>
                <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />

                <div style={{maxWidth: '450px', margin: '0 auto'}}>
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