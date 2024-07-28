import { useState } from 'react'
import { appContainer, board } from './App.css'
import { BoardList } from './componets/BoardList/BoardList'
import { EditModal } from './componets/EditModal/EditModal';
import { ListsContainer } from './componets/ListsContainer/ListsContainer';
import { useTypedSelector } from './hooks/redux';
import Movie from './componets/test/movie';

function App() {
  //초기 board-0
  const [activeBoardId, setActiveBoardId] = useState('board-0'); 
  //TBoardState의 boardArray -> 영화 DB 만들어둔거
  const boards = useTypedSelector(state=>state.boards.boardArray); 
  //activeBoardId에 해당하는 보드(첫번째로 일치하는 보드) 찾기
  const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0];
  //해당 보드의 lists 가져오기
  const lists = getActiveBoard.lists;

  //TBoardState의 modalActive (boolean값)
  const modalActive = useTypedSelector(state=>state.boards.modalActive);
  
  return (
    <div>
      <div className={appContainer}>
        {modalActive ? <EditModal/> : null} {/*modalActive가 true이면 EditModal */}
        <BoardList //상단 Board
          activeBoardId= {activeBoardId}
          setActiveBoardId = {setActiveBoardId}/>
          
          <div className={board}>
          <ListsContainer lists={lists} boardId={getActiveBoard.boardId}/>
        </div>
      </div>
    </div> 
  )
}

export default App
