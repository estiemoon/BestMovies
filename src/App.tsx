import { useState } from 'react'
import { appContainer, board } from './App.css'
import { BoardList } from './componets/BoardList/BoardList'
import { EditModal } from './componets/EditModal/EditModal';
import { ListsContainer } from './componets/ListsContainer/ListsContainer';
import { useTypedSelector } from './hooks/redux';

function App() {

  const [activeBoardId, setActiveBoardId] = useState('board-0');
  const boards = useTypedSelector(state=>state.boards.boardArray);
  const getActiveBoard = boards.filter(board => board.boardId === activeBoardId)[0];
  const lists = getActiveBoard.lists;
  const modalActive = useTypedSelector(state=>state.boards.modalActive);
  
  return (
    <div>
      <div className={appContainer}>
        {modalActive ? <EditModal/> : null}
        <BoardList 
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
