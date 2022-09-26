/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	async rewrites() {
		return [
			{
				source: '/',
				destination: '/',
			},
		]
	},
}

module.exports = nextConfig
