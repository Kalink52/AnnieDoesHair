"use client";

const links = ["DA3L4vEux-w", "DBPB0DISgM2", "DA2BDSysBet"];
export default function Instagram() {
  return (
    <div className="flex justify-center mt-10 flex-auto ">
      {links.map((link, index) => {
        return (
          <iframe
            key={index}
            src={`https://www.instagram.com/p/${link}/embed`}
            width="320"
            height="400"
            frameBorder="0"
            allowFullScreen
            className="rounded-xl shadow-md"
          ></iframe>
        );
      })}
    </div>
  );
}
