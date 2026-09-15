import { useParams } from "react-router";
import NotFoundPage from "@/pages/404.page";
import { DOCS_MAP } from "./docs.map";
import DocsPage from "./page";
import DocsLayout from "@/layout/Docs.layout";
export default function DocsRouter() {
  const { pkg, page, segment } = useParams();
  const resultPkg = DOCS_MAP[pkg];
  const resultSegment = resultPkg?.childMap?.[segment];
  const resultPage = resultSegment?.childMap?.[page];
  const level = Number(!!pkg) + Number(!!segment) + Number(!!page);

  if (level === 0) return <DocsPage />;

  if (level === 1) {
    if (!resultPkg) return <NotFoundPage error={`Package not found: ${pkg}`} />;
    return (
      <DocsLayout metadata={resultPkg.metadata}>
        <resultPkg.component />
      </DocsLayout>
    );
  }

  if (level === 2) {
    if (!resultSegment)
      return <NotFoundPage error={`Segment not found: ${segment}`} />;
    return (
      <DocsLayout metadata={resultSegment.metadata}>
        <resultSegment.component />
      </DocsLayout>
    );
  }

  if (level === 3) {
    if (!resultPage) return <NotFoundPage error={`Page not found: ${page}`} />;
    return (
      <DocsLayout metadata={resultPage.metadata}>
        <resultPage.component />
      </DocsLayout>
    );
  }

  return <NotFoundPage error="Invalid route" />;
}
