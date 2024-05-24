import NextLink from 'next/link';

export default function Link({ children, href, ...props }) {
  if (href.startsWith('http')) {
    return (
      <a target="_blank" rel="noopener" href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
