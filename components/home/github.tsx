import { useState } from 'react'
import Link from 'next/link'

enum GithubTabs {
  RELEASES = 'Releases',
  ISSUES = 'Issues',
}

interface Props {
  releases: any[]
}

const Github = ({ releases }: Props) => {
  const [activeTab, setActiveTab] = useState(GithubTabs.RELEASES)

  const formatDateTime = (date: string) => {
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="w-full bg-primary/20 border-primary-900 rounded-xl overflow-hidden flex flex-col border border-primary-900">
      <div className="bg-primary-900/50 grid grid-cols-2 w-full border-b border-primary-900">
        {Object.values(GithubTabs).map(tab => (
          <button
            disabled={activeTab === tab}
            key={tab}
            className={`px-4 py-2 ${tab === activeTab ? 'text-gray-50' : 'text-gray-50/60 hover:bg-primary-900/50'} transition-all duration-200 ease-in-out`}
            onClick={() => setActiveTab(tab)}
          >
            <span className={`${tab === activeTab ? 'drop-shadow drop-shadow-white' : ''}`}>
              {tab}
            </span>
          </button>
        ))}
      </div>
      <div className="py-4">
        {activeTab === GithubTabs.RELEASES && (
          <div className="flex flex-col">
            {releases.map(release => (
              <a
                key={release.id}
                href={release.html_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 text-gray-400 hover:text-gray-50 hover:bg-primary-900/50 px-4 py-3 transition-all duration-200 ease-in-out"
              >
                <div className="flex gap-4">
                  <p>
                    {release.tag_name}
                  </p>
                  <p>{release.name}</p>
                </div>
                <p className="text-sm">
                  {formatDateTime(release.published_at)}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Github