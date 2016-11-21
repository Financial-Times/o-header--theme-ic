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
					children: ["All Tips & Ideas",
										"Share Tips",
										"Fund Tips",
										"Trading Ideas",
										"Stock Screens",
										"Bargain Shares Portfolio",
										"John Baron's Investment Trust Portfolio",
										"Bearbull Income Fund Portfolio",
										"Private Investor's Diary Portfolio",
										"Tactical Asset Allocation Portfolio",
										"Chris Dillow's Benchmark Portfolio"]
				},
				{
					name: 'Shares',
					url: '#',
					children: ["All Shares",
										"Company News",
										"Results",
										"Sector Focus",
										"Equities",
										"Director Deals",]
				},
				{
					name: 'Comment',
					url: '#',
					children: ["All Comment",
										"The Editor",
										"Simon Thompson",
										"The Trader",
										"Mr Bearbull",
										"Chris Dillow",
										"Taking Stock",
										"Property Matters",
										"PF Matters",
										"Paul Jackson",
										"Markets and Your Money",]
				},
				{
					name: 'Market Data',
					url: '#',
					children: ["All Market Data",
										"Equities",
										"Portfolio",
										"Funds Data",
										"Commodities",
										"Bonds",
										"UK Corporate Bonds & PIBS",
										"Forex",
										"Economic Calendar",
										"World Markets",]
				},
				{
					name: 'Managing Your Money',
					url: '#',
					children: ["All Managing Your Money",
										"Portfolio Clinic",
										"Asset Allocation",
										"Tax",
										"Pensions",
										"Risk",
										"Property",
										"Investing for Income",
										"Investing for Growth",
										"Tools & Calculators",]
				},
				{
					name: 'Funds and ETFs',
					url: '#',
					children: ["All Funds & ETFs",
										"Funds News",
										"Top 100 Funds",
										"Top 50 ETFs",
										"The Big Theme",
										"The Interview",
										"Investment Trusts",
										"ETFs",
										"Unit Trusts",
										"ISA Funds",
										"Funds Data",]
				},
				{
					name: 'Investment Guides',
					url: '#',
					children: []

				},
				{
					name: 'Alpha',
					url: '#',
					children: []
				}
			],
			isSignedIn: false
		},

		// Drawer
	//	drawer: drawer()
	};
};
