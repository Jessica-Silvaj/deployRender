window.startAnim = (sliderId) => {
    var cards = document.querySelectorAll(`#${sliderId} .slider-item`);

    if (cards.length >= 4) {
        TweenMax.fromTo(cards[0], 0.5, { x: 0, y: 0, opacity: 0.75 }, { x: 0, y: -120, opacity: 0, zIndex: 0, delay: 0.03, ease: Cubic.easeInOut });
        TweenMax.fromTo(cards[1], 0.5, { x: 79, y: 125, opacity: 1, zIndex: 1 }, { x: 0, y: 0, opacity: 0.75, zIndex: 0, boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', ease: Cubic.easeInOut });
        TweenMax.to(cards[2], 0.5, { bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }], boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)', zIndex: 1, opacity: 1, ease: Cubic.easeInOut });
        TweenMax.fromTo(cards[3], 0.5, { x: 0, y: 400, opacity: 0, zIndex: 0 }, { x: 0, y: 250, opacity: 0.75, zIndex: 0, ease: Cubic.easeInOut });
    } else {
        document.querySelector(`#${sliderId}`).insertAdjacentHTML('beforeend', '<p>Sorry, carousel should contain more than 3 slides</p>');
    }

    setTimeout(() => {
        let firstElem = cards[0];
        cards.shift();
        cards.push(firstElem);
        startAnim(sliderId);
    }, 3000);
};