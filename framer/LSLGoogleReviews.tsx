/**
 * Lost Sierra Lodge — Google Guest Reviews
 * Framer Code Component, React 18-compatible.
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight auto
 *
 * Intentionally separate from the existing Airbnb/Vrbo/Google rating tiles,
 * five decorative stars, and stay statistics already on the Lodge website.
 * No automated scraping or Google API credentials are included.
 */
import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

type Review = {
    reviewer: string
    date: string
    review: string
    rating: number
    sourceUrl: string
    bookedDirect: boolean
}

type Props = {
    reviews: Review[]
    leaveReviewUrl: string
    allReviewsUrl: string
    autoScroll: boolean
    scrollSpeed: number
    gold: string
    cardBackground: string
    textColor: string
    secondaryText: string
    showIntro: boolean
}

const DEFAULT_WRITE_LINK =
    "https://search.google.com/local/writereview?placeid=ChIJkTXJWsJrnIAREs3UinCsY-4"
const DEFAULT_READ_LINK =
    "https://www.google.com/maps?cid=17177763003086720274"

function httpsLink(url: string | undefined): string | undefined {
    if (!url) return undefined
    try {
        const value = new URL(url)
        return value.protocol === "https:" ? value.href : undefined
    } catch {
        return undefined
    }
}

function Stars({ rating, color }: { rating: number; color: string }) {
    const full = Math.max(0, Math.min(5, Math.round(Number(rating) || 0)))
    return (
        <span
            aria-label={full + " out of 5 stars"}
            style={{ display: "inline-flex", alignItems: "center", gap: 3 }}
        >
            {Array.from({ length: 5 }, (_, index) => (
                <svg
                    key={index}
                    aria-hidden="true"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill={index < full ? color : "none"}
                    stroke={color}
                    strokeWidth="1.65"
                    strokeLinejoin="round"
                >
                    <path d="m12 2.6 2.95 6.07 6.7.96-4.85 4.73 1.14 6.68L12 17.88l-5.94 3.16 1.14-6.68-4.85-4.73 6.7-.96L12 2.6Z" />
                </svg>
            ))}
        </span>
    )
}

function Arrow({ side }: { side: "left" | "right" }) {
    return (
        <svg
            aria-hidden="true"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            {side === "left" ? (
                <path d="m15 18-6-6 6-6" />
            ) : (
                <path d="m9 18 6-6-6-6" />
            )}
        </svg>
    )
}

export default function LSLGoogleReviews(props: Props) {
    const {
        reviews = [],
        leaveReviewUrl = DEFAULT_WRITE_LINK,
        allReviewsUrl = DEFAULT_READ_LINK,
        autoScroll = true,
        scrollSpeed = 19,
        gold = "#BE985C",
        cardBackground = "#F7F4EF",
        textColor = "#262C29",
        secondaryText = "#696F68",
        showIntro = false,
    } = props

    const validReviews = reviews.filter(
        (r) => r && typeof r.review === "string" && r.review.trim().length > 0
    )
    const scroller = React.useRef<HTMLDivElement>(null)
    const paused = React.useRef(false)
    const onScreen = React.useRef(true)
    const reducedMotion = React.useRef(false)
    const touchResume = React.useRef<ReturnType<typeof setTimeout> | null>(null)
    const [expanded, setExpanded] = React.useState<number[]>([])

    const loop = validReviews.length > 1
    const items = loop ? [...validReviews, ...validReviews] : validReviews
    const writeUrl = httpsLink(leaveReviewUrl)
    const readUrl = httpsLink(allReviewsUrl)

    React.useEffect(() => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)")
        const update = () => { reducedMotion.current = media.matches }
        update()
        media.addEventListener?.("change", update)
        return () => media.removeEventListener?.("change", update)
    }, [])

    React.useEffect(() => {
        if (!scroller.current || !("IntersectionObserver" in window)) return
        const observer = new IntersectionObserver(
            ([entry]) => { onScreen.current = entry.isIntersecting },
            { threshold: 0.05 }
        )
        observer.observe(scroller.current)
        return () => observer.disconnect()
    }, [validReviews.length])

    React.useEffect(() => {
        const rail = scroller.current
        if (!rail || !autoScroll || !loop) return
        let raf = 0
        let prior = 0

        const tick = (now: number) => {
            if (!prior) prior = now
            const delta = Math.min((now - prior) / 1000, 0.06)
            prior = now
            if (
                !paused.current &&
                onScreen.current &&
                !reducedMotion.current &&
                expanded.length === 0
            ) {
                rail.scrollLeft += Math.max(0, scrollSpeed) * delta
                const first = rail.children[0] as HTMLElement | undefined
                const second = rail.children[validReviews.length] as HTMLElement | undefined
                if (first && second) {
                    const cycle = second.offsetLeft - first.offsetLeft
                    if (cycle > 0 && rail.scrollLeft >= cycle) rail.scrollLeft -= cycle
                }
            }
            raf = window.requestAnimationFrame(tick)
        }
        raf = window.requestAnimationFrame(tick)
        return () => window.cancelAnimationFrame(raf)
    }, [autoScroll, loop, scrollSpeed, validReviews.length, expanded.length])

    React.useEffect(() => {
        return () => {
            if (touchResume.current !== null) clearTimeout(touchResume.current)
        }
    }, [])

    const interruptForTouch = () => {
        paused.current = true
        if (touchResume.current !== null) clearTimeout(touchResume.current)
    }
    const resumeFromTouch = () => {
        if (touchResume.current !== null) clearTimeout(touchResume.current)
        touchResume.current = setTimeout(() => { paused.current = false }, 3000)
    }
    const moveOne = (direction: -1 | 1) => {
        const rail = scroller.current
        if (!rail || !validReviews.length) return
        const first = rail.children[0] as HTMLElement | undefined
        const next = rail.children[1] as HTMLElement | undefined
        const repeated = rail.children[validReviews.length] as HTMLElement | undefined
        const step = first && next ? next.offsetLeft - first.offsetLeft : 310
        if (loop && first && repeated) {
            const cycle = repeated.offsetLeft - first.offsetLeft
            if (direction < 0 && rail.scrollLeft < step * 0.6) {
                rail.scrollLeft += cycle
            }
        }
        rail.scrollBy({ left: direction * step, behavior: "smooth" })
    }

    const isExpanded = (index: number) => expanded.includes(index)
    const toggleExpanded = (index: number) =>
        setExpanded((items) =>
            items.includes(index)
                ? items.filter((item) => item !== index)
                : [...items, index]
        )

    const controlStyle: React.CSSProperties = {
        width: 37,
        height: 37,
        padding: 0,
        borderRadius: "50%",
        border: "1px solid rgba(90,91,85,.23)",
        background: "transparent",
        color: textColor,
        cursor: "pointer",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <section
            aria-label="Guest reviews from Google"
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                minWidth: 0,
                gap: 18,
                color: textColor,
                fontFamily: "inherit",
            }}
        >
            {showIntro && (
                <div style={{ textAlign: "center" }}>
                    <div style={{
                        fontSize: 11, letterSpacing: "0.15em",
                        textTransform: "uppercase", color: secondaryText
                    }}>FROM OUR GUESTS</div>
                    <h2 style={{ margin: "9px 0 0", fontWeight: 500, fontSize: 31, lineHeight: 1.1 }}>
                        Good company. Great stays.
                    </h2>
                </div>
            )}

            <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", flexWrap: "wrap", gap: 12
            }}>
                <div style={{
                    display: "flex", gap: 9, alignItems: "center",
                    fontSize: 13, letterSpacing: "0.02em", color: secondaryText
                }}>
                    <span style={{ fontWeight: 650, color: textColor }}>Google</span>
                    <span aria-hidden="true" style={{ color: gold }}>✦</span>
                    <span>Guest reviews</span>
                </div>
                {validReviews.length > 1 && (
                    <div style={{ display: "flex", gap: 8 }}>
                        <button
                            type="button"
                            aria-label="Previous guest review"
                            onClick={() => moveOne(-1)}
                            style={controlStyle}
                        ><Arrow side="left" /></button>
                        <button
                            type="button"
                            aria-label="Next guest review"
                            onClick={() => moveOne(1)}
                            style={controlStyle}
                        ><Arrow side="right" /></button>
                    </div>
                )}
            </div>

            {validReviews.length ? (
                <div
                    ref={scroller}
                    className="lsl-google-reviews-rail"
                    role="region"
                    aria-label="Scrollable Google guest reviews"
                    tabIndex={0}
                    onMouseEnter={() => { paused.current = true }}
                    onMouseLeave={() => { paused.current = false }}
                    onFocusCapture={() => { paused.current = true }}
                    onBlurCapture={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                            paused.current = false
                        }
                    }}
                    onTouchStart={interruptForTouch}
                    onTouchEnd={resumeFromTouch}
                    onTouchCancel={resumeFromTouch}
                    style={{
                        display: "flex", gap: 16, overflowX: "auto",
                        overscrollBehaviorX: "contain",
                        WebkitOverflowScrolling: "touch",
                        scrollbarWidth: "none",
                        padding: "2px 2px 13px",
                    }}
                >
                    {items.map((review, repeatIndex) => {
                        const originalIndex = repeatIndex % validReviews.length
                        const duplicate = repeatIndex >= validReviews.length
                        const long = review.review.length > 245
                        const open = isExpanded(originalIndex)
                        return (
                            <article
                                key={repeatIndex}
                                aria-hidden={duplicate ? "true" : undefined}
                                style={{
                                    background: cardBackground, borderRadius: 15,
                                    border: "1px solid rgba(79,80,74,.1)",
                                    boxSizing: "border-box",
                                    flex: "0 0 clamp(270px, 40%, 395px)",
                                    minHeight: 233,
                                    padding: "26px 24px 23px",
                                    display: "flex", flexDirection: "column",
                                    gap: 17, boxShadow: "0 4px 17px rgba(25,30,25,.035)"
                                }}
                            >
                                <Stars rating={review.rating} color={gold} />
                                <div style={{
                                    fontSize: 15.5, lineHeight: 1.7,
                                    letterSpacing: "0.002em", flex: 1,
                                    whiteSpace: "pre-line", overflowWrap: "anywhere"
                                }}>
                                    “{long && !open ? review.review.slice(0, 242).trimEnd() + "…" : review.review}”
                                    {long && (
                                        <button
                                            type="button"
                                            tabIndex={duplicate ? -1 : 0}
                                            onClick={() => toggleExpanded(originalIndex)}
                                            aria-expanded={open}
                                            style={{
                                                display: "inline", padding: 0, marginLeft: 6,
                                                border: 0, background: "transparent",
                                                font: "inherit", fontWeight: 650,
                                                color: textColor, cursor: "pointer",
                                                textDecoration: "underline",
                                                textUnderlineOffset: 3
                                            }}
                                        >{open ? "Read less" : "Read more"}</button>
                                    )}
                                </div>
                                <div style={{
                                    display: "flex", justifyContent: "space-between",
                                    gap: 15, alignItems: "end"
                                }}>
                                    <div style={{ minWidth: 0, lineHeight: 1.35 }}>
                                        <div style={{ fontSize: 14, fontWeight: 650 }}>
                                            {review.reviewer || "Google reviewer"}
                                        </div>
                                        <div style={{ fontSize: 12, color: secondaryText, marginTop: 4 }}>
                                            Google{review.date ? " · " + review.date : ""}
                                        </div>
                                        {review.bookedDirect && (
                                            <div style={{
                                                fontSize: 11, color: secondaryText,
                                                marginTop: 5, fontStyle: "italic"
                                            }}>Booked Direct · Host verified</div>
                                        )}
                                    </div>
                                    {httpsLink(review.sourceUrl) && (
                                        <a
                                            tabIndex={duplicate ? -1 : 0}
                                            href={httpsLink(review.sourceUrl)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                fontSize: 12, color: textColor, flexShrink: 0,
                                                textUnderlineOffset: 3
                                            }}
                                        >On Google ↗</a>
                                    )}
                                </div>
                            </article>
                        )
                    })}
                </div>
            ) : (
                <div style={{
                    background: cardBackground, padding: "28px 24px",
                    borderRadius: 15, color: secondaryText, fontSize: 14,
                    lineHeight: 1.6
                }}>
                    Add your permission-cleared Google testimonials in
                    the Framer component’s <strong>Reviews</strong> controls.
                    No review text has been invented or imported.
                </div>
            )}

            <div style={{
                display: "flex", gap: 12, alignItems: "center",
                justifyContent: "space-between", flexWrap: "wrap"
            }}>
                {readUrl && (
                    <a
                        href={readUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontSize: 13, color: textColor,
                            textUnderlineOffset: 3
                        }}
                    >Read all reviews on Google ↗</a>
                )}
                {writeUrl && (
                    <a
                        href={writeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex", justifyContent: "center",
                            alignItems: "center", padding: "11px 17px",
                            borderRadius: 999, border: "1px solid " + gold,
                            color: textColor, fontSize: 13, fontWeight: 600,
                            textDecoration: "none", letterSpacing: "0.01em"
                        }}
                    >Leave us a Google review ↗</a>
                )}
            </div>

            <style>{".lsl-google-reviews-rail::-webkit-scrollbar { display: none; } .lsl-google-reviews-rail a:focus-visible, .lsl-google-reviews-rail button:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }"}</style>
        </section>
    )
}

LSLGoogleReviews.defaultProps = {
    reviews: [],
    leaveReviewUrl: DEFAULT_WRITE_LINK,
    allReviewsUrl: DEFAULT_READ_LINK,
    autoScroll: true,
    scrollSpeed: 19,
    gold: "#BE985C",
    cardBackground: "#F7F4EF",
    textColor: "#262C29",
    secondaryText: "#696F68",
    showIntro: false,
}

addPropertyControls(LSLGoogleReviews, {
    reviews: {
        type: ControlType.Array,
        title: "Reviews",
        description: "Add complete, permission-cleared Google reviews. Reorder here without editing code.",
        maxCount: 80,
        control: {
            type: ControlType.Object,
            controls: {
                reviewer: { type: ControlType.String, title: "Reviewer", defaultValue: "" },
                date: { type: ControlType.String, title: "Review date", defaultValue: "" },
                review: {
                    type: ControlType.String, title: "Full review",
                    displayTextArea: true, defaultValue: ""
                },
                rating: {
                    type: ControlType.Number, title: "Stars",
                    min: 1, max: 5, step: 1, displayStepper: true, defaultValue: 5
                },
                sourceUrl: { type: ControlType.String, title: "Original review URL", defaultValue: "" },
                bookedDirect: {
                    type: ControlType.Boolean, title: "Verified direct booking",
                    defaultValue: false
                },
            }
        },
        defaultValue: []
    },
    leaveReviewUrl: {
        type: ControlType.String, title: "Leave review URL",
        defaultValue: DEFAULT_WRITE_LINK
    },
    allReviewsUrl: {
        type: ControlType.String, title: "Read reviews URL",
        defaultValue: DEFAULT_READ_LINK
    },
    autoScroll: {
        type: ControlType.Boolean, title: "Auto-scroll", defaultValue: true
    },
    scrollSpeed: {
        type: ControlType.Number, title: "Scroll px/sec",
        min: 5, max: 60, step: 1, defaultValue: 19,
        hidden: (props) => !props.autoScroll
    },
    gold: { type: ControlType.Color, title: "Gold", defaultValue: "#BE985C" },
    cardBackground: { type: ControlType.Color, title: "Card", defaultValue: "#F7F4EF" },
    textColor: { type: ControlType.Color, title: "Text", defaultValue: "#262C29" },
    secondaryText: { type: ControlType.Color, title: "Muted", defaultValue: "#696F68" },
    showIntro: {
        type: ControlType.Boolean, title: "Extra heading",
        description: "Keep off when your existing Good Company / Great Stays heading is already on the page.",
        defaultValue: false
    },
})
