import { style } from "@vanilla-extract/css";
import { vars } from "../../../App.css";

export const sideForm = style({
    display:'flex',
    alignItems:"center",
    marginLeft:"auto"
})

export const input = style({
    padding:vars.spacing.small,
    fontSize:vars.fontSizing.T4,
    minHeight:30
})

export const icon = style({
    color:vars.color.brightText,
    fontSize:vars.fontSizing.T2,
    marginLeft:vars.spacing.medium,
    cursor:'pointer',
    ":hover":{
        opacity:0.8
    }
})

export const imgSet = style({
    borderRadius : '30px',
    width : '100%',
    height : '100%',
})

export const searchSet = style({
    color : "#808080",
    margin : '30px',
    display : 'flex',
    flexDirection : 'row',
    backgroundColor : vars.color.secondaryDarkTextHover,
    borderRadius : '30px',

})

export const textSet = style({
    margin : '30px',
    display : 'flex',
    flexDirection : 'column'
    
})


export const titleText = style({
    width : '99%',
    fontSize:vars.fontSizing.T1,
})

export const closeIcon = style({
    fontSize:vars.fontSizing.T1,
})

export const container = style({
    display : 'flex',
    flexDirection : 'column'
})