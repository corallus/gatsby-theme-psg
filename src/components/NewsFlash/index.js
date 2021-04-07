import React, {useEffect} from 'react'
import {graphql, useStaticQuery} from "gatsby";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

const NewsFlash = () => {
    const [modalShow, setModalShow] = React.useState(false);

    const data = useStaticQuery(graphql`
        query PopupQuery {
            markdownRemark(frontmatter: {templateKey: {eq: "popup"}}) {
                html
                frontmatter {
                    title
                    active
                    datetime
                }
            }
        }`
    )

    const {datetime, active} = data.markdownRemark.frontmatter

    useEffect(() => {
        const last_seen = localStorage.getItem('last_seen');
        if ((!last_seen || last_seen < datetime) && active) {
            setModalShow(true)
            localStorage.setItem('last_seen', datetime);
        }
    }, [datetime, active]);

    return (
        <Dialog
            open={modalShow}
            onClose={() => setModalShow(false)}
        >
            <DialogTitle>
                    {data.markdownRemark.frontmatter.title}
            </DialogTitle>
            <DialogContent dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}>
            </DialogContent>
            <DialogActions>
                <Button autoFocus color={'primary'} onClick={() => setModalShow(false)}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default NewsFlash