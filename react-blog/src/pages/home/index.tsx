import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <header>
                <div>
                    <Link to="posts/new">글쓰기</Link>
                    <Link to="posts">게시글</Link>
                    <Link to="profile">프로필</Link>
                </div>
            </header>
            <div className="post__navigation">
                <div className="post__navigation-active">전체</div>
                <div>나의 글</div>
            </div>
            <div className="post__list">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="post__box">
                        <Link to={`/posts/${i}`}>
                          <div className={"post__profile-box"}>
                              <div className="post__profile"/>
                              <div className="post__author-name">재이</div>
                              <div className="post__date">2025.05.21 수요일</div>
                          </div>
                          <div className="post__title">게시글 {i}</div>
                          <div className="post__text">
                              게시글 테스트트트트ㅡ트트ㅡ
                          </div>
                            <div className="post__utils-box">
                                <div className="post__delete">삭제</div>
                                <div className="post__edit">수정</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <footer>
                <Link to="posts/new">글쓰기</Link>
                <Link to="posts">게시글</Link>
                <Link to="profile">프로필</Link>
            </footer>
        </div>
    )
}