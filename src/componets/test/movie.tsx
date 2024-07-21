import { FC, useEffect, useState } from 'react';
import TestComponent from './test';
import getMovieDetail from './getMovieDetail';
import axios from "axios";

interface Award {
    movie_id : number;
  }

interface IMovie {
    movId : string,
    genre : [],
    movName: string,
    movDes: string,
    movImg: string,
    bookmarked: boolean,
}

export const Movie: FC = () => {
    const [idList, setIdList] = useState<Award[] | null>(null);
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const showMovies = async() => {
            try{
                await axios.get('http://localhost:3000/awards', {             
                    params: {
                        year: 2023,
                        award: 'cannes'
                    }
                }).then((res) => {
                    console.log("db에서 수상작 받아오기", res.data)
                    setIdList(res.data);
                })
            } catch (error){
                console.error(error);
            }
        };
        showMovies();
    }, []);

//DB 없으니까 이 정보로 테스트 해볼 것
//    IdList = [
//      {
//          "movie_id": 915935
//      },
//     {
//         "movie_id": 467244
//     },
//     {
//         "movie_id": 964960
//     },
//     {
//         "movie_id": 1050035
//     },
//     {
//         "movie_id": 986280
//     },
//     {
//         "movie_id": 665733
//     },
//     {
//         "movie_id": 976893
//     },
//     {
//         "movie_id": 715222
//     },
//     {
//         "movie_id": 1075175
//     },
//     {
//         "movie_id": 1000130
//     },
//     {
//         "movie_id": 1112543
//     },
//     {
//         "movie_id": 1112527
//     },
//     {
//         "movie_id": 1111750
//     },
//     {
//         "movie_id": 1121064
//     },
//     {
//         "movie_id": 1114816
//     },
//     {
//         "movie_id": 1069193
//     },
//     {
//         "movie_id": 1112527
//     },
//     {
//         "movie_id": 960033
//     }
// ]

    useEffect(() => {
        idList?.map((movie) => {
            const fetchMovies = async () => {
                try {
                    const mv = await getMovieDetail(movie.movie_id);
                    console.log(mv)

                    const formattedMovies = {
                        movId : mv.id,
                        genre : mv.genres.map((g: { name: string }) => g.name),
                        movName: mv.title,
                        movDes: mv.overview,
                        movImg: `https://image.tmdb.org/t/p/w500/${mv.poster_path}`,
                        bookmarked: false,
                    };
                    setMovies(movies => [...movies, formattedMovies]);


                } catch (error) {
                    console.error('Error fetching movies:', error);
                }

            };
            fetchMovies();
        })
    }, [idList]);

    console.log("testcomponent 전 ",movies)

    return (
        <>
        <div>
            {(movies) ?
                    <TestComponent movies = {movies}/>
                        : <div>받아온 영화가 존재하지 않습니다.</div>
            }
        </div>
        </>
    );
};

export default Movie