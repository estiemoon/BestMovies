import { style } from "@vanilla-extract/css";
import { vars } from "./App.css";

export const loginContainer = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    width : '100vw',
    height:'80vh',
    alignItems: 'center', 
    gap:'30px'
})

export const boardContiner = style({
    backgroundColor: vars.color.mainDarker,
    display:'flex',
    flexDirection : 'row',
    justifyContent:'center',
    alignContent:'center',
    width : '100vw',
})


export const loginTitle = style({
    fontSize : vars.fontSizing.T2,
    fontWeight : 'bold',
    color:'#ffffff',
    width : '95vw',
    padding:vars.spacing.medium,
})

export const loginTitle2 = style({
    fontSize : vars.fontSizing.T2,
    fontWeight : 'bold',
    color:'#808080',
    padding:vars.spacing.medium,
})

export const customHomeLink = style({
    color : '#ffffff',
    textDecoration : 'none',
    fontSize : vars.fontSizing.T3,
    ":hover" : {
        color:'0056b3'
    }
})

export const customHomeLinkContainer = style({
    justifyContent: 'center', 
    alignContent:'center',
    alignItems:'center',
    marginRight:'10px'
})


export const formContainer = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
    textAlign: 'center',
    gap:'10px'
})

export const boxContainer = style({
    width : '500px',
    height : '40px',
})

export const loginText = style({
    fontSize : vars.fontSizing.T3,
    color:'#808080',
    fontWeight : 'bold',
})