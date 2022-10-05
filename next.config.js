/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	async rewrites() {
		return [
			{
				source: '/scholarprogress',
				destination: '/ScholarProgress',
			},
			{
				source: '/transactions',
				destination: '/Transactions',
			},
			{
				source: '/confirmation',
				destination: '/Confirmation',
			},
			{
				source: '/donation',
				destination: '/Donation',
			},
			{
				source: '/thank-you',
				destination: '/ThankYou',
			},
		]
	},
}

module.exports = nextConfig
