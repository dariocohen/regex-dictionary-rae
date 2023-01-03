import Link from "next/link";
import { useRouter } from "next/router";
import Container from "components/Container";

import Search from "components/Search";
import Meta from "components/Meta";

import seo from "src/seo";

export default function SeoPage({ title, regex, slug }) {
  // const router = useRouter();
  // const { slug } = router.query;

  // const page = seo[slug];
  // const { title, regex } = page;
  // if (!page) return 404;

  // console.log({ title, regex });

  return (
    <Container>
      <Meta
        title={title}
        description="Regular expression dictionary word search to find words containing certain letters by Christian Genco"
        image={`/api/og.png?slug=${slug}`}
      />
      <main>
        <h1 className="mt-4 text-6xl font-bold">{title}</h1>
        <h2 className="text-2xl">
          <Link href="/" className="hover:underline text-blue-500">
            regexdictionary.com
          </Link>{" "}
          by{" "}
          <a
            className="hover:underline text-blue-500"
            href="https://christian.gen.co"
          >
            Christian Genco
          </a>
        </h2>
        <Search defaultRegex={regex} />
      </main>
    </Container>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(seo).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = seo[params.slug];
  return {
    props: { ...page, slug: params.slug },
  };
}
