import Link from 'next/link'

export default function ArticlesLayout({ children }) {
  return (
    <>
      <div>
        <Link href="/articles" style={{
          margin: '10px',
          border: '2px solid black',
        }}>Back to Articles</Link>
      </div>
      <div>{children}</div>
    </>
  )
}
