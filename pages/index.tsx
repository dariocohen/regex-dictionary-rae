import { useState } from "react";
import Container from "components/Container";

import Search from "components/Search";
import Meta from "components/Meta";

export default function Home() {
  return (
    <Container>
      <Meta
        title="Regex Dictionary Word Search"
        description="Regular expression dictionary word search to find words containing certain letters by Christian Genco"
        image="/api/og"
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
