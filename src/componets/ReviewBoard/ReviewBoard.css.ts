import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const setReviewBoardContainer = style({
    display: 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin : '10px',
    marginBottom : '20px'
})

export const reviewBoard = style({
    width:'90%',
    height:'100px',
    resize : 'none'
})

export const buttonSet = style({
    marginTop : '10px',
    width:'90%',
    height:'30px'
})

export const getReviewBoardContainer = style({
    display: 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin : '10px'
})

export const reviewList = style({
    display: 'flex',
    flexDirection : 'row',
    margin : '10px',
    width : '90%'
})


export const reviewText = style({
    width : '95%',
    textAlign : 'start',
    fontSize : vars.fontSizing.T4,
    color:"#898989",
})


export const reviewRating = style({
    justifyContent: 'end',
    alignItems: 'end',
})
