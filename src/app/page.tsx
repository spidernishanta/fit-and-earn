"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fit & Earn</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="#features" className="hover:underline">Features</Link></li>
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto mt-10 p-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Fit & Earn</h2>
        <p className="text-lg mb-6">
          Track your fitness, earn rewards, and stay motivated!
        </p>
        <Link href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700">
          Register Now
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-16">
        <h3 className="text-3xl font-bold text-center mb-8">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://storage.googleapis.com/a1aa/image/6-ngyZn1uaBzUxZNYUJdUogJFKRXIGA1j2e5jUI_fnM.jpg" 
                 alt="Exercise Breaks" className="mx-auto mb-4" width={100} height={100} />
            <h4 className="text-2xl font-bold mb-2">Exercise Breaks</h4>
            <p>Take regular breaks to stay active and healthy.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://storage.googleapis.com/a1aa/image/OiWvOydxHXErW8Xcs-ta-iL49VRc-reOm9qqffoe4Iw.jpg" 
                 alt="Gamification" className="mx-auto mb-4" width={100} height={100} />
            <h4 className="text-2xl font-bold mb-2">Gamification</h4>
            <p>Earn rewards by tracking your fitness progress.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src="https://storage.googleapis.com/a1aa/image/ZjSMcWC0J0p1v0W5uhaKCH08MZntTsNlg2scfPuvHsk.jpg" 
                 alt="Community" className="mx-auto mb-4" width={100} height={100} />
            <h4 className="text-2xl font-bold mb-2">Community</h4>
            <p>Be part of a supportive and vibrant community.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 mt-16">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Fit & Earn. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}