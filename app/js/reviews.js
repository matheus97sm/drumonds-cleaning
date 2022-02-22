export function reviews() {
  const reviewsWrapper = document.querySelector('.reviews-wrapper');
  const reviews = document.querySelectorAll('.review');
  const reviewsConfigs = {
    actualReview: 0,
    actualOperator: 1,
    maxReviewHeight: 0
  };

  if (!reviewsWrapper || reviews.length === 0) return;

  reviews.forEach(review => {
    const reviewHeight = review.getBoundingClientRect().height;

    if (reviewHeight > reviewsConfigs.maxReviewHeight)
      reviewsConfigs.maxReviewHeight = reviewHeight;
  });

  reviewsWrapper.style.setProperty('height', `${reviewsConfigs.maxReviewHeight * 2.5}px`)

  reviews[reviewsConfigs.actualReview].classList.add('active');
  reviews[reviewsConfigs.actualReview + 1].classList.add('review-before');

  window.setInterval(() => {
    reviewsConfigs.actualOperator = checkOperatorUsage(reviewsConfigs.actualReview, reviewsConfigs.actualOperator, reviews.length - 1);
    reviewsConfigs.actualReview += reviewsConfigs.actualOperator;

    reviews.forEach((review, index) => {
      review.classList.remove('active', 'review-before', 'review-after');

      switch(index) {
        case reviewsConfigs.actualReview:
          review.classList.add('active');
          break;
        case reviewsConfigs.actualReview + 1:
          review.classList.add('review-before');
          break;
        case reviewsConfigs.actualReview - 1:
          review.classList.add('review-after');          
          break;
      }
    });
  }, 5000);
}

function checkOperatorUsage(actualReview, operator, length) {
  let returnOperator = 1;

  if (operator > 0) 
    returnOperator = actualReview < length ? 1 : -1
  else 
    returnOperator = actualReview !== 0 ? -1 : 1

  return returnOperator;
}
