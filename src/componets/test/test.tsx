import { useState,useEffect } from "react";
import axios from "axios";

interface Award {
    id: number;
    award_title: string;
    title: string;
    year: string;
    winner : string;
    award: string;
  }
  
  const TestComponent: React.FC = () => {
    const [data, setData] = useState<Award[] | null>(null);

    const showMovies = async() => {
        try{
            await axios.get('http://localhost:3000/awards', {             
                params: {
                    year: 2023,
                    award: 'cannes'
                }
            }).then((res) => {
                console.log(res.data)
                setData(res.data);
            })
        } catch (error){
            console.error(error);
        }
    };

    useEffect(() => {
      showMovies();
    });


  
    return (
      <div>
        <button onClick={showMovies}>Show Movies</button>
        <h1>Award Winning Movies:</h1>
        {data && data.length > 0 ? (
          <ul>
            {data.map((award) => (
              <li key={award.id}>{award.title} ({award.year})</li>
            ))}
          </ul>
        ) : (
          <div>No data available</div>
        )}
      </div>
    );
  };
  
  export default TestComponent;