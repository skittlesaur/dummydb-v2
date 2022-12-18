import Link from 'next/link'

const pages = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Contribute',
    href: 'https://github.com/skittlesaur/dummydb',
  },
]

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-900 backdrop-blur px-4 md:px-0">
      <div className="max-w-screen-xl mx-auto py-5 flex items-center justify-between">
        <div className="italic font-medium select-none">
          dummy<span className="text-primary font-semibold">DB</span>
        </div>
        <nav>
          <ul className="flex items-center gap-4 text-sm">
            {pages.map(page => (
              <li key={page.href}>
                <Link
                  className="text-gray-400 hover:text-gray-200 transition-all duration-150 ease-in-out"
                  href={page.href}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navigation