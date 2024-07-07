import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieList } from "../../types/index";

type TModalState = {
    modalActive: boolean;
    boardId: string;
    listId: string;
    movieModal: IMovieList;
}

const initialState: TModalState = {
    modalActive: false,
    boardId: '', // Default to empty strings or null
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
        setModalActive: (state, { payload }: PayloadAction<boolean>) => {
            state.modalActive = payload;
        },
        setModalData: (state, { payload }: PayloadAction<{ boardId: string; listId: string; movieModal: IMovieList }>) => {
            state.boardId = payload.boardId;
            state.listId = payload.listId;
            state.movieModal = payload.movieModal;
        },
    }
})

export const { setModalActive, setModalData } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
