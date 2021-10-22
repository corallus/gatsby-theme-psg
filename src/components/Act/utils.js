import {lineupParams} from "../../params";

export const renderTitle = (act) => act.announced ? act.artist.frontmatter.title : lineupParams.artist.emptyText