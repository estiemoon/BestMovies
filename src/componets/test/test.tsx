
interface IMovie {
  genre: string[];
  movId: string;
  movName: string;
  movDes: string;
  movImg: string;
}
interface TestComponentProps {
  movies: IMovie[];
}

const TestComponent: React.FC<TestComponentProps> = ({ 
  movies,
}) => {

  return (
    <div>
      {movies.map((mv) => (
        <div key={mv.movId}>
          <div>영화 아이디: {mv.movId}</div>
          <div>장르: {mv.genre.join(', ')}</div>
          <div>영화 제목: {mv.movName}</div>
          <div>영화 설명: {mv.movDes}</div>
          <div>
            <img src={mv.movImg} alt={mv.movName} />
          </div>
        </div>
      ))}
    </div>
  )



};

export default TestComponent;