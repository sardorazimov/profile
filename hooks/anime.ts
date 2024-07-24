import anime from 'animejs';



function fitElementToParent(el: HTMLElement, padding: number = 0): void {
    let timeout: NodeJS.Timeout | null = null;

    function resize(): void {
        if (timeout) clearTimeout(timeout);
        anime.set(el, { scale: 1 });
        const pad = padding;
        const parentEl = el.parentNode as HTMLElement;
        const elOffsetWidth = el.offsetWidth - pad;
        const parentOffsetWidth = parentEl.offsetWidth;
        const ratio = parentOffsetWidth / elOffsetWidth;
        timeout = setTimeout(() => anime.set(el, { scale: ratio }), 10);
    }

    resize();
    window.addEventListener('resize', resize);
}

const layeredAnimation = (() => {
    const transformEls = document.querySelectorAll<HTMLElement>('.transform-progress');
    const layeredAnimationEl = document.querySelector<HTMLElement>('.layered-animations')!;
    const shapeEls = layeredAnimationEl.querySelectorAll<HTMLElement>('.shape');
    const triangleEl = layeredAnimationEl.querySelector<SVGPolygonElement>('polygon')!;
    const trianglePoints = triangleEl.getAttribute('points')!.split(' ');
    const easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'];

    fitElementToParent(layeredAnimationEl);

    function createKeyframes(value: (el: HTMLElement) => number): Array<{ value: number }> {
        const keyframes: Array<{ value: number }> = [];
        for (let i = 0; i < 30; i++) keyframes.push({ value: value });
        return keyframes;
    }

    function animateShape(el: HTMLElement): void {
        const circleEl = el.querySelector<SVGCircleElement>('circle');
        const rectEl = el.querySelector<SVGRectElement>('rect');
        const polyEl = el.querySelector<SVGPolygonElement>('polygon');

        const animation = anime.timeline({
            targets: el,
            duration: () => anime.random(600, 2200),
            easing: () => easings[anime.random(0, easings.length - 1)],
            complete: (anim) => animateShape(anim.animatables[0].target as HTMLElement),
        })
        .add({
            translateX: createKeyframes((el) => el.classList.contains('large') ? anime.random(-300, 300) : anime.random(-520, 520)),
            translateY: createKeyframes((el) => el.classList.contains('large') ? anime.random(-110, 110) : anime.random(-280, 280)),
            rotate: createKeyframes(() => anime.random(-180, 180)),
        }, 0);

        if (circleEl) {
            animation.add({
                targets: circleEl,
                r: createKeyframes(() => anime.random(32, 72)),
            }, 0);
        }
        if (rectEl) {
            animation.add({
                targets: rectEl,
                width: createKeyframes(() => anime.random(64, 120)),
                height: createKeyframes(() => anime.random(64, 120)),
            }, 0);
        }
        if (polyEl) {
            animation.add({
                targets: polyEl,
                points: createKeyframes(() => {
                    const scale = anime.random(72, 180) / 100;
                    return trianglePoints.map((p) => (parseFloat(p) * scale)).join(' ');
                }),
            }, 0);
        }
    }

    for (let i = 0; i < shapeEls.length; i++) {
        animateShape(shapeEls[i]);
    }
})();

