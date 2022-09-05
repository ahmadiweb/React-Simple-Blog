import { A } from 'hookrouter'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header className="header text-center">
            <h1 className="blog-name pt-lg-4 mb-0"><A href="/">Ali Ahmadi</A></h1>

            <nav className="navbar navbar-expand-lg navbar-dark" >

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navigation" className="collapse navbar-collapse flex-column" >
                    <div className="profile-section pt-3 pt-lg-0">
                        <img className="profile-image mb-3 rounded-circle mx-auto" src="./assets/profile.png" alt="image" />

                        <div className="bio mb-3">Hi, my name is Ali Ahmadi. Briefly introduce yourself here. You can also provide a link to the about page.<br /><A href="/about-me">Find out more about me</A></div>
                        <ul className="social-list list-inline py-3 mx-auto">
                            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow fa-fw"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fab fa-codepen fa-fw"></i></a></li>
                        </ul>
                        <hr />
                    </div>
                    <Navigation />
                    <div className="my-2 my-md-3">
                        <a className="btn btn-primary" href="https://ali-a.ir/" target="_blank">Get in Touch</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
