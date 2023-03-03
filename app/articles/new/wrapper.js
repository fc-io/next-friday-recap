import Link from 'next/link'

export default function ArticlesLayout({ children }) {
  return (
    <>
      <div>
        <Link href="/articles/new" style={{
          margin: '10px',
          border: '2px solid black',
        }}>Back to New Articles</Link>
      </div>
      <div>{children}</div>
    </>
  )
}
