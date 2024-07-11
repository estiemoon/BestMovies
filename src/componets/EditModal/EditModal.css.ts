import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const wrapper = style({
    width:"100vw",
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    zIndex:10000
})

export const modalWindow = style({
    display:'flex',
    flexDirection:'column',
    width:'80%',
    height:'80%',
    overflowY:"auto",
    backgroundColor:vars.color.mainDarker,
    opacity:0.95,
    borderRadius:14,
    padding:20,
    boxShadow:vars.shadow.basic,
    color:vars.color.brightText
})

export const header = style({
    width : "100%",
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"40px"
})

export const closeButton = style({
    fontSize : vars.fontSizing.T2,
    cursor : "pointer",
    marginTop : "-20px",
    ":hover":{
        opacity:0.8
    }
})

export const title = style({
    fontSize : vars.fontSizing.T2,
    color:vars.color.darkText,
    marginRight : 'auto',
    marginBottom : vars.spacing.medium
})



export const input = style({
    width :"100%",
    minHeight : '30px',
    border : 'none',
    borderRadius : 5,
    marginBottom : vars.spacing.big2,
    padding : vars.spacing.medium,
    fontSize : vars.fontSizing.T4,
    boxShadow : vars.shadow.basic,
})

export const set1 = style({
    borderRadius : '30px',
    alignContent : 'center',
    backgroundColor : vars.color.secondaryDarkTextHover,
    width : '100%',
    height : '100%',
    marginTop : '10px',
    alignItems:'center',
    color : "#808080",
    fontSize : vars.fontSizing.T3,
})

export const set2 = style({
    display:'flex',
    flexDirection : 'row',
    marginBottom:"40px",
    
    
})


export const edit = style({
    width:"50%",
    height:'80%',
    margin :'10px'
})