import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const container = style({
    color : vars.color.brightText,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    flexWrap :'wrap',
    rowGap:15,
    minHeight:'max-content',
    padding : vars.spacing.big2,
    backgroundColor: vars.color.mainDarker
})

export const title = style({
    fontWeight:'bold',
    color : vars.color.brightText,
    fontSize : vars.fontSizing.T2,
    marginRight:vars.spacing.big1
})


export const boardItem = style({
    color:vars.color.brightText,
    fontSize : vars.fontSizing.T3,
    padding:vars.spacing.medium,
    cursor : 'pointer',
    fontWeight:'bold',
})

export const boardItemActive = style({
    color : vars.color.textDark,
    fontSize : vars.fontSizing.T3,
    padding:vars.spacing.medium,
    cursor : 'pointer',
    fontWeight:'bold',
})

export const addSection = style({
    display:'flex',
    alignItems:"center",
    marginLeft:"auto"
})

export const loginBox = style({
    margin:'2px',
    fontSize : vars.fontSizing.T4,
    ":hover":{
        boxShadow:vars.shadow.basic,
        opacity:0.8
    }
})

export const customLink = style({
    color : '#808080',
    textDecoration : 'none',
    ":hover" : {
        color:'0056b3'
    }
})


export const loginBox_container = style({
    display:'flex',
    flexDirection :"row",
    justifyContent : 'center',
    gap : '20px'
})