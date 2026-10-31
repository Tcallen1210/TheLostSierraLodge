# The Lost Sierra Lodge — Google Review Carousel (Framer)

**Status: installed and published October 31, 2026.**

`LSLGoogleReviews.tsx` is installed inside the shared **Guest Reviews** Framer component. Its Desktop Large master supplies the tablet and phone variants on the Home / Lodge page. The previous Elfsight embed was removed. The existing native heading, five gold stars, Airbnb / Vrbo / Direct ratings and links, review counts, and stay statistics remain in place.

## Editing in Framer

1. Open the **Guest Reviews** component.
2. In its Desktop Large master, select **LSLGoogleReviews**.
3. In the right property panel, open **Reviews** to edit, add, remove, or reorder reviews. Each entry exposes reviewer name, date, full text, stars, source URL, and verified-direct-booking status.
4. The same panel exposes colors, scrolling, and Google link settings. Leave the extra heading disabled because the native section already provides one.
5. Preview desktop, tablet, and phone, then **Publish**.

This is a Framer React code component with editable property controls. Reviews do not require source-code edits, but the individual card internals are not separate native canvas layers.

## Current content

Three five-star Google reviews were populated from the public business profile: Josh Kirk (updated October 2026), Amanda Giles (March 2025), and Christina Drukala (September 2025). Josh's full review explicitly states that he booked directly; only his entry has the verified direct-booking badge.

The historical Christina review mentions twelve guests. A visible footnote clarifies: “Reviews describe past stays. The Lodge currently welcomes up to 10 overnight guests.”

Google profile: https://www.google.com/maps?cid=17177763003086720274

The write-review CTA uses https://search.google.com/local/writereview?placeid=ChIJkTXJWsJrnIAREs3UinCsY-4. It redirects to Google sign-in; the signed-in review form was not inspected because automatic approval review blocked that authentication boundary. No review was submitted.

## Behavior

- Continuous horizontal scrolling with a repeated track and working wraparound navigation.
- Manual Pause / Play and previous / next controls.
- Native horizontal touch scrolling.
- Pauses on hover, keyboard focus, expanded text, hidden page, or reduced-motion preference.
- Read more / Read less preserves full review text.
- Google attribution, star rating, reviewer, date, source links, and read-all / leave-review CTAs.
- Autoplay disabled on the Framer editing canvas.

## Validation completed

- Framer page previews at desktop 1200, tablet 810, and phone 390 settings; actual phone content viewport 375 and tablet viewport 795 showed no page-level horizontal overflow.
- Automatic scrolling, manual pause, repeated next-arrow wraparound, and review expansion verified.
- Shared component inherited across responsive variants.
- Published homepage verified with the carousel present and zero Elfsight script, iframe, or app-class elements.
- Existing platform ratings and stay statistics visibly preserved.
- Reduced-motion behavior reviewed in source; no runtime preference emulation or physical-device touch test performed.

## Maintenance

Reviews are maintained manually through Framer properties. **Automatic Google synchronization is not implemented.** Adding new Google reviews requires updating the property list and publishing.

The repository is not automatically synchronized with Framer. Updating this source file alone does not deploy a website change; source changes must also be applied in Framer and published.

Live site: https://thelostsierralodge.com/
