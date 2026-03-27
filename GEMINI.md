# GEMINI.md - Roadmap for ProtectoMAQ Studio

## Project Overview
**ProtectoMAQ Studio** is a high-end Sanity v3 CMS for an industrial tech landing page. It uses a modular, section-based architecture to provide a flexible and high-performance content management experience, perfectly synchronized with a Next.js frontend.

## 1. Current Content Architecture

### Core Documents
- **Page (`page`):** A flexible document type used to build various landing pages.
  - **Sections Array (`sections`):** A modular builder allowing the following components:
    - **hero:** Fields for label, title, description, primary/secondary CTA, and image.
    - **solutionsSection:** Fields for label, title, and a selection of industrial solutions.
    - **leadMagnet:** Fields for title, subtitle, and an associated form title.
- **Settings (`settings`):** Site-wide configuration singleton.
  - **Fields:** Logo, Navigation Header (navItems), Favicon, and Footer configuration.

### Reusable Objects
- **Solution (`solution`):** Defines an industrial service with title, Lucide icon, description, and key stats.
- **CTA (`cta`):** Call-to-action object with label, URL, and style variants.
- **SEO (`seo`):** Metadata group for search engine optimization.
- **Form (`form`):** Configuration for lead capture forms.
- **Navigation (`navItem`):** Defines links and labels for headers and menus.
- **Footer (`footerConfig`):** Detailed company info, social links, schedules, and legal links.

## 2. Strategic Tasks & Implementation Status

### Completed
- [x] **Modular Schema:** Implemented sections (hero, lead magnet, solutions) using `defineType` and `defineArrayMember`.
- [x] **Icon Strategy:** Integrated `lucide-icon` plugin for searchable icon selectors in Solutions.
- [x] **Global Settings:** Centralized navigation and footer management in a single `settings` document.
- [x] **SEO Integration:** Added a reusable SEO object across pages.

## 3. Roadmap & Future Features

### Short Term
- [ ] **Preview Mode:** Configure Sanity Presentation or standard previews to see Next.js live changes.
- [ ] **Visual Editing:** Enable Overlays for direct content editing from the frontend.
- [ ] **Validation Enhancements:** Add more robust validation rules for critical fields like slugs and URLs.

### Mid Term
- [ ] **Multi-language Support:** Integrate `sanity-plugin-internationalized-array` for localized content.
- [ ] **Media Library:** Configure an asset management strategy for high-quality industrial images.
- [ ] **Advanced Forms:** Extend `form` object to support custom fields and Zapier/Webhook integrations.

## 4. Visual & Editorial Standards
- **Editorial Guidance:** Every field must include a clear `title` and `description`.
- **UI Organization:** Use fieldsets and collapsible groups to keep document views clean.
- **TypeScript:** Use `defineType`, `defineField`, and `defineArrayMember` for type safety.
