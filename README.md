### BestMovies

---

# Back

## 1. ERD

- MOVIE는 오픈 API로 받아올 것

```mermaid
erDiagram

    USER ||--o{ BOOKMARK : ""
    USER ||--o{ REVIEW : ""
    MOVIE ||--o{ BOOKMARK : ""
    MOVIE ||--o{ REVIEW : ""

    USER {
        id integer PK
        username varchar
        email varchar
        salt varchar
        hashPwd varchar
        refresh varchar
    }

    AWARD_MOVIE {
        id integer PK
        award_title varchar
        title varchar
        year varchar
        winner varchar
        award varchar
    }

    MOVIE {
        id integer PK
    }

    BOOKMARK {
        id integer PK
        user_id integer FK
        movie_id integer FK
    }

    REVIEW {
        id integer PK
        user_id integer FK
        movie_id integer FK
        comments varchar
        rate integer
    }



```

## 2. API 설계

### 수상작 영화 API

- DB에 담아놓은 영화 데이터 가져오기
- `GET`
- '/awards'
- `Request Query` = {year, award}
- `Response Body` = [ {
  "id": 1,
  "award_title": "황금종려상",
  "title": "아노라",
  "year": "2024",
  "winner": "션 베이커",
  "award": "cannes"
  }, ...]

### USER API

회원가입

- `POST`
- '/users/join'
- `Request Body` = {username, email, password}

로그인

- `POST`
- '/users/join'
- `Request Body` = {email, password}

### BOOKMARK API

- `POST` `DELETE`

### REVIEW API

`POST` `DELETE`

## 3. Authorization
