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
                            <a href="https://medium.com/@aazainkhan/should-you-be-worried-about-chatgpt-d0baf095ab12" target="_blank">

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

                        <li className="blog-post-item">
                            <a href="https://medium.com/@aazainkhan/mnist-digit-classification-using-na%C3%AFve-bayes-and-logistic-regression-03a6e0ba8318" target="_blank">

                                <figure className="blog-banner-box">
                                    <img src="./images/blog-2.png" alt="Should you be worried about ChatGPT" loading="lazy" />
                                </figure>

                                <div className="blog-content">

                                    <div className="blog-meta">
                                        <p className="blog-category">ML</p>

                                        <span className="dot"></span>

                                        <time dateTime="2022-02-23">Feb 13, 2024</time>
                                    </div>

                                    <h3 className="h3 blog-item-title">MNIST Digit Classification Using Naïve Bayes and Logistic Regression</h3>

                                    <p className="blog-text">
                                        A comparison of Naïve Bayes and Logistic Regression for MNIST Handwritten Digit Classification.
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