import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieList } from "../../types/index";

type TModalState = {
    modalActive: boolean;
    boardId: string;
    listId: string;
    movieModal: IMovieList;
}

const initialState: TModalState = { //기본 State
    modalActive: false,
    boardId: '',
    listId: '',
    movieModal: {
        movId: '',
        movName: '',
        movDes: '',
        movImg: '',
    }
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        //modalActive의 값을 boolean 형태의 전달받은 값으로 변경
        setModalActive: (state, { payload }: PayloadAction<boolean>) => {
            state.modalActive = payload;
        },
        //modal의 Data를 전달받은 객체의 값으로 변경
        setModalData: (state, { payload }: PayloadAction<{ boardId: string; listId: string; movieModal: IMovieList }>) => {
            state.boardId = payload.boardId;
            state.listId = payload.listId;
            state.movieModal = payload.movieModal;
        },
    }
})

export const { setModalActive, setModalData } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
