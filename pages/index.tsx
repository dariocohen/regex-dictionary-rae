import { useState } from "react";
import Container from "components/Container";

import Search from "components/Search";
import Meta from "components/Meta";

export default function Home() {
  return (
    <Container>
      <Meta
        title="Regex Dictionary Word Search"
        description="Regular expression dictionary word search for Wordle, Scrabble, or Crosswords to find words containing certain letters in different positions."
        image="https://www.regexdictionary.com/api/og.png"
      />
      <main>
        <h1 className="mt-4 text-6xl font-bold">Regex Dictionary</h1>
        <h2 className="text-4xl">
          by{" "}
          <a
            className="hover:underline text-blue-500"
            href="https://christian.gen.co"
          >
            Christian Genco
          </a>
        </h2>
        <Search />
      </main>
    </Container>
  );
}
