import { useState, useEffect } from 'react'
import { A } from 'hookrouter'
import Layout from '../../components/Layout'
import { loadCommentPost, loadPostData } from './getPostData'



export default function SinglePostPage({ id }) {
    const [postData, setPostData] = useState({})
    const [comments, setComments] = useState([])

    const commentMap = comments ? comments.map(data => <li key={data.id}>{data.summary}</li>) : null

    useEffect(() => {
        loadPostData(id).then(response => setPostData(response.data))
        loadCommentPost(id).then(response => setComments(response.data))
    }, [id])
    return (
        <Layout>
            <article className="blog-post px-3 py-5 p-md-5">
                <div className="container">
                    <header className="blog-post-header">
                        <h2 className="title mb-2">{postData.title}</h2>
                        <div className="meta mb-3"><span className="date">{postData.published}</span><span className="time">{postData.time_to_read}</span><span className="comment"><a href="#">{`${comments.length} comment`}</a></span></div>
                    </header>

                    <div className="blog-post-body">
                        <figure className="blog-banner">
                            <A href={`/post/${id}`}><img className="img-fluid"
                                src={`../${postData.image}`} alt="image" /></A>
                        </figure>
                        <p>{postData.body}</p>
                        <nav className="blog-nav nav nav-justified my-5">
                            <a className="nav-link-prev nav-item nav-link rounded-left" href="index.html">Previous<i
                                className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                            <a className="nav-link-next nav-item nav-link rounded-right" href="blog-list.html">Next<i
                                className="arrow-next fas fa-long-arrow-alt-right"></i></a>
                        </nav>

                        <div className="blog-comments-section">
                            <h4>Comments</h4>
                            <ul>
                                {commentMap}
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    )
}
