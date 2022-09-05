import { get } from '../../services/http'

export const loadPostData = (id) => {
    return get(`/posts/${id}`)
}
export const loadCommentPost = (id) => {
    return get(`/comments?post-id=${id}`)
}