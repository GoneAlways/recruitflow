---
name: Professional Vitality
colors:
  surface: '#f5fafa'
  surface-dim: '#d5dbda'
  surface-bright: '#f5fafa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff5f4'
  surface-container: '#e9efee'
  surface-container-high: '#e4e9e9'
  surface-container-highest: '#dee4e3'
  on-surface: '#171d1d'
  on-surface-variant: '#3d4949'
  inverse-surface: '#2c3231'
  inverse-on-surface: '#ecf2f1'
  outline: '#6c7a79'
  outline-variant: '#bcc9c9'
  surface-tint: '#006a6a'
  primary: '#006a6a'
  on-primary: '#ffffff'
  primary-container: '#00a6a7'
  on-primary-container: '#003434'
  inverse-primary: '#5bd9d9'
  secondary: '#5b5e68'
  on-secondary: '#ffffff'
  secondary-container: '#dcdfea'
  on-secondary-container: '#5f636c'
  tertiary: '#96481c'
  on-tertiary: '#ffffff'
  tertiary-container: '#da7d4c'
  on-tertiary-container: '#521e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7af5f6'
  primary-fixed-dim: '#5bd9d9'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f50'
  secondary-fixed: '#dfe2ed'
  secondary-fixed-dim: '#c3c6d1'
  on-secondary-fixed: '#181c23'
  on-secondary-fixed-variant: '#434750'
  tertiary-fixed: '#ffdbcb'
  tertiary-fixed-dim: '#ffb692'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783204'
  background: '#f5fafa'
  on-background: '#171d1d'
  surface-variant: '#dee4e3'
  success-mint: '#00A6A7'
  status-pending: '#FF7D00'
  status-rejected: '#F53F3F'
  status-offered: '#00B42A'
  background-surface: '#F7F8FA'
  border-subtle: '#E5E6EB'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter-sm: 12px
  gutter-md: 16px
  margin-mobile: 16px
  margin-desktop: 24px
  stack-gap: 8px
---

## Brand & Style

The design system is engineered for a high-efficiency recruitment ecosystem that balances professional reliability with energetic career growth. It targets two distinct personas: ambitious job seekers and result-oriented hiring managers. The aesthetic is **Corporate Modern with a Minimalist edge**, prioritizing rapid information scanning and trust-building through clarity.

The visual language avoids excessive decoration, opting instead for a "content-first" hierarchy. It utilizes generous whitespace to reduce cognitive load during dense data tasks (like reading job descriptions or reviewing resumes). Subtle shadows and layers create a sense of organized depth, while high-contrast elements ensure the interface remains accessible and professional under various lighting conditions.

## Colors

The palette is anchored by **Recruitment Blue (#00A6A7)**, a vibrant teal that symbolizes both the stability of corporate trust and the fresh energy of new beginnings. This is used exclusively for primary actions and brand-critical indicators.

- **Primary:** Recruitment Blue for "Apply," "Chat," and active states.
- **Secondary/Neutral:** A range of deep grays and near-blacks (#1D2129) are used for high-contrast typography to ensure maximum readability.
- **Backgrounds:** The default state uses a layered white-to-light-gray approach (#F7F8FA) to separate card surfaces from the global canvas.
- **Semantic Colors:** Specific hues are reserved for application status tracking—Orange for pending, Green for offers, and Red for rejections—ensuring users can parse their status at a glance without reading text.

## Typography

This design system uses **Inter** exclusively to leverage its exceptional legibility and systematic design. The type scale is optimized for information-dense environments.

- **Job Titles:** Use `headline-md` with 600 weight for immediate recognition in lists.
- **Job Descriptions:** Use `body-lg` for the primary text to ensure long-form reading comfort, utilizing a generous 1.5x line height.
- **Metadata (Salary, Location):** Use `label-md` in Recruitment Blue or Semi-bold Neutral to create a distinct visual anchor.
- **Mobile Adjustments:** Headlines scale down on mobile to prevent awkward line breaks while maintaining a strong visual weight.

## Layout & Spacing

The layout follows a **4px base grid** with a fluid-to-fixed model. 

- **Mobile:** A single-column fluid layout with 16px side margins. Cards span the full width of the safe area minus margins.
- **Tablet/Desktop:** A 12-column grid. Job detail views use a 60/40 split (6 columns for description, 4 for company profile/actions, 2 for margins).
- **Rhythm:** Vertical spacing between cards in a list is strictly 12px (`gutter-sm`) to maintain a "tight but breathable" professional feel. Internal card padding is consistently 16px (`gutter-md`).

## Elevation & Depth

Hierarchy is established through **Tonal Layers** supplemented by **Ambient Shadows**.

- **Level 0 (Canvas):** The base background uses a soft gray (#F7F8FA).
- **Level 1 (Cards):** All job and status cards are pure white (#FFFFFF) with a 1px subtle border (#E5E6EB) and a very soft, diffused shadow (Y: 2, Blur: 8, Opacity: 0.04) to suggest lift without looking "heavy."
- **Level 2 (Modals/Dropdowns):** Use a more pronounced shadow (Y: 4, Blur: 16, Opacity: 0.08) to indicate interaction priority.
- **Active State:** When a card is pressed or focused, the border color shifts to the Primary Recruitment Blue.

## Shapes

The shape language is defined as **Rounded**, communicating approachability while maintaining a structured, professional framework.

- **Standard Components:** Buttons, Input Fields, and Job Cards use a **12px (`rounded-lg`)** corner radius.
- **Badges/Chips:** Application status badges use a **pill-shaped** (full radius) geometry to distinguish them from interactive buttons.
- **Avatars:** Company logos in cards use a **8px** radius to maintain brand recognition within the system's rounded language.

## Components

### Buttons
- **Primary ('Apply'):** Solid Recruitment Blue background, white text, 12px radius. High-emphasis.
- **Secondary ('Chat'):** Outlined Recruitment Blue with 1px border. Used for alternative primary actions.
- **Tertiary ('Favorite'):** Ghost style (no background/border) with icon and text.

### Job Listing Cards
- White background, 12px radius, 16px internal padding.
- Top row: Job Title (Left), Salary (Right, Primary Color).
- Middle row: Tags (Location, Experience, Education) using light gray background chips.
- Bottom row: Company Logo (40x40px), Company Name, and HR status.

### Status Badges
- Small, pill-shaped indicators.
- Use a "Soft Tint" approach: 10% opacity of the status color for the background, 100% opacity for the text (e.g., Light Green bg with Dark Green text for "Offered").

### Input Fields
- 12px radius, light gray border (#E5E6EB).
- Focus state: Border transitions to Recruitment Blue with a 2px outer glow.

### Application Tracking List
- Vertical timeline-style lists.
- Uses subtle 2px vertical lines to connect status nodes, emphasizing the progression of the recruitment funnel.