import { useState, useEffect } from 'react'
import { A } from 'hookrouter'
import { get } from '../../services/http'

export default function BlogCard({ data }) {
    const [commentLength, setCommentLength] = useState(0)
    const postId = data.id;

    useEffect(() => {
        get(`/comments?post-id=${postId}`).then(respons => setCommentLength(respons.data.length))
    }, [postId])
    return (
        <div className="item mb-5">
            <div className="media">
                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={data.image} alt="image" />
                <div className="media-body">
                    <h3 className="title mb-1"><A href={`/post/${postId}`} >{data.title}</A></h3>
                    <div className="meta mb-1"><span className="date">{data.published}</span><span className="time">{data.time_to_read}</span><span className="comment"><a href="#">{`${commentLength} comments`}</a></span></div>
                    <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                    <A className="more-link" href={`/post/${postId}`}>Read more &rarr;</A>
                </div>
            </div>
        </div>
    )
}
