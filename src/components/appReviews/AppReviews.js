import AppSlider from "../appSlider/AppSlider";

const AppReviews = () => {
    const reviewsStyle = {
        background: '#fff',
        minHeight: window.innerWidth <= 768 ? 600 : 800,
        display: 'flex',
        alignItems: 'center',
    }

    return (
        <section
            className="reviews"
            style={reviewsStyle}>
            <div className="container">
                <AppSlider/>
            </div>
        </section>
    )
};

export default AppReviews;