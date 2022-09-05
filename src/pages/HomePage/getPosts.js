import { get } from '../../services/http'

export const loadPosts = () => {
    return get('/posts')
}

export const commentLength = (postId) => {
    return get(`/comments?post-id=${postId}`)
}