import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const wrapper = style({
    display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 10000,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
})

export const modalWindow = style({
    display: 'flex',
    flexDirection: 'column',
    width: '900px',
    height: '1000px',
    overflowY: 'auto',
    backgroundColor: vars.color.mainDarker,
    opacity: 0.97,
    borderRadius: 14,
    padding: 20,
    boxShadow: vars.shadow.basic,
    color: vars.color.brightText,
})

export const header = style({
    width : "100%",
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"10px",
    marginTop:'10px'
})

export const closeButton = style({
    fontSize : vars.fontSizing.T1,
    cursor : "pointer",
    marginTop : "-20px",
    ":hover":{
        opacity:0.8
    }
})

export const bookmarkImage = style({
    fontSize:vars.fontSizing.T2,
    marginRight:'10px',
    cursor : "pointer",
    marginTop : "-20px",
    ":hover":{
        opacity:0.8
    }
})

export const title = style({
    fontSize : vars.fontSizing.T2,
    color:"#ffffff",
    fontWeight:'bold',
    marginRight : 'auto',
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
    backgroundColor : '#ffffff',
    width : '100%',
    height : '100%',
    textAlign : 'center',
    alignItems:'center',
    color : "#808080",
    fontSize : vars.fontSizing.T3,
    fontWeight:'bold',
})

export const set2 = style({
    display:'flex',
    flexDirection : 'row',   
})


export const edit = style({
    width:"50%",
    height:'80%',
    margin :'10px',
    fontSize : vars.fontSizing.T3,
    color : '#ffffff',
    fontWeight:'bold',
})

