import { useState } from "react";
import Container from "components/Container";

import Search from "components/Search";
import Meta from "components/Meta";
import Footer from "components/Footer";

export default function Home() {
  return (
    <Container>
      <Meta
        title="RegEx RAE Spanish Dictionary Word Search"
        description="Regular expression dictionary word search for Wordle, Scrabble, or Crosswords to find words containing certain letters in different positions."
        image="https://www.regexdictionary.com/api/og.png"
      />
      <main>
        <h1 className="mt-4 text-6xl font-bold">RegEx Dictionary</h1>

        <Search />
      </main>
      <Footer />
    </Container>
  );
}
