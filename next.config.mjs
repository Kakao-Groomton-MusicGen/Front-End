/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/', // 기본 경로로 접근하면
        destination: '/home', // '/home'으로 리다이렉트
        permanent: true, // 301 리다이렉트 (영구 리다이렉트)
      },
    ];
  },
};

export default nextConfig;
