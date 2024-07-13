import { FC } from 'react'
import { board } from '../../App.css';
import { useTypedDispatch } from '../../hooks/redux';
import { setModalActive } from '../../store/slices/boardSlice';
import { setModalData } from '../../store/slices/modalSlice';
import { IList, IMovieList } from '../../types';
import { List } from '../List/List';


type TListContainerProps = {
    boardId : string;
    lists : IList[];
}

export const ListsContainer:FC<TListContainerProps> = ({
    lists,
    boardId
}) => {
    const dispatch = useTypedDispatch();

    //영화 선택시
    const handleMovieClick = (listId :string, movie:IMovieList)=>{
        dispatch(setModalData({ //모달에 들어갈 값 설정
            boardId,
            listId,
            movieModal : movie
        }));
        dispatch(setModalActive(true)); //ModalActive를 true로 설정
    }

    return (
        <div className={board}>
            {lists.map(list => (
                <List // 메인 영화 페이지
                    key={list.listId}
                    list={list}
                    boardId={boardId}
                    onMovieClick={handleMovieClick} //영화 클릭 시 발생 이벤트
                />
            ))}
        </div>
    );
}
