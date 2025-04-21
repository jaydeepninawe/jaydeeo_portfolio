import React from "react";

const facts = [
  "I like winter more than summer",
  "I often bike with my friends",
  "I like pizza and pasta",
  "I was in Egypt, Poland and Turkey",
  "My favorite movie is The Green Mile",
  "I am still in school",
  "I don’t have any siblings",
];

const FunFacts = () => {
  return (
    <div className="bg-[#1b1f27] min-h-32 px-4 sm:px-16 py-16 relative mt-5 bg-transparent">
     

      {/* Facts grid */}
      <div className="flex flex-wrap gap-3 max-w-4xl text-4xl">
        {facts.map((fact, index) => (
          <span
            key={index}
            className="text-gray-300 border border-gray-500 px-3 py-1 text-sm sm:text-base font-mono rounded whitespace-nowrap"
            dangerouslySetInnerHTML={{ __html: highlightKeywords(fact) }}
          ></span>
        ))}
      </div>

      {/* Decorative dots top right */}
      <div className="hidden md:block absolute top-16 right-20">
        <div className="grid grid-cols-4 gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-500 opacity-30 rounded-full" />
          ))}
        </div>
      </div>

      {/* Decorative squares center right */}
      <div className="hidden md:block absolute top-36 right-32">
        <div className="w-12 h-12 border-2 border-purple-400 absolute" />
        <div className="w-12 h-12 border-2 border-purple-400 absolute left-3 top-3" />
      </div>

      {/* Decorative dots bottom right */}
      <div className="hidden md:block absolute bottom-10 right-10">
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-500 opacity-30 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

function highlightKeywords(text: string): string {
  const keywords = ["pizza", "pasta", "Egypt", "Poland", "Turkey", "The Green Mile"];
  return text.replace(
    new RegExp(`(${keywords.join("|")})`, "gi"),
    '<span class="text-white font-semibold">$1</span>'
  );
}

export default FunFacts;
