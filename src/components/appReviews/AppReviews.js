import AppSlider from "../appSlider/AppSlider";

const AppReviews = () => {
    const reviewsStyle = {
        background: '#fff',
        minHeight: 1000,
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