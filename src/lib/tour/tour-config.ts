export const userTourSteps = [
  {
    element: "[data-tour='overview-intro']",
    popover: {
      title: "Hello",
      description: "Welcome to Neo Wallet user dashboard overview!",
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
    element: "[data-tour='balance-overview']",
    popover: {
      title: "Balance Overview",
      description:
        "You can see your total sent balance, received balance and transactions",
      side: "bottom",
      align: "center",
    },
  },
  {
    element: "[data-tour='recent-activities']",
    popover: {
      title: "Recent Activities",
      description:
        "Keep track of the latest activities on the platform, including transaction activity and balance activity.",
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
    element: "[data-tour='analytics-intro']",
    popover: {
      title: "Hello Admin!",
      description:
        "Welcome to Admin Dashboard Analytics! Here you can monitor system performance, user activity, and overall platform health.",
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
    element: "[data-tour='recent-activities']",
    popover: {
      title: "Recent Activities",
      description:
        "Keep track of the latest activities on the platform, including user registrations, agent approvals, and recent transactions.",
      side: "bottom",
      align: "center",
    },
  },
  {
    element: "[data-tour='system-health']",
    popover: {
      title: "system Health",
      description:
        "Monitor system performance, transaction logs, and overall platform health from this section.",
      side: "left",
      align: "start",
    },
  },
  {
    element: "[data-tour='users-activity']",
    popover: {
      title: "Users Activity",
      description:
        "Analyze user activity trends, transaction types, and platform usage statistics to make informed decisions.",
      side: "top",
      align: "center",
    },
  }
];
