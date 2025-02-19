"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Prevent unwanted redirection by waiting for session state to be resolved
  useEffect(() => {
    if (status === "loading") return; // Wait until session is resolved

    if (status === "unauthenticated") {
      router.push("/");
    } else {
      setIsLoading(false); // Set loading to false when session is confirmed
    }
  }, [status, router]);

  if (isLoading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  return (
    <main className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto p-4">
        <header className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">User Dashboard</h1>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Personalized Study Schedule</h2>
            <ul>
              <li className="mb-2 flex justify-between"><span>Math - Algebra</span><span>10:00 AM</span></li>
              <li className="mb-2 flex justify-between"><span>Science - Physics</span><span>11:30 AM</span></li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Activity Tracker</h2>
            <p>Steps: 10,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Gamification System</h2>
            <p>Points: 1,200</p>
          </div>
        </div>
      </div>
    </main>
  );
}