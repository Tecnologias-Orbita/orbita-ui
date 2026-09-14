export function getDocRef(pkg: string, page: string) {
  return `/docs/${pkg}/${page}.md`;
}

export function getDocError(page: string) {
  return `/docs/error/${page}.md`;
}
