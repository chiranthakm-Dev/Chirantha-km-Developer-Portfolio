import Link from "next/link";
import { content as c } from "@/data/content";
export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <p className="eyebrow">{c.labels.errorCode}</p>
      <h1>{c.labels.notFound}</h1>
      <p>{c.labels.notFoundDetail}</p>
      <Link className="pill" href="/">
        {c.labels.back}
      </Link>
    </main>
  );
}
