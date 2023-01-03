import Head from "next/head";
import formatISO from "date-fns/formatISO";

export default function Metadata({
  title,
  date = null,
  image = null,
  description,
  url = null,
  updatedAt = null,
}) {
  return (
    <Head>
      <title>{title}</title>
      {false && (
        <meta
          property="article:section"
          itemProp="articleSection"
          content="Business"
        />
      )}
      {date && (
        <meta
          property="article:published_time"
          itemProp="datePublished"
          content={formatISO(new Date(date))}
        />
      )}
      {updatedAt && (
        <meta
          property="article:modified_time"
          itemProp="dateModified"
          content={formatISO(new Date(updatedAt))}
        />
      )}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="RegEx Dictionary" />
      {false && (
        <meta
          property="article:publisher"
          content="https://www.facebook.com/fileinbox"
        />
      )}

      {url && <meta property="twitter:url" content={url} />}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {image && <meta property="twitter:image" content={image} />}
      {image && <meta name="twitter:card" value="summary_large_image" />}

      {false && <meta name="twitter:site" value="@fileinbox" />}
      <meta content="@cgenco" name="twitter:creator" />
      <meta name="twitter:domain" content="RegEx Dictionary" />

      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
  );
}

// import Head from "next/head";

// export default function Meta({ title, description, image }) {
//   return (
//     <Head>
//       <title>{title}</title>

//       <link rel="manifest" href="/site.webmanifest" />

//       <meta name="description" content={description} />

//       {image && <meta property="og:image" content={image} />}
//     </Head>
//   );
// }
