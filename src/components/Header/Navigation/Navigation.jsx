import { A } from 'hookrouter'

export default function Navigation() {
    return (
        <ul className="navbar-nav flex-column text-left">
            <li className="nav-item active">
                <A className="nav-link" href="/"><i className="fas fa-home fa-fw mr-2"></i>Blog Home <span className="sr-only">(current)</span></A>
            </li>
            <li className="nav-item">
                <A className="nav-link" href="/blog"><i className="fas fa-bookmark fa-fw mr-2"></i>Blog Post</A>
            </li>
            <li className="nav-item">
                <A className="nav-link" href="/about-me"><i className="fas fa-user fa-fw mr-2"></i>About Me</A>
            </li>
        </ul>
    )
}
