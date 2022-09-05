import { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import BlogCard from '../../components/BlogCard'
import { loadPosts } from './getPosts'
import SingupForm from './SingupForm'


export default function HomePage() {
    const [posts, setPosts] = useState([])

    const postsMap = posts ? posts.map(data => <BlogCard key={data.id} data={data} />) : <p>post not found</p>

    useEffect(() => {
        loadPosts().then(response => setPosts(response.data))
    }, [])
    return (
        <Layout>
            <SingupForm />
            <section className='blog-list px-3 py-5 p-md-5'>
                <div className='container'>
                    {postsMap}
                </div>
            </section>
        </Layout>
    )
}
