"use client";

export function Hero() {
    return (
      <section className="h-[90vh] bg-gradient-to-br from-pink-100 to-pink-300 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Luxe Locks</h1>
        <p className="text-lg max-w-md mb-6">
          Where beauty meets artistry. Haircuts, color, and styles tailored just for you.
        </p>
        <button className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition">
          CALL NOW
        </button>
      </section>
    );
  }