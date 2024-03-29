/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio']
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;

// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//             protocol: 'https',
//             hostname: 'cdn.imagin.studio',
//             port: '',
//             pathname: 'utils/index.ts'
//         },
//       ],
//     },
//   };
