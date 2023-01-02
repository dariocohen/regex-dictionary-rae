import Link from "next/link";
import seo from "src/seo";

export default function Examples() {
  return (
    <div className="text-gray-500 mb-12">
      <h3 className="text-2xl font-medium text-gray-600 mt-12">Examples</h3>

      <ul className="list-disc columns-2">
        {Object.entries(seo).map(([slug, { title }]) => (
          <li>
            <Link href={`/${slug}`} className="hover:underline">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
