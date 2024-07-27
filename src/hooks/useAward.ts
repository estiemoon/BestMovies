import { useState } from 'react';
import { fetchAwards } from '../componets/MovieAPI/getAward.api.ts';

export interface Award {
    movie_id : number;
  }

export const useAward = () => {
    const [idList, setIdList] = useState<Award[] | null>(null);

    fetchAwards().then((awardList) => {
        setIdList(awardList)
    })
    return {idList}
};

