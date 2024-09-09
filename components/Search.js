import { useState, useEffect } from "react";
import Examples from "components/Examples";
import WordList from "components/WordList";

function CopyButton({ url }) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);
  return (
    <button
      className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        if (navigator?.share) {
          navigator.share({
            title: document.title,
            text: "",
            url,
          });
        } else {
          // copy to clipboard
          navigator.clipboard.writeText(url);
        }
        setCopied(true);
      }}
    >
      {copied ? "Copied!" : navigator?.share ? "share" : "copy URL"}
    </button>
  );
}

function Input({ className, value, setValue }) {
  return (
    <div className={className}>
      <label
        htmlFor="regex"
        className="block text-2xl font-medium text-gray-700"
      >
        RegEx
      </label>

      <div className="relative mt-1 rounded-md shadow-sm text-3xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 font-mono">/</span>
        </div>
        <input
          type="text"
          name="regex"
          id="regex"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="text-3xl block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border px-2 py-1 pl-7 pr-12 font-mono"
          placeholder="^r[aeiou]g[aeiou]x$"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 font-mono">/i</span>
        </div>
      </div>
    </div>
  );
}

export default function Search({ defaultRegex = "" }) {
  const [regex, setRegex] = useState(defaultRegex);

  useEffect(() => {
    setRegex(defaultRegex);
  }, [defaultRegex]);

  return (
    <div>
      <Input className="mt-12" value={regex} setValue={setRegex} />

      {/* button to share this URL on mobile */}
      {regex && regex !== defaultRegex && (
        <CopyButton
          url={`https://regex-dictionary-rae.vercel.app/regex?r=${encodeURIComponent(
            regex
          )}`}
        />
      )}

      {regex && (
        <div className="mt-6">
          <h3 className="text-2xl font-medium text-gray-700 mt-4">Results</h3>
          <WordList regex={regex} />
        </div>
      )}

      <h3 className="text-2xl font-medium text-gray-700 mt-8">
        RegEx tutorial
      </h3>
      <iframe
        className="w-full aspect-video rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/7QI9CW06QJg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      ></iframe>

      <Examples />
    </div>
  );
}
