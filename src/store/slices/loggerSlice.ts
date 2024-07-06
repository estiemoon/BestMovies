import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogItme } from "../../types/index";

type loggerState = {
    logArray : ILogItme[]
}


const initialState : loggerState= {
    logArray : []
}

const loggerSlice = createSlice({
    name : "logger",
    initialState,
    reducers : {
        addLog : (state, {payload} :PayloadAction<ILogItme>)=>{
            state.logArray.push(payload);
        }
    }
})

export const {addLog} = loggerSlice.actions;
export const loggerReducer = loggerSlice.reducer;