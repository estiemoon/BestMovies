import React, { useState, useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import { buttonSet, getReviewBoardContainer, reviewBoard, reviewList, reviewRating, reviewText, setReviewBoardContainer } from './ReviewBoard.css';

interface ReviewBoardProps {
    movieId: string;
}

interface Review {
    id: number;
    user_id: string;
    movie_id: number;
    contents: string;
    rating: number;
}

export const ReviewBoard: React.FC<ReviewBoardProps> = ({ movieId }) => {
    const [rating, setRating] = useState<number>(0);
    const [content, setContent] = useState<string>('');
    const [reviews, setReviews] = useState<Review[]>([]);
    const [averageRating, setAverageRating] = useState<number>(0);

    useEffect(() => {
        fetch(`http://localhost:3000/reviews?movie_id=${movieId}`)
            .then(response => response.json())
            .then(data => {
                setReviews(data)
                const totalRating = data.reduce((acc: number, review: Review) => acc + review.rating, 0);
                const avgRating = data.length > 0 ? totalRating / data.length : 0;
                setAverageRating(avgRating);
            })
            .catch(error => {
                console.error('관람평 불러오기 에러:', error);
                // alert('관람평 불러오기 실패');
            });
    }, [movieId]);

    const ratingChanged = (newRating: number) => {
        setRating(newRating);
    };

    const handleSubmit = () => {
        const accessToken = localStorage.getItem('accessToken');

        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                movie_id: movieId,
                content: content,
                rating: rating
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('서버 오류 발생');
                }
                return response.json();
            })
            .then(data => {
                alert('관람평이 저장되었습니다.');
                setReviews([...reviews, data]);
                setContent('');
                setRating(0);
                const totalRating = [...reviews, data].reduce((acc: number, review: Review) => acc + review.rating, 0);
                const avgRating = [...reviews, data].length > 0 ? totalRating / [...reviews, data].length : 0;
                setAverageRating(avgRating);
            })
            .catch(error => {
                console.error('리뷰 추가 에러:', error);
                alert('관람평 등록 실패');
            });
    };

    return (
        <div>
            <div className={setReviewBoardContainer}>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={40}
                    activeColor="#ffd700"
                />
                <textarea
                    className={reviewBoard}
                    placeholder='관람평을 입력해주세요'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <button className={buttonSet} onClick={handleSubmit}>관람평 작성</button>
            </div>

            {/* DB에서 받아와서 출력 */}
            <div className={getReviewBoardContainer}> 평점: {averageRating.toFixed(1)}
                {reviews.map((review) => (
                    <div key={review.id} className={reviewList}>
                        <div className={reviewText}>{review.contents}</div>
                        <div className={reviewRating}>{review.rating}</div>
                    </div>

                ))}
                <div className={reviewList}>
                    <div className={reviewText}>예시 관람평 : 영화 너무 재밌당</div>
                    <div className={reviewRating}>5.0</div>
                </div>
                <div className={reviewList}>
                    <div className={reviewText}>예시 관람평2</div>
                    <div className={reviewRating}>5.0</div>
                </div>
                <div className={reviewList}>
                    <div className={reviewText}>예시 관람평3</div>
                    <div className={reviewRating}>5.0</div>
                </div>
                <div className={reviewList}>
                    <div className={reviewText}>예시 관람평4</div>
                    <div className={reviewRating}>5.0</div>
                </div>
            </div>
        </div>
    );
};
