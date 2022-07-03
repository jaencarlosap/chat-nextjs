/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	extends: [
		'plugin:@next/next/recommended'
	]
}

// eslint-disable-next-line no-undef
module.exports = nextConfig