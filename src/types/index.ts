export interface IList {
    listId : string;
    listName : string;
    movieList : IMovieList[];
}

export interface ILogItme {
    logId : string;
    logAuthor : string;
    logMessage : string;
    logTimestamp : string;
}

export interface IBoard {
    boardId : string;
    boardName : string;
    lists: IList[];
}

export interface IMovieList {
    movId : string;
    movName : string;
    movDes : string;
    movImg : string;
}