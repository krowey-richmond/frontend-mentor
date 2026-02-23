Here’s a simple, clean, portfolio-ready version of your README:

---

# Four Card Feature Section

My solution to the [Four Card Feature Section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK).

## Overview

A responsive four-card feature section:

- Mobile-first design
- Cards stack on small screens
- Desktop layout: left and right cards span two rows, middle cards stacked

### Screenshot

![Screenshot](./screenshot.jpg)

### Links

- [GitHub Repository](https://github.com/krowey-richmond/four-card-feature-section)
- [Live Site](https://your-live-site-url.com)

---

## My Process

**Built with:** HTML, CSS, Flexbox, CSS Grid, Mobile-first workflow

**Key Learnings:**

- Explicit grid tracks are required for manual placement
- `align-self: center` on spanned rows creates a floating effect
- Separating layout (`.grid-item`) and styling (`.box`) keeps CSS organized

**Example CSS for desktop layout:**

```css
@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 2rem;
  }
  .box:nth-child(1),
  .box:nth-child(4) {
    grid-row: 1 / 3;
    align-self: center;
  }
  .box:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
  .box:nth-child(3) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
}
```

---

## Author

- GitHub: [Krowey Richmond Borquaye](https://github.com/krowey-richmond)
- Frontend Mentor: [@krowey-richmond](https://www.frontendmentor.io/profile/krowey-richmond)

---

## Acknowledgments

- Thanks to **Frontend Mentor** for the challenge.
- Special thanks to ChatGPT for minor guidance on CSS Grid alignment and layout ideas.
