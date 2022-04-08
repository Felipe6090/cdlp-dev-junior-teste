import NextHead from "next/head";

export default function ConfigHead() {
  return (
    <NextHead>
      {`
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    `}
    </NextHead>
  );
}
