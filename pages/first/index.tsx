import Link from 'next/link';

function first() {
  return (
    <div>
      <Link href="/first/second">
        <a>second</a>
      </Link>
    </div>
  );
}

export default first;