import { useEffect, useRef, useState } from "react";
import ArrowIcon from "../../svgComponents/ArrowIcon";
import Button from "../Button";
import styles from "./index.module.scss";
import debounce from "lodash/debounce";

enum DIRECTION {
	LEFT = "LEFT",
	RIGHT = "RIGHT",
}

const CardCarousel = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const totalPages = useRef<number>(5);
    const scrollParentRef = useRef<HTMLDivElement | null>(null);
    const largeMedia = useRef<any>();

    useEffect(() => {
        if (!scrollParentRef.current) return;
        const cards = document.querySelectorAll(`.${styles.card}`);
        if (!cards.length) return;
        const totalCard = cards.length
        const totalCardWidth = totalCard * cards[0].clientWidth
        const parentWidth = scrollParentRef.current.clientWidth
        const scrollableArea = totalCardWidth - parentWidth
        totalPages.current = Math.floor(scrollableArea / cards[0].clientWidth) + 1
        largeMedia.current = window.matchMedia("(min-width: 504px)");
        
	}, []);

	const _handleKeyDown = (event: any, direction: keyof typeof DIRECTION) => {
		const card = document.querySelector(`.${styles.card}`);
		if (!card) return;
		if (!scrollParentRef.current) return;
		const cardWidth = card.clientWidth;
		if (direction === DIRECTION.RIGHT) {
            event.preventDefault();
            if (currentPage < totalPages.current) {
				scrollParentRef.current.scrollTo({
					left: ((currentPage - 1) * cardWidth) + cardWidth,
					behavior: "smooth",
                }); 
            }
             if (currentPage + 1 === totalPages.current && largeMedia.current.matches) {
                scrollParentRef.current.scrollTo({
                    left: scrollParentRef.current.scrollWidth,
                    behavior: "smooth",
                });
            }
		} else if ((direction = DIRECTION.LEFT)) {
            event.preventDefault();
            const page = currentPage - 1;
            if (page >= 1) {
				scrollParentRef.current.scrollTo({
					left: (page * cardWidth) - cardWidth,
					behavior: "smooth",
                });
            }
            if (page === 1 && largeMedia.current.matches) {
                scrollParentRef.current.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            }
		}
	};

	const _handleScroll = debounce(() => {
        if (!scrollParentRef.current) return
        const card = document.querySelector(`.${styles.card}`);
		if (!card) return;
        const cardWidth = card.clientWidth
        const scrollLeft = scrollParentRef.current.scrollLeft;
        const page = Math.floor((scrollLeft + cardWidth) / cardWidth);
        setCurrentPage(page || 1);
	}, 50);

	return (
		<>
			<div
				className={styles.cardArea}
				ref={scrollParentRef}
				onScroll={_handleScroll}
			>
				<div className={styles.card}>
					<p>
						&quot;The software is of course easy to use and data gets stored
						greatly, but the personal service you get with the software makes it
						a full package. It is a great help to get a monthly reminder of the
						pending items + the documents missing to properly store and finalize
						a contract.&quot;
					</p>
					<p>
						<strong>Daniel Miller</strong>
						<br />
						<span>Head of Office Experience Flux</span>
					</p>
				</div>
				<div className={styles.card}>
					<p>
						&quot;With Contrawatch, we&apos;ve given our legal structure a
						strong foundation. All our contracts are managed in 1 place, we
						receive automatic termination date notifications and visibly reduce
						risks & costs. In less than 1,5h/week, we now manage contracts of
						over 200 branches!&quot;
					</p>
					<p>
						<strong>Daniel Miller</strong>
						<br />
						<span>Head of Office Experience Flux</span>
					</p>
				</div>
				<div className={styles.card}>
					<p>
						&quot;With Contrawatch, we&apos;ve given our legal structure a
						strong foundation. All our contracts are managed in 1 place, we
						receive automatic termination date notifications and visibly reduce
						risks & costs. In less than 1,5h/week, we now manage contracts of
						over 200 branches!&quot;
					</p>
					<p>
						<strong>Daniel Miller</strong>
						<br />
						<span>Head of Office Experience Flux</span>
					</p>
				</div>
				<div className={styles.card}>
					<p>
						&quot;With Contrawatch, we&apos;ve given our legal structure a
						strong foundation. All our contracts are managed in 1 place, we
						receive automatic termination date notifications and visibly reduce
						risks & costs. In less than 1,5h/week, we now manage contracts of
						over 200 branches!&quot;
					</p>
					<p>
						<strong>Daniel Miller</strong>
						<br />
						<span>Head of Office Experience Flux</span>
					</p>
				</div>
				<div className={styles.card}>
					<p>
						&quot;With Contrawatch, we&apos;ve given our legal structure a
						strong foundation. All our contracts are managed in 1 place, we
						receive automatic termination date notifications and visibly reduce
						risks & costs. In less than 1,5h/week, we now manage contracts of
						over 200 branches!&quot;
					</p>
					<p>
						<strong>Daniel Miller</strong>
						<br />
						<span>Head of Office Experience Flux</span>
					</p>
				</div>
				<div className={styles.card}>
					<p>
						&quot;The software is of course easy to use and data gets stored
						greatly, but the personal service you get with the software makes it
						a full package. It is a great help to get a monthly reminder of the
						pending items + the documents missing to properly store and finalize
						a contract.&quot;
					</p>
					<p>
						<strong>Daniel Miller</strong>
						<br />
						<span>Head of Office Experience Flux</span>
					</p>
				</div>
				<div className={styles.card}>
					<p>
						&quot;With Contrawatch, we&apos;ve given our legal structure a
						strong foundation. All our contracts are managed in 1 place, we
						receive automatic termination date notifications and visibly reduce
						risks & costs. In less than 1,5h/week, we now manage contracts of
						over 200 branches!&quot;
					</p>
					<p>
						<strong>Daniel Miller</strong>
						<br />
						<span>Head of Office Experience Flux</span>
					</p>
				</div>
				<div className={styles.card}>
					<p>
						&quot;With Contrawatch, we&apos;ve given our legal structure a
						strong foundation. All our contracts are managed in 1 place, we
						receive automatic termination date notifications and visibly reduce
						risks & costs. In less than 1,5h/week, we now manage contracts of
						over 200 branches!&quot;
					</p>
					<p>
						<strong>Daniel Miller</strong>
						<br />
						<span>Head of Office Experience Flux</span>
					</p>
				</div>
				<div className={styles.card}>
					<p>
						&quot;With Contrawatch, we&apos;ve given our legal structure a
						strong foundation. All our contracts are managed in 1 place, we
						receive automatic termination date notifications and visibly reduce
						risks & costs. In less than 1,5h/week, we now manage contracts of
						over 200 branches!&quot;
					</p>
					<p>
						<strong>Daniel Miller</strong>
						<br />
						<span>Head of Office Experience Flux</span>
					</p>
				</div>
				<div className={styles.card}>
					<p>
						&quot;With Contrawatch, we&apos;ve given our legal structure a
						strong foundation. All our contracts are managed in 1 place, we
						receive automatic termination date notifications and visibly reduce
						risks & costs. In less than 1,5h/week, we now manage contracts of
						over 200 branches!&quot;
					</p>
					<p>
						<strong>Daniel Miller</strong>
						<br />
						<span>Head of Office Experience Flux</span>
					</p>
				</div>
			</div>
			<div className={styles.control}>
				<div>
					<Button
						onClick={(e) => _handleKeyDown(e, DIRECTION.LEFT)}
						ripple
						disabled={currentPage === 1}
					>
						<ArrowIcon color="#000000" />
					</Button>
				</div>
				<div>
					<Button
						onClick={(e) => _handleKeyDown(e, DIRECTION.RIGHT)}
						ripple
						disabled={currentPage === totalPages.current}
					>
						<ArrowIcon color="#000000" />
					</Button>
				</div>
			</div>
		</>
	);
};

export default CardCarousel;
