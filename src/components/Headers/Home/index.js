import React from 'react'
import {Header} from "../index";
import Summary from "../../Events/Summary";


export const HomeHeader = ({title, children}) => {
   return (
       <Header {...props}>
           <Summary />
       </Header>
   )
}