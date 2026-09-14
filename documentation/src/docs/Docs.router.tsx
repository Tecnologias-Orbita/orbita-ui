import { useParams } from "react-router";
import NotFoundPage from "@/pages/404.page";
import { DOCS_MAP } from "./docs.map";
import DocsPage from "./page";

export default function DocsRouter() {
  const { pkg, page, segment } = useParams();
  const resultPkg = DOCS_MAP[pkg];
  const resultSegment = resultPkg?.childMap?.[segment];
  const resultPage = resultSegment?.childMap?.[page];
  const level = Number(!!pkg) + Number(!!segment) + Number(!!page);
  let Page: React.FC;

  if (level === 0) return <DocsPage />;

  if (level === 1 && !resultPkg)
    return <NotFoundPage error={`Package not found: ${pkg}`} />;

  if (level === 1) Page = resultPkg.component;

  if (level === 2 && !resultSegment)
    return <NotFoundPage error={`Segment not found: ${segment}`} />;

  if (level === 2) Page = resultSegment.component;

  if (level === 3 && !resultPage)
    return <NotFoundPage error={`Page not found: ${page}`} />;

  if (level === 3) Page = resultPage.component;

  return <Page />;
}
