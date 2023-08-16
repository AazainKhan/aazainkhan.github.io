export default function Blog() {
    return (
        <>
            <article className="blog" data-page="blog">

                <header>
                    <h2 className="h2 article-title">Blog</h2>
                </header>

                <section className="blog-posts">

                    <ul className="blog-posts-list">

                        <li className="blog-post-item">
                            <a href="https://dev.to/aazainkhan/should-you-be-worried-about-chatgpt-4b7h" target="_blank">

                                <figure className="blog-banner-box">
                                    <img src="./images/blog-1.jpg" alt="Should you be worried about ChatGPT" loading="lazy" />
                                </figure>

                                <div className="blog-content">

                                    <div className="blog-meta">
                                        <p className="blog-category">AI</p>

                                        <span className="dot"></span>

                                        <time dateTime="2022-02-23">Mar 31, 2023</time>
                                    </div>

                                    <h3 className="h3 blog-item-title">Should you be worried about ChatGPT?</h3>

                                    <p className="blog-text">
                                        Exploring the potentials of ChatGPT and its implications.
                                    </p>

                                </div>

                            </a>
                        </li>

                    </ul>

                </section>

            </article>
        </>
    )
}