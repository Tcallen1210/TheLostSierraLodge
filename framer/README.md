# The Lost Sierra Lodge — Google Review Carousel (Framer)

**Status:** component source built; not installed or published to the live Framer site.

This folder contains a Framer React 18 code component, \`LSLGoogleReviews.tsx\`. It adds **Google guest testimonials** to the current **"FROM OUR GUESTS / Good company. Great stays."** section without replacing the existing ratings, OTA links, five gold stars, review counts, or stay statistics.

## Features implemented

- Continuous horizontal auto-scroll with a seamless duplicated track when there are multiple reviews.
- Touch/swipe support and left/right controls.
- Pauses on hover, focus, touch, or an expanded review; respects reduced-motion preference and pauses out of view.
- Full-length text, with Read more/Read less when longer than 245 characters.
- Per-review Google attribution, actual star rating, name, date, optional original-review link.
- "Booked Direct · Host verified" **only** when explicitly toggled for a verified direct booking.
- "Read all reviews on Google" and "Leave us a Google review" CTAs opening new tabs.
- Review list and colors are editable in Framer's property panel without touching source code.
- Empty state is explicit; no fictitious guest quotes.

## How to install in native Framer

1. In the Framer project, go to **Assets → Code → Create Code File**, name it \`LSLGoogleReviews.tsx\`, and paste the entire code from this folder.
2. Insert \`LSLGoogleReviews\` onto the page in the existing **From Our Guests** section. The **Extra heading** property should remain **off**, because the website already has a heading and decorative five stars.
3. Use the component's **Reviews** property to add the actual Google testimonials. For each, set **Reviewer**, **Review date**, **Full review**, **Stars**, **Original review URL** (if available), and **Verified direct booking** only if substantiated. Only use reviews for which display permission is established.
4. Set the **Leave review URL** to the business's **official copied** Google Business Profile review-request link after testing it from a signed-out browser. A previously constructed link has been placed as an editable starting point but has **not been validated**.
5. Set **Read reviews URL** to your existing Google Maps business link and verify it opens the right profile.
6. Keep the existing **Airbnb / Vrbo / Direct (Google)** tiles with their working outgoing URLs, plus the five gold stars, ratings/counts, and stays/guests/nights statistics. **Do not remove these elements** and do not copy Airbnb/Vrbo review text into the Google carousel.
7. If the Home and Lodge pages need separate instances, create one **Framer reusable component** containing the configured review carousel, then use that shared component on each page, so property changes propagate from its master.
8. Test on desktop, tablet, and mobile. Confirm links, hover, swipe, Read more, keyboard focus, reduced-motion, and scroll behavior. Only then publish and disable Elfsight.

## Management and sync

**Current:** reviews are editable using Framer's \`ControlType.Array\` of \`ControlType.Object\` property controls. You do not need to edit code to add or reorder a review.

**Not yet implemented:** automatic Google synchronization. That would require authorized Google Business Profile API access, a server-side token flow, compliance with Google's display rules, and a safe data-feed design. Do not put API secrets into the code component.

**Framer CMS distinction:** direct collection access through code components is not a supported approach under recent Framer changes. The property editor is the supported immediate solution; a separate approved CMS/data workflow can be evaluated later.

## Live reference URLs (as of Oct 31, 2026)

- The Lodge: https://thelostsierralodge.com/
- Airbnb: https://www.airbnb.com/rooms/1245718515870609588
- Vrbo: https://www.vrbo.com/en-sg/p4259876vb
- Google read reviews: https://www.google.com/maps?cid=17177763003086720274
- Tentative write-review link: https://search.google.com/local/writereview?placeid=ChIJkTXJWsJrnIAREs3UinCsY-4

## QA checklist

- [ ] Populate all actual Google review text and check name/date/rating accuracy
- [ ] Confirm guests' permission or other appropriate rights before republication
- [ ] Copy and verify the official Google Business Profile "Get more reviews" URL
- [ ] Keep existing platform tiles and existing stay statistics untouched
- [ ] Confirm no duplicate introductory headings or decorative stars
- [ ] Test carousel on desktop, tablet, and mobile
- [ ] Test reduced-motion and accessibility controls
- [ ] Verify Airbnb and Vrbo tiles open existing listings
- [ ] Confirm whether the Home and Lodge pages share the same configured component
- [ ] Replace Elfsight only after final live-site QA

## Scope boundary

This GitHub repository is **not automatically synchronized** with the separately hosted Framer website. Committing this file does not change the published website. The component must be inserted into the native Framer project.
