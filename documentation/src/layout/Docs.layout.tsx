import type { DocMetadataType } from "@/types/doc-map";
import {
  Sidebar,
  type IWithChildrenComponent,
} from "@tecnologias-orbita/orbita-ui-react";
import { Link } from "react-router";

interface DocsLayoutProps extends IWithChildrenComponent {
  metadata?: DocMetadataType;
}

export default function DocsLayout({
  metadata,
  children,
  className,
  ...props
}: DocsLayoutProps) {
  const breadcrumb = metadata?.breadcrumb ?? [];
  const index = metadata?.index ?? [];
  const links = metadata?.links;

  return (
    <section
      className={`flex flex-col flex-1 overflow-auto prose max-w-3xl mx-auto px-4 py-6 ${className ?? ""}`}
      {...props}
    >
      {breadcrumb.length > 0 && (
        <div className="relative mb-6">
          <div className="absolute inset-0 left-0 bg-gradient-to-r from-docs-bg via-docs-bg/50 to-transparent z-10 pointer-events-none sm:hidden" aria-hidden="true" />
          <div className="absolute inset-0 right-0 bg-gradient-to-l from-docs-bg via-docs-bg/50 to-transparent z-10 pointer-events-none sm:hidden" aria-hidden="true" />
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 sm:justify-start sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0" aria-label="Breadcrumb">
            {breadcrumb.map((item, index) => (
              <>
                {index === breadcrumb.length - 1 ? (
                  <span
                    key={index}
                    className="text-sm font-medium text-docs-text truncate max-w-[200px] whitespace-nowrap"
                    aria-current="page"
                  >
                    {item.text}
                  </span>
                ) : (
                  <Link
                    key={index}
                    to={item.href}
                    className="text-sm font-medium text-docs-muted hover:text-docs-accent transition-colors whitespace-nowrap"
                  >
                    {item.text}
                  </Link>
                )}
                {index < breadcrumb.length - 1 && (
                  <span className="mx-2 text-docs-border shrink-0" aria-hidden="true">/</span>
                )}
              </>
            ))}
          </nav>
        </div>
      )}
      {metadata?.title && (
        <h1 className="mb-2">{metadata.title}</h1>
      )}
      {metadata?.description && (
        <p className="text-docs-muted mb-6 leading-relaxed">{metadata.description}</p>
      )}
      <Sidebar.Wrapper className="gap-8 lg:gap-12">
        {children}
        {index.length > 0 && (
          <Sidebar.Sidebar side="right">
            <nav className="space-y-1" aria-label="Table of contents">
              {index.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.ref}
                  className="block px-3 py-1.5 text-sm font-medium text-docs-muted hover:text-docs-accent transition-colors rounded-md hover:bg-docs-accent-subtle"
                >
                  {item.text}
                </Link>
              ))}
            </nav>
          </Sidebar.Sidebar>
        )}
        {links && (
          <footer className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-6 border-t border-docs-border">
            {links.previous && (
              <Link
                to={links.previous.href}
                className="col-span-1 sm:col-span-2 flex items-center justify-center gap-2 rounded-md border border-docs-border px-4 py-2.5 text-sm font-medium text-docs-muted hover:bg-docs-surface hover:text-docs-text hover:border-docs-muted transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{links.previous.text}</span>
              </Link>
            )}
            {links.related?.length &&
              links.related.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.href}
                  className="col-span-1 sm:col-span-2 flex items-center justify-center gap-2 rounded-md border border-docs-border px-4 py-2.5 text-sm font-medium text-docs-muted hover:bg-docs-surface hover:text-docs-text hover:border-docs-muted transition-colors"
                >
                  <span>{item.text}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              ))}
            {links.next && (
              <Link
                to={links.next.href}
                className="col-span-1 sm:col-span-2 flex items-center justify-center gap-2 rounded-md bg-docs-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-docs-accent-hover transition-colors"
              >
                <span>{links.next.text}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.293 4.293a1 1 0 011.414 0l7 7a1 1 0 010 1.414l-7 7a1 1 0 01-1.414-1.414L12.586 12l-5.293-5.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            )}
          </footer>
        )}
      </Sidebar.Wrapper>
    </section>
  );
}
