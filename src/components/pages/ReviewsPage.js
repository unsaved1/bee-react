import AppAnotherPromo from "../appAnotherPromo/AppAnotherPromo";
import AppFooter from "../appFooter/AppFooter";

import reviewsBg from '../../resources/images/main-bg.png';
import AppReviews from "../appReviews/AppReviews";

const ReviewsPage = () => {
    return (
        <>
            <AppAnotherPromo
                bg={reviewsBg}
                secondBg={reviewsBg}
                title='отзывы'
                height="60vh"/>
            <AppReviews/>
            <AppFooter/>
        </>
    )
};

export default ReviewsPage;