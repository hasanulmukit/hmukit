// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Hasanul Mukit',
  description:
    'Portfolio website of Hasanul Mukit, a passionate web developer & AI/ML researcher.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Increase overall font size by adding text-lg */}
      <body className="text-lg">{children}</body>
    </html>
  );
}
