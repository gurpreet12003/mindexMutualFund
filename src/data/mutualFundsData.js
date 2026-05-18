/**
 * @typedef {Object} MutualFund
 * @property {string} id
 * @property {string} name
 * @property {'Equity' | 'Debt' | 'Hybrid' | 'Tax Saving (ELSS)' | 'Index Funds'} category
 * @property {string} subCategory
 * @property {'Low Risk' | 'Moderate Risk' | 'High Risk' | 'Very High Risk'} risk
 * @property {number} rating
 * @property {number} threeYearReturn
 * @property {number} fiveYearReturn
 * @property {string} fundSize
 * @property {number} nav
 * @property {number} minInvestment
 * @property {string} description
 * @property {string[]} tags
 */

export const MUTUAL_FUNDS = [
  {
    id: 'mf-1',
    name: 'Mindex Bluechip Equity Fund',
    category: 'Equity',
    subCategory: 'Large Cap Fund',
    risk: 'Very High Risk',
    rating: 5,
    threeYearReturn: 24.8,
    fiveYearReturn: 19.4,
    fundSize: '₹42,500 Cr',
    nav: 184.25,
    minInvestment: 500,
    description: 'Invests in top 100 established bluechip companies of India with a proven track record of stable growth and robust governance.',
    tags: ['Popular', 'Top Companies', 'Wealth Creation']
  },
  {
    id: 'mf-2',
    name: 'Mindex Flexi Cap Growth Fund',
    category: 'Equity',
    subCategory: 'Flexi Cap Fund',
    risk: 'Very High Risk',
    rating: 5,
    threeYearReturn: 28.6,
    fiveYearReturn: 22.1,
    fundSize: '₹34,120 Cr',
    nav: 215.80,
    minInvestment: 500,
    description: 'Dynamic allocation across large, mid, and small cap stocks based on market valuation and emerging growth opportunities.',
    tags: ['Popular', 'High Return', 'Dynamic']
  },
  {
    id: 'mf-3',
    name: 'Mindex ELSS Tax Saver Fund',
    category: 'Tax Saving (ELSS)',
    subCategory: 'ELSS',
    risk: 'High Risk',
    rating: 4,
    threeYearReturn: 22.4,
    fiveYearReturn: 18.7,
    fundSize: '₹18,900 Cr',
    nav: 142.10,
    minInvestment: 500,
    description: 'Save tax up to ₹46,800 under Section 80C while building long-term wealth with a low 3-year lock-in period.',
    tags: ['Tax Saving', 'Section 80C', 'Lowest Lock-in']
  },
  {
    id: 'mf-4',
    name: 'Mindex Balanced Advantage Fund',
    category: 'Hybrid',
    subCategory: 'Dynamic Asset Allocation',
    risk: 'Moderate Risk',
    rating: 5,
    threeYearReturn: 16.2,
    fiveYearReturn: 14.5,
    fundSize: '₹29,800 Cr',
    nav: 98.40,
    minInvestment: 1000,
    description: 'Automatically balances between equity and debt based on market conditions to minimize downside risk while capturing growth.',
    tags: ['Popular', 'Stable Growth', 'Better than FD']
  },
  {
    id: 'mf-5',
    name: 'Mindex Corporate Bond Fund',
    category: 'Debt',
    subCategory: 'Corporate Bond',
    risk: 'Low Risk',
    rating: 4,
    threeYearReturn: 8.4,
    fiveYearReturn: 7.9,
    fundSize: '₹15,400 Cr',
    nav: 112.50,
    minInvestment: 1000,
    description: 'Invests in highest-rated AA+ and AAA corporate bonds, offering predictable income and high capital preservation.',
    tags: ['Low Risk', 'Better than FD', 'Regular Income']
  },
  {
    id: 'mf-6',
    name: 'Mindex Nifty 50 Index Fund',
    category: 'Index Funds',
    subCategory: 'Index Fund',
    risk: 'High Risk',
    rating: 4,
    threeYearReturn: 20.1,
    fiveYearReturn: 16.8,
    fundSize: '₹12,200 Cr',
    nav: 175.00,
    minInvestment: 500,
    description: 'Low-cost passive investment replicating the Nifty 50 benchmark index. Ideal for long-term core equity holdings.',
    tags: ['Low Expense Ratio', 'Top Companies', 'Passive']
  },
  {
    id: 'mf-7',
    name: 'Mindex Midcap Opportunities Fund',
    category: 'Equity',
    subCategory: 'Mid Cap Fund',
    risk: 'Very High Risk',
    rating: 5,
    threeYearReturn: 34.2,
    fiveYearReturn: 26.5,
    fundSize: '₹21,050 Cr',
    nav: 284.15,
    minInvestment: 1000,
    description: 'Invests in emerging leaders and mid-sized companies with high growth potential and scalable business models.',
    tags: ['High Return', 'Aggressive Growth']
  },
  {
    id: 'mf-8',
    name: 'Mindex Liquid Treasury Fund',
    category: 'Debt',
    subCategory: 'Liquid Fund',
    risk: 'Low Risk',
    rating: 4,
    threeYearReturn: 7.2,
    fiveYearReturn: 6.8,
    fundSize: '₹48,000 Cr',
    nav: 105.10,
    minInvestment: 500,
    description: 'Park your surplus cash in highly secure short-term money market instruments with instant redemption facility.',
    tags: ['Emergency Fund', 'Instant Withdrawal', 'Low Risk']
  },
  {
    id: 'mf-9',
    name: 'Mindex Multi-Asset Allocation Fund',
    category: 'Hybrid',
    subCategory: 'Multi Asset',
    risk: 'Moderate Risk',
    rating: 5,
    threeYearReturn: 18.5,
    fiveYearReturn: 15.9,
    fundSize: '₹16,700 Cr',
    nav: 130.60,
    minInvestment: 500,
    description: 'Diversifies across Equity, Debt, and Gold ETFs to provide robust all-weather performance and inflation protection.',
    tags: ['Gold + Equity', 'Inflation Shield', 'Diversified']
  }
];

export const PORTFOLIO_SERVICES = [
  {
    id: 'service-1',
    title: 'Comprehensive Wealth Blueprint',
    subtitle: 'Holistic Mutual Fund Portfolio Planning Services',
    description: 'Tailored investment roadmaps designed by certified financial planners matching your exact risk appetite, time horizon, and life goals.',
    features: [
      'In-depth existing portfolio audit & restructuring',
      'Customized asset allocation strategy (Equity/Debt/Gold)',
      'Goal mapping for Retirement, Child Education & Home buying',
      'Tax optimization strategies under old & new regimes',
      'Quarterly rebalancing recommendations'
    ],
    badge: 'Most Popular',
    idealFor: 'Individuals seeking structured, long-term wealth creation.'
  },
  {
    id: 'service-2',
    title: 'Elite Advisory & Active Management',
    subtitle: 'Dedicated Mutual Fund Expert Concierge',
    description: 'Get a dedicated mutual fund portfolio manager who actively monitors market cycles, macroeconomic trends, and fund performance to maximize your returns.',
    features: [
      'Dedicated Senior Mutual Fund Advisor',
      'Direct access via phone, WhatsApp & video consults',
      'Tactical asset allocation adjustments during market volatility',
      'Priority access to NFOs (New Fund Offers) & special themes',
      'Comprehensive family wealth consolidated reporting'
    ],
    badge: 'Premium',
    idealFor: 'High Net Worth Individuals (HNIs) & busy professionals.'
  },
  {
    id: 'service-3',
    title: 'Retirement & Income Planning',
    subtitle: 'Secure & Predictable Cashflow Strategies',
    description: 'Specialized mutual fund portfolio planning services focused on creating inflation-beating retirement corpus and systematic withdrawal plans (SWP).',
    features: [
      'Inflation-adjusted retirement corpus estimation',
      'Transition strategy from aggressive equity to stable debt',
      'Tax-efficient Monthly Income generation via SWP',
      'Capital preservation framework with low-risk debt funds',
      'Estate planning & seamless nominee transmission guidance'
    ],
    badge: 'Specialized',
    idealFor: 'Pre-retirees and senior citizens seeking financial independence.'
  }
];

export const FUND_CATEGORIES_INFO = [
  {
    id: 'equity',
    name: 'Equity Mutual Funds',
    description: 'Invests primarily in shares of companies. Best suited for long-term wealth creation (5+ years) with higher return potential.',
    iconName: 'TrendingUp',
    features: ['High growth potential', 'Beats long-term inflation', 'Diverse market caps (Large, Mid, Small)']
  },
  {
    id: 'debt',
    name: 'Debt Mutual Funds',
    description: 'Invests in fixed income securities like government bonds and corporate debentures. Ideal for capital preservation and regular income.',
    iconName: 'ShieldCheck',
    features: ['Low market volatility', 'Predictable returns', 'Superior alternative to traditional savings']
  },
  {
    id: 'hybrid',
    name: 'Hybrid Mutual Funds',
    description: 'Combines the growth of equity with the stability of debt in a single fund. Perfect for balanced, moderate-risk investors.',
    iconName: 'PieChart',
    features: ['In-built asset allocation', 'Cushions market falls', 'Dynamic rebalancing']
  },
  {
    id: 'elss',
    name: 'Tax Saving (ELSS)',
    description: 'Equity Linked Savings Schemes offering dual benefits of robust capital growth and tax deductions up to ₹1.5 Lakh under Sec 80C.',
    iconName: 'FileText',
    features: ['Shortest lock-in (3 Years)', 'Tax savings up to ₹46,800', 'Long-term equity compounding']
  },
  {
    id: 'index',
    name: 'Index Funds',
    description: 'Passive mutual funds that track market indices like Nifty 50. Offers low expense ratios and eliminates fund manager bias.',
    iconName: 'BarChart2',
    features: ['Extremely low expense ratio', 'Transparent portfolio', 'Replicates broad market gains']
  }
];

export const TESTIMONIALS = [
  {
    name: 'Rajesh Sharma',
    role: 'IT Director & HNI Investor',
    content: 'Mindex Capital completely transformed my approach to investing. Their mutual fund portfolio planning services helped me consolidate 15 random funds into a clean, 5-fund high-performing portfolio. The clarity and advisory are unmatched.',
    rating: 5,
    location: 'Bengaluru'
  },
  {
    name: 'Dr. Ananya Iyer',
    role: 'Surgeon',
    content: 'As a busy medical professional, I have zero time to track markets. Mindex Capital’s dedicated advisory team manages my asset allocation flawlessly. I have seen steady 20%+ annualized growth over the last 4 years without any stress.',
    rating: 5,
    location: 'Mumbai'
  },
  {
    name: 'Vikram & Priya Mehta',
    role: 'Entrepreneurs',
    content: 'We wanted a rock-solid plan for our daughter’s higher education and our retirement. Mindex Capital crafted a beautiful goal-based mutual fund strategy. Their transparency and zero-conflict advice give us immense peace of mind.',
    rating: 5,
    location: 'Delhi NCR'
  }
];

export const FAQS = [
  {
    question: 'What are Mutual Fund Portfolio Planning Services at Mindex Capital?',
    answer: 'Our Mutual Fund Portfolio Planning Services provide end-to-end professional guidance. We analyze your financial goals, risk appetite, and investment horizon to create a customized portfolio of top-performing mutual funds. We also provide ongoing monitoring and periodic rebalancing to ensure your investments stay aligned with your wealth targets.'
  },
  {
    question: 'How is Mindex Capital different from regular mutual fund apps?',
    answer: 'While ordinary apps leave you to guess which funds to buy, Mindex Capital pairs cutting-edge technology with expert human advisory. We offer institutional-grade mutual fund research, personalized portfolio planning services, and dedicated financial experts who guide you through market highs and lows—ensuring you avoid costly emotional investment mistakes.'
  },
  {
    question: 'Are my mutual fund investments safe with Mindex Capital?',
    answer: 'Absolutely. All mutual fund units are held directly in your name with the respective Mutual Fund Houses (AMCs) and central depositories (CDSL/NSDL). Mindex Capital is a SEBI-registered mutual fund distributor and advisory platform. Your money moves directly from your bank account to the mutual fund house via secure, RBI-mandated payment gateways.'
  },
  {
    question: 'What is the minimum amount required to start investing in mutual funds?',
    answer: 'You can start investing with as little as ₹500 per month through Systematic Investment Plans (SIP) or make lump sum investments starting from ₹1,000. Our portfolio planning services cater to all investor stages, from beginners to HNIs.'
  },
  {
    question: 'Can I withdraw my mutual fund money anytime?',
    answer: 'Yes! Most open-ended mutual funds (Equity, Debt, Hybrid) allow you to withdraw your money anytime at the prevailing Net Asset Value (NAV). The funds are credited directly to your registered bank account within 1 to 3 working days. Note that ELSS tax-saver funds have a mandatory 3-year statutory lock-in period.'
  },
  {
    question: 'How do you select the best mutual funds for my portfolio?',
    answer: 'Our proprietary Mindex Fund Scoring Model evaluates over 1,500 mutual funds across 25+ qualitative and quantitative parameters. We analyze rolling returns, downside protection, expense ratios, fund manager consistency, and portfolio turnover to select only the top 2% of funds for your portfolio.'
  }
];

export const STATS = [
  { label: 'Assets Under Advisory', value: '₹12,500 Cr+' },
  { label: 'Happy Investors', value: '1.5 Lakh+' },
  { label: 'Cities Covered', value: '450+' },
  { label: 'Experienced Advisors', value: '120+' }
];
