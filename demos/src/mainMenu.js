//const drawer = require('./drawer');

module.exports = function () {
	return {
		// Anonymous bar
		anon: true,

		// Top bar
		top: {
			hasMenu: true,
			hasMyFT: true
		},

		// Search bar
		search: true,

		// Navigation bar
		nav: {
			mobile: [],
			desktop: [
				{
					name: 'Home',
					url: '#',
					selected: true
				},
				{
					name: 'Tips & Ideas',
					url: '#',
					index: 1,
					hasMega: true,
					children: [
						{name: "All Tips & Ideas"},
						{name: "Share Tips"},
						{name: "Fund Tips"},
						{name: "Trading Ideas"},
						{name: "Stock Screens"},
						{name: "Bargain Shares Portfolio"},
						{name: "John Baron's Investment Trust Portfolio"},
						{name: "Bearbull Income Fund Portfolio"},
						{name: "Private Investor's Diary Portfolio"},
						{name: "Tactical Asset Allocation Portfolio"},
						{name: "Chris Dillow's Benchmark Portfolio"}]
				},
				{
					name: 'Shares',
					url: '#',
					index: 2,
					hasMega: true,
					children: [
						{name: "All Shares"},
						{name: "Company News"},
						{name: "Results"},
						{name: "Sector Focus"},
						{name: "Equities"},
						{name: "Director Deals"}]
				},
				{
					name: 'Comment',
					url: '#',
					index: 3,
					hasMega: true,
					children: [
						{name: "All Comment"},
						{name: "The Editor"},
						{name: "Simon Thompson"},
						{name: "The Trader"},
						{name: "Mr Bearbull"},
						{name: "Chris Dillow"},
						{name: "Taking Stock"},
						{name: "Property Matters"},
						{name: "PF Matters"},
						{name: "Paul Jackson"},
						{name: "Markets and Your Money"}]
				},
				{
					name: 'Market Data',
					url: '#',
					index: 4,
					hasMega: true,
					children: [
						{name: "All Market Data"},
						{name: "Equities"},
						{name: "Portfolio"},
						{name: "Funds Data"},
						{name: "Commodities"},
						{name: "Bonds"},
						{name: "UK Corporate Bonds & PIBS"},
						{name: "Forex"},
						{name: "Economic Calendar"},
						{name: "World Markets"}]
				},
				{
					name: 'Managing Your Money',
					url: '#',
					index: 5,
					hasMega: true,
					children: [
						{name: "All Managing Your Money"},
						{name: "Portfolio Clinic"},
						{name: "Asset Allocation"},
						{name: "Tax"},
						{name: "Pensions"},
						{name: "Risk"},
						{name: "Property"},
						{name: "Investing for Income"},
						{name: "Investing for Growth"},
						{name: "Tools & Calculators"}]
				},
				{
					name: 'Funds and ETFs',
					url: '#',
					index: 6,
					hasMega: true,
					children: [
						{name: "All Funds & ETFs"},
						{name: "Funds News"},
						{name: "Top 100 Funds"},
						{name: "Top 50 ETFs"},
						{name: "The Big Theme"},
						{name: "The Interview"},
						{name: "Investment Trusts"},
						{name: "ETFs"},
						{name: "Unit Trusts"},
						{name: "ISA Funds"},
						{name: "Funds Data"}]
				},
				{
					name: 'Investment Guides',
					url: '#',
					index: 7,
					children: []

				},
				{
					name: 'Alpha',
					url: '#',
					index: 8,
					children: []
				}
			],
			isSignedIn: false
		},
	};
};
