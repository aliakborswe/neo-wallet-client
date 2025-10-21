export const userTourSteps = [
  {
    element: "[data-tour='sidebar-nav']",
    popover: {
      title: "Navigation Menu",
      description:
        "Welcome to Neo Wallet! This is your navigation menu. Use it to switch between different sections like Send Money, Add Money, Withdraw, and view your Transactions.",
      side: "right",
      align: "start",
    },
  },
  {
    element: "[data-tour='wallet-balance']",
    popover: {
      title: "Wallet Balance",
      description:
        "This is your wallet balance overview. It shows your current balance, total sent, and total received. Keep track of your financial activity at a glance.",
      side: "bottom",
      align: "center",
    },
  },
  {
    element: "[data-tour='quick-actions']",
    popover: {
      title: "Quick Actions",
      description:
        "Quick action buttons allow you to perform common tasks instantly. Send money to others, add funds to your wallet, or withdraw your balance.",
      side: "bottom",
      align: "center",
    },
  },
  {
    element: "[data-tour='recent-transactions']",
    popover: {
      title: "Recent Transactions",
      description:
        "View your recent transactions here. You can search, filter by type, and see detailed information about each transaction.",
      side: "top",
      align: "center",
    },
  },
  {
    element: "[data-tour='profile-settings']",
    popover: {
      title: "Profile Settings",
      description:
        "Access your profile settings to update your personal information, view account details, and manage your preferences.",
      side: "left",
      align: "start",
    },
  },
];

export const agentTourSteps = [
  {
    element: "[data-tour='sidebar-nav']",
    popover: {
      title: "Navigation Menu",
      description:
        "Welcome to Agent Dashboard! Navigate between Cash In, Cash Out, Transactions, Commission tracking, and your Profile.",
      side: "right",
      align: "start",
    },
  },
  {
    element: "[data-tour='agent-stats']",
    popover: {
      title: "Agent Statistics",
      description:
        "View your key metrics: total cash in, total cash out, pending transactions, and your earned commission.",
      side: "bottom",
      align: "center",
    },
  },
  {
    element: "[data-tour='cash-services']",
    popover: {
      title: "Cash Services",
      description:
        "Manage cash in and cash out services. Process customer transactions and track your service activity.",
      side: "bottom",
      align: "center",
    },
  },
  {
    element: "[data-tour='commission-info']",
    popover: {
      title: "Commission Tracking",
      description:
        "Track your commission earnings. See your transaction fee percentage and total commission earned.",
      side: "top",
      align: "center",
    },
  },
  {
    element: "[data-tour='profile-settings']",
    popover: {
      title: "Agent Profile",
      description:
        "View your agent profile, approval status, and account information.",
      side: "left",
      align: "start",
    },
  },
];

export const adminTourSteps = [
  {
    element: "[data-tour='sidebar-nav']",
    popover: {
      title: "Navigation Menu",
      description:
        "Welcome to Admin Dashboard! Manage Users, Agents, Transactions, and Wallets from here.",
      side: "right",
      align: "start",
    },
  },
  {
    element: "[data-tour='admin-stats']",
    popover: {
      title: "System Statistics",
      description:
        "System overview showing total users, agents, wallets, and transaction volume. Monitor your platform's health at a glance.",
      side: "bottom",
      align: "center",
    },
  },
  {
    element: "[data-tour='user-management']",
    popover: {
      title: "User Management",
      description:
        "Manage all users in the system. View profiles, block/unblock wallets, and monitor user activity.",
      side: "bottom",
      align: "center",
    },
  },
  {
    element: "[data-tour='transaction-management']",
    popover: {
      title: "Transaction Management",
      description:
        "View and filter all transactions. Search by type, amount, or accounts involved. Monitor transaction flow.",
      side: "top",
      align: "center",
    },
  },
  {
    element: "[data-tour='wallet-management']",
    popover: {
      title: "Wallet Management",
      description:
        "Manage all wallets in the system. Update wallet status and monitor wallet activity.",
      side: "left",
      align: "start",
    },
  },
];
