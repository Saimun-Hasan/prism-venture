# Prism Venture Website (Portfolio Project)

## Important Notice

This repository contains code for a website developed for Prism Venture. This code is shared as a portfolio piece with permission from the client. All rights to the design, content, and implementation are reserved by Prism Venture. This code is not available for reuse, redistribution, or modification without explicit permission.

## Overview

This website serves as the online presence for Prism Venture, a company with 14+ years of experience offering three distinct business lines:

1. **Apparel Division** - A buying house for woven, knit, and sweater products
2. **Jute Division** - Sustainable jute products including bags, fabrics, and rope
3. **IT Division** - Data processing solutions with specialized security and quality control

## Tech Stack

- **Framework**: Next.js
- **Styling**: CSS modules (global.css)
- **Components**: Custom UI components

## Project Structure

```
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js app router structure
│   │   ├── _components/  # Shared components
│   │   │   ├── navbar.tsx
│   │   │   ├── serviceCard.tsx
│   │   │   └── topBar.tsx
│   │   ├── apparel/    # Apparel section pages
│   │   │   ├── about.tsx
│   │   │   ├── gallery.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── page.tsx
│   │   │   ├── product.tsx
│   │   │   └── services.tsx
│   │   ├── contact/    # Contact page
│   │   │   └── page.tsx
│   │   ├── it/         # IT services section
│   │   │   ├── about.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── page.tsx
│   │   │   ├── quality.tsx
│   │   │   ├── security.tsx
│   │   │   └── services.tsx
│   │   └── jute/       # Jute products section
│   │       ├── about.tsx
│   │       ├── gallery.tsx
│   │       ├── hero.tsx
│   │       ├── home.tsx
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       ├── product.tsx
│   │       └── services.tsx
│   ├── components/ui/  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── sheet.tsx
│   │   └── toggle.tsx
│   ├── hooks/         # Custom React hooks
│   │   └── useCounter.ts
│   ├── lib/           # Utility functions
│   │   └── utils.ts
│   └── styles/        # Global styles
│       ├── global.css
```

## Features

- **Multi-section Website**: Dedicated sections for apparel, jute, and IT services
- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Component-based Architecture**: Reusable UI components for consistent design
- **Modern UI Elements**: Custom buttons, cards, dropdown menus, etc.

## Apparel Section

Showcases Prism Venture's buying house services for:
- Woven products (suits, jackets, denims, pants, skirts)
- Knit products (tees, polos, sweatshirts, hoodies)
- Sweater products (sweaters, jumpers, vests, cardigans)

Includes service descriptions for development, factory identification, quality control, and manufacturing guidance.

## Jute Section

Features Prism Venture's eco-friendly jute products:
- Jute rope
- Jute fabrics
- Jute bags
- Other jute products

Emphasizes sustainability and environmental benefits of jute materials.

## IT Section

Details Prism Venture's data processing solutions:
- Data entry services
- Scanning and OCR cleanup
- Data sorting
- Survey and questionnaire handling
- Airway bill entries
- Market research tabulation
- Customer command card management

Includes detailed information on security measures and quality control processes.

## Contact Information

Prism Venture
- Address: House # 317 (2nd floor), Road # 04, Baridhara DOHS, Dhaka-1206
- Phone: +880-02-8417590, +880-02-8417591, +8801713363842
- Email: saadi@prismbd.net

## My Contribution
I designed and developed this website from concept to deployment, including:

- Creating a unified design system across three distinct business sections
- Implementing responsive layouts that maintain brand consistency
- Building reusable component library for efficient development
- Optimizing for performance and SEO

## Getting Started

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/prism-venture-website.git
cd prism-venture-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file based on `.env.example`

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

# License and Usage
This codebase is shared for portfolio purposes only. The code and design are proprietary to Prism Venture and cannot be used, copied, modified, or distributed without permission. If you're interested in similar work, please contact me directly.
