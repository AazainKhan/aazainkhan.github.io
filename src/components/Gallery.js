import CardDeck from "./CardDeck";

function Gallery() {
    return (
        <>
            <article className="gallery" data-page="gallery">
                <header>
                    <h2 className="h2 article-title">Gallery</h2>
                </header>
                    <CardDeck />
            </article>
        </>
    )
}
export default Gallery;