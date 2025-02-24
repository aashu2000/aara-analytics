# AARA Analytics - Telangana Vehicle Registration Analytics

![AARA Analytics Logo](public/images/logo.png)

## Overview

AARA Analytics provides comprehensive vehicle registration data analytics for Telangana through interactive Power BI dashboards. Our platform offers real-time insights, market analysis, and custom reporting solutions for automotive dealers and manufacturers.

## Features

- **Interactive Dashboards**
  - Real-time Market Share Analysis
  - Historical Trend Analysis & Forecasting
  - Competitive Performance Metrics
  - District-wise Registration Data

- **Custom Reports**
  - Tailored Analytics Solutions
  - Power BI Integration
  - Regular Data Updates
  - Export Capabilities

## Tech Stack

- **Frontend Framework:** Next.js 14
- **UI Libraries:**
  - React 18
  - TailwindCSS
  - Lucide Icons
  - Recharts
  - shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/aara-analytics.git
cd aara-analytics
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Project Structure

```
aara-analytics/
├── src/
│   ├── app/
│   │   ├── page.tsx       # Main landing page
│   │   └── layout.tsx     # Root layout
│   └── components/
│       └── ui/            # Reusable UI components
├── public/
│   └── images/           # Static images and assets
└── package.json
```

## Deployment

The site is deployed on Vercel. Each push to the main branch triggers automatic deployment.

To deploy your own instance:

1. Fork this repository
2. Sign up on [Vercel](https://vercel.com)
3. Import your forked repository
4. Configure your deployment settings
5. Deploy!

## Contact

- Website: [telanganatrdata.com](https://telanganatrdata.com)
- Email: contact@telanganatrdata.com

## License

This project is private and proprietary. All rights reserved to AARA Analytics.

---

© 2025 AARA Analytics. All rights reserved.