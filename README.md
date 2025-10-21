# Neo Wallet - Digital Wallet Frontend

A fully responsive digital wallet application built with modern web technologies. Neo Wallet provides a complete financial management solution with role-based dashboards for users, agents, and administrators.

## 🌟 Features

### User Dashboard

- **Wallet Management**: View balance, transaction history, and wallet status
- **Money Transfer**: Send money to other users with real-time processing
- **Add Money**: Deposit funds into your wallet
- **Withdraw**: Withdraw funds from your wallet
- **Transaction History**: Detailed transaction records with filtering and pagination
- **Analytics**: Visual charts showing transaction trends and balance history
- **Profile Management**: Update personal information and security settings

### Agent Dashboard

- **Commission Tracking**: Monitor earnings and commission history
- **Cash-In Service**: Accept money from users
- **Cash-Out Service**: Provide cash withdrawal services
- **Agent Analytics**: View transaction distribution and activity charts
- **Approval Status**: Track agent verification status
- **Transaction Management**: View all agent-related transactions

### Admin Dashboard

- **System Overview**: Real-time metrics for users, agents, wallets, and transactions
- **User Management**: View and manage user accounts
- **Agent Management**: Approve/reject agent applications
- **Transaction Monitoring**: Track all system transactions with advanced filtering
- **Wallet Management**: Monitor wallet status and block/unblock as needed
- **System Health**: Monitor API status and system uptime

## 🛠️ Technology Stack

- **Frontend Framework**: [React js](https://react.dev/) - React library
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) - Predictable state container
- **API Integration**: [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - Data fetching and caching
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/) - High-quality React components
- **Charts**: [Recharts](https://recharts.org/) - Composable charting library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Guided Tours**: [Driver.js](https://driverjs.com/) - Interactive product tours
- **HTTP Client**: [Axios API](https://axios-http.com/docs/intro) - Native browser API

## 📋 Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/aliakborswe/neo-wallet-client.git
   cd neo-wallet
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install

   # or

   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. **Configure API endpoint**
   Edit `.env.local` and set your API base URL:
   \`\`\`
   NEXT_PUBLIC_API_BASE_URL=https://neo-wallet-api.vercel.app/api/v1
   \`\`\`

### Development

Start the development server:

\`\`\`bash
npm run dev

# or

yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build for production:

\`\`\`bash
npm run build
npm start

# or

yarn build
yarn start
\`\`\`

## 📁 Project Structure

NEO-WALLET-CLIENT/
├── public/ # Static assets (favicons, manifest.json)
├── src/
│ ├── assets/ # Images, icons, and non-component specific styles
│ ├── components/
│ │ ├── charts/ # Reusable chart components (LineChart, BarChart)
│ │ ├── dashboard/ # Components specific to dashboard views
│ │ │ └── StatCard.tsx # Dashboard metric component
│ │ ├── layout/ # Structural components (Header, Footer, Navigation)
│ │ └── ui/ # Generic, reusable UI primitives (Buttons, Inputs, Modals)
│ ├── config/ # Application-wide configuration settings
│ ├── constants/ # Global immutable values (API endpoints, Magic strings)
│ ├── hooks/ # Custom React Hooks for shared logic
│ ├── lib/ # Utility libraries or external module wrappers
│ ├── pages/ # Main view components (mapped to routes)
│ ├── redux/ # Redux Toolkit setup
│ │ ├── features/ # State slices (auth, account, transactions)
│ │ ├── axiosBaseQuery.ts # Custom RTK Query with Axios
│ │ ├── baseApi.ts # RTK Query root API definition
│ │ ├── hook.ts # Typed Redux hooks
│ │ └── store.ts # Redux store configuration
│ ├── routes/ # Routing definitions and component mapping
│ ├── types/ # TypeScript interfaces and types
│ ├── utils/ # Pure helper functions (formatters, validators)
│ ├── App.tsx # Main component with Router
│ ├── index.css # Global CSS styles
│ ├── main.tsx # Entry point
│ └── vite-env.d.ts # Vite environment type definitions
├── .env # Environment variables
└── package.json # Dependencies and scripts

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:

- **Login**: Email and password authentication
- **Registration**: Create new user or agent accounts
- **Token Management**: Automatic token refresh and persistence
- **Protected Routes**: Role-based access control (USER, AGENT, ADMIN)

### Demo Credentials

For testing purposes, use these credentials:

**User Account**

- Email: `user@example.com`
- Password: `password123`

**Agent Account**

- Email: `agent@example.com`
- Password: `password123`

**Admin Account**

- Email: `admin@example.com`
- Password: `password123`

## 🎨 Design System

### Color Palette

- **Primary**: Emerald Green (#10b981) - Financial growth and trust
- **Accent**: Blue (#3b82f6) - Secondary actions and highlights
- **Background**: Dark theme with black to dark gray gradient
- **Text**: Light gray on dark backgrounds for optimal contrast

### Typography

- **Headings**: Inter (sans-serif)
- **Body**: Inter (sans-serif)
- **Monospace**: Fira Code (for code blocks)

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Fully responsive across all device sizes

## 📊 API Integration

The application integrates with the Neo Wallet API:

**Base URL**: `https://neo-wallet-api.vercel.app/api/v1`

### Key Endpoints

**Authentication**

- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/logout` - User logout
- `POST /auth/refresh-token` - Refresh JWT token

**User Operations**

- `GET /users/me` - Get current user profile
- `GET /users/me/wallet` - Get user wallet
- `GET /users/me/transactions` - Get user transactions
- `POST /users/send-money` - Send money to another user
- `POST /users/add-money` - Add money to wallet
- `POST /users/withdraw` - Withdraw from wallet

**Agent Operations**

- `POST /agents/cash-in` - Cash-in service
- `POST /agents/cash-out` - Cash-out service
- `GET /agents/me/commission` - Get commission details

**Admin Operations**

- `GET /admin/users` - Get all users
- `GET /admin/agents` - Get all agents
- `GET /admin/wallets` - Get all wallets
- `GET /admin/transactions` - Get all transactions
- `PATCH /admin/agents/:id/approve` - Approve agent
- `PATCH /admin/agents/:id/reject` - Reject agent

## 🎯 Key Features

### Real-time Data

- Live wallet balance updates
- Transaction history with real-time status
- Commission tracking for agents
- System metrics for administrators

### Data Visualization

- Transaction trend charts
- Balance history graphs
- Transaction type distribution
- System analytics

### User Experience

- Guided tours for first-time users
- Toast notifications for actions
- Loading states and skeletons
- Error handling and validation
- Responsive design for all devices

### Security

- JWT token-based authentication
- Protected routes with role-based access
- Secure password handling
- HTTPS communication
- Token refresh mechanism

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   \`\`\`bash
   git push origin main
   \`\`\`

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set environment variables
   - Deploy

3. **Set Environment Variables in Vercel**
   - `NEXT_PUBLIC_API_BASE_URL`: Your API endpoint

### Deploy to Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean
- Heroku
- Railway

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email support@neowallet.com or open an issue on GitHub.

## 🔗 Links

- **Live Demo**: [https://neo-wallet-client.netlify.app/](https://neo-wallet-client.netlify.app/)
- **GitHub Repository**: [https://github.com/aliakborswe/neo-wallet-client](https://github.com/aliakborswe/neo-wallet-client)

## 🙏 Acknowledgments

- [React js](https://react.dev/) - React library
- [Shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Recharts](https://recharts.org/) - Charts library

---

**Made with ❤️ by the Neo Wallet Team**
