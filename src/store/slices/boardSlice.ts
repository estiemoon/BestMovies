import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { board } from "../../App.css";
import { IBoard, IList, IMovieList } from "../../types/index";
import { MdLocalMovies } from "react-icons/md";
import imageEx from '../../assets/image.png'; // 이미지 절대경로
import insideout from '../../assets/insideout.png'
import escape from '../../assets/escape.png'
import elemental from '../../assets/elemental.png'
import handsome_guys from '../../assets/handsome_guys.png'
import haikyu from '../../assets/haikyu.png'
import parasite from '../../assets/parasite.png'

type TBoardState = {
    modalActive : boolean;
    boardArray : IBoard[]
}



const initialState : TBoardState = {
    modalActive : false,
    boardArray : [
        {
            boardId : 'board-0',
            boardName : '전체 영화',
            lists : [
                {
                    listId : 'list-0',
                    listName : '전체 영화 리스트',
                    movieList : [
                        {
                            movId : 'movie-0',
                            movName : '인사이드 아웃',
                            movDes : '디즈니·픽사의 대표작 <인사이드 아웃> 새로운 감정과 함께 돌아오다! 13살이 된 라일리의 행복을 위해 매일 바쁘게 머릿속 감정 컨트롤 본부를 운영하는 ‘기쁨’, ‘슬픔’, ‘버럭’, ‘까칠’, ‘소심’. 그러던 어느 날, 낯선 감정인 ‘불안’, ‘당황’, ‘따분’, ‘부럽’이가 본부에 등장하고, 언제나 최악의 상황을 대비하며 제멋대로인 ‘불안’이와 기존 감정들은 계속 충돌한다. 결국 새로운 감정들에 의해 본부에서 쫓겨나게 된 기존 감정들은 다시 본부로 돌아가기 위해 위험천만한 모험을 시작하는데… 2024년, 전 세계를 공감으로 물들인 유쾌한 상상이 다시 시작된다!',
                            movImg : insideout,
                            bookmarked: false
                        },
        
                        {
                            movId : 'movie-1',
                            movName : '엘리멘탈',
                            movDes : '불, 물, 공기, 흙 4개의 원소들이 살고 있는 ‘엘리멘트 시티’ 재치 있고 불처럼 열정 넘치는 앰버는 어느 날 우연히 유쾌하고 감성적이며 물 흐르듯 사는 웨이드를 만나 특별한 우정을 쌓으며, 지금껏 믿어온 모든 것들이 흔들리는 새로운 경험을 하게 되는데... 웰컴 투 ‘엘리멘트 시티!',
                            movImg : elemental,
                            bookmarked: false
                        },

                        {
                            movId : 'movie-2',
                            movName : '탈주',
                            movDes : '“내 앞 길 내가 정했습니다” 휴전선 인근 북한 최전방 군부대. 10년 만기 제대를 앞둔 중사 ‘규남’(이제훈)은 미래를 선택할 수 없는 북을 벗어나 원하는 것을 해 볼 수 있는 철책 너머로의 탈주를 준비한다. 그러나, ‘규남’의 계획을 알아챈 하급 병사 ‘동혁’(홍사빈)이 먼저 탈주를 시도하고, 말리려던 ‘규남’까지 졸지에 탈주병으로 체포된다. “허튼 생각 말고 받아들여. 이것이 니 운명이야” 탈주병 조사를 위해 부대로 온 보위부 소좌 ‘현상’(구교환)은 어린 시절 알고 지내던 ‘규남’을 탈주병을 체포한 노력 영웅으로 둔갑시키고 사단장 직속보좌 자리까지 마련해주며 실적을 올리려 한다. 하지만 ‘규남’이 본격적인 탈출을 감행하자 ‘현상’은 물러설 길 없는 추격을 시작한다.',
                            movImg : escape,
                            bookmarked: false
                        },

                        {
                            movId : 'movie-3',
                            movName : '핸섬가이즈',
                            movDes : '“우리가 뭐 빠지는 게 있노? 집도 있고 차도 있고 인물도 훤칠한데” 자칭 터프가이 ‘재필’(이성민)과 섹시가이 ‘상구’(이희준) 현실은 잊지 못할 첫인상으로 이사 첫날부터 동네 경찰 ‘최 소장’(박지환)과 ‘남 순경’(이규형)의 특별 감시 대상이 되지만, 꿈꾸던 유럽풍 드림하우스에서 새출발 한다는 것에 그저 행복하기만 하다. 그러나 행복도 잠시, 물에 빠질 뻔한 ‘미나’(공승연)를 구해주려다 오히려 납치범으로 오해받는 상황이 이어진다. 한편 ‘미나’를 찾으러 온 불청객들을 시작으로 지하실에 봉인되어 있던 악령이 깨어나며 어두운 기운이 집안을 둘러싸기 시작하는데… “왜 다들 우리 집에 와서 죽고 난리야!”',
                            movImg : handsome_guys,
                            bookmarked: false
                        },            

                        {
                            movId : 'movie-4',
                            movName : '극장판 하이큐!! 쓰레기장의 결전',
                            movDes : '봄철 고교 배구대회 1회전과 2회전에서 우승 후보를 차례로 꺾은 카라스노 고등학교는 마침내 3회전에서 인연의 라이벌 네코마 고등학교와 맞붙게 된다. 공식 경기에서 처음으로 대결하는 두 고등학교, 통칭 까마귀 VS 고양이 ‘쓰레기장의 결전’. 약속의 땅에서 ‘한 번 더’가 없는 싸움이 드디어 시작된다!',
                            movImg : haikyu,
                            bookmarked: false
                        },
                        {
                            movId : 'movie-5',
                            movName : '기생충',
                            movDes : '직업도 없이 허름한 반지하에 사는 기택 가족에게 돈을 벌 기회가 찾아온다. 친구의 소개로 부잣집 딸 다혜의 과외 선생님을 맡게 된 기택의 아들, 기우는 기대감에 부푼 채 글로벌 IT기업을 이끄는 박 사장의 저택에 들어간다.',
                            movImg : parasite,
                            bookmarked: false
                        },            
                    ]
                }
            ]
        },

        {
            boardId : 'board-1',
            boardName : '수상작',
            lists : [
                {
                    listId : 'list-0',
                    listName : '수상작 리스트',
                    movieList : [
                        {
                            movId : 'movie-0',
                            movName : '기생충',
                            movDes : '직업도 없이 허름한 반지하에 사는 기택 가족에게 돈을 벌 기회가 찾아온다. 친구의 소개로 부잣집 딸 다혜의 과외 선생님을 맡게 된 기택의 아들, 기우는 기대감에 부푼 채 글로벌 IT기업을 이끄는 박 사장의 저택에 들어간다.',
                            movImg : parasite,
                            bookmarked: false
                        },
                        
                    ]
                }
            ]
        },

        {
            boardId : 'board-2',
            boardName : '즐겨찾기',
            lists : [
                {
                    listId : 'list-0',
                    listName : '즐겨찾기',
                    movieList : [
                        
                    ]
                }
            ]
        },

    ],
}

const boardsSlice = createSlice({
    name : 'boards',
    initialState,
    //reducers : redux 상태를 변경하는 액션 생성자 함수를 정의하는 곳
    reducers : {
        setModalActive : (state, {payload}:PayloadAction<boolean>)=>{
            //state : 현재 Redux 상태 객체
            //payload : 액션 호출 시 전달된 인수를 포함하는 객체
            state.modalActive = payload 
            //modalActive값을 전달받은 boolean 타입의 (payload)값으로 변경
        },

        addMovieBoard: (state, { payload }: PayloadAction<IMovieList[]>) => {
            // 전체 영화 리스트를 추가
            state.boardArray[0].lists[0].movieList = payload;
        },

        addAwardsBoard: (state, { payload }: PayloadAction<IMovieList>) => {
            // 이미 북마크 되어 있는지 체크하고 북마크 상태 변경
            state.boardArray[1].lists[0].movieList.push({ ...payload});
        },

        addBookMarkBoard: (state, { payload }: PayloadAction<IMovieList>) => {
            // 이미 북마크 되어 있는지 체크하고 북마크 상태 변경
            const movieIndex = state.boardArray[2].lists[0].movieList.findIndex(movie => movie.movId === payload.movId);
            if (movieIndex === -1) {
                state.boardArray[2].lists[0].movieList.push({ ...payload, bookmarked: true });
            } else {
                state.boardArray[2].lists[0].movieList[movieIndex].bookmarked = true;
            }
        },
        removeBookMarkBoard: (state, { payload }: PayloadAction<string>) => {
            // 북마크 삭제 로직
            state.boardArray[2].lists[0].movieList = state.boardArray[2].lists[0].movieList.filter(movie => movie.movId !== payload);
        },
    }
})

export const {setModalActive,addMovieBoard, addBookMarkBoard, removeBookMarkBoard, addAwardsBoard} = boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;