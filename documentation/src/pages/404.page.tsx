interface Props {
  error?: string;
}

export default function NotFoundPage({ error }: Props) {
  return <p>Not found {error}</p>;
}
