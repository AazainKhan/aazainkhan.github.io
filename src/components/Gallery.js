export default function Gallery() {
    return (
        <>
            <article className="gallery" data-page="gallery">
                <header>
                    <h2 className="h2 article-title">Gallery</h2>
                </header>
                <div className="gallery-content">
                    <div className="gallery-images">
                        <img src="./images/gallery_1.jpg" alt="Gallery Image 1" className="gallery-img" />
                        <img src="./images/gallery_2.jpg" alt="Gallery Image 2" className="gallery-img" />
                        <img src="./images/gallery_3.jpg" alt="Gallery Image 3" className="gallery-img" />
                        <img src="./images/gallery_4.jpg" alt="Gallery Image 4" className="gallery-img" />
                        <img src="./images/gallery_5.jpg" alt="Gallery Image 5" className="gallery-img" />
                    </div>
                </div>
            </article>
        </>
    )
}