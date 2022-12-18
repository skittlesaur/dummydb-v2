import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import categories from '@lib/types'
import SearchIcon from '@icons/search.svg'
import CloseIcon from '@icons/close.svg'
import searchType from '@lib/search-type'

const Modal = ({ hideModal, updateType }: any) => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isSearching, setIsSearching] = useState(false)
  const [searchResult, setSearchResult] = useState<any>(undefined)

  useEffect(() => {
    if (!isSearching) setSearchResult(undefined)
  }, [isSearching])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={hideModal}
      className="z-[100] fixed inset-0 bg-black/80 flex items-center justify-center cursor-pointer"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        onClick={e => e.stopPropagation()}
        className="shadow-lg bg-gray-900 border border-gray-700 rounded-md w-[90%] max-h-[60%] md:w-2/3 md:max-w-[66%] overflow-hidden md:aspect-video cursor-default"
      >
        <div className="flex items-center justify-between gap-2 border-b border-gray-800 px-4 py-2 h-14 md:px-6 md:py-4 md:h-16">
          <div className="z-[1] relative flex items-center gap-2 md:gap-4">
            {categories.map((category, idx) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(idx)}
                className={`${activeCategory === idx && searchResult === undefined ? 'text-gray-50' : 'text-gray-400 hover:text-gray-300'} transition-all duration-200 ease-in-out`}
              >
                {category.title}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <AnimatePresence mode="wait">
              {!isSearching && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  key="open-search"
                  onClick={() => setIsSearching(prev => !prev)}
                  className="text-gray-500 hover:text-gray-200 w-5 aspect-square transition-all duration-150 ease-in-out"
                >
                  <SearchIcon className="fill-current" />
                </motion.button>
              )}
              {isSearching && (
                <>
                  <motion.input
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    key="search"
                    className="z-[1] bg-gray-800 border border-gray-700 rounded-md px-2 py-1 w-32 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Search"
                    autoFocus
                    onChange={e => {
                      const value = e.target.value.toLowerCase()
                      const result = searchType(value)
                      setSearchResult(result)
                    }
                    }
                    onClick={e => e.stopPropagation()}
                  />
                  <div
                    className="fixed inset-0 z-[0]"
                    onClick={() => setIsSearching(false)}
                  />
                </>
              )}
            </AnimatePresence>
            <button
              onClick={hideModal}
              className="relative text-gray-500 hover:text-gray-200 w-5 aspect-square transition-all duration-150 ease-in-out"
            >
              <CloseIcon className="fill-current" />
            </button>
          </div>
        </div>
        <div className="relative grid grid-cols-2 md:grid-cols-4 md:grid-rows-6 gap-2 px-2 md:px-12 py-6 overflow-y-auto h-full w-full">
          {searchResult === undefined && categories[activeCategory].types.map(type => (
            <button
              key={type.title}
              onClick={() => updateType(type.title)}
              className="text-left flex flex-col px-4 py-2 rounded-md hover:bg-gray-800 text-gray-200 hover:text-gray-300 transition-all duration-200 ease-in-out"
            >
              <span>{type.title}</span>
              <span className="text-gray-500 text-sm">{type.description}</span>
            </button>
          ))}
          {searchResult !== undefined && searchResult.map((type: any) => (
            <button
              key={type.title}
              onClick={() => updateType(type.title)}
              className="text-left flex flex-col px-4 py-2 rounded-md hover:bg-gray-800 text-gray-200 hover:text-gray-300 transition-all duration-200 ease-in-out"
            >
              <span>{type.title}</span>
              <span className="text-gray-500 text-sm">{type.description}</span>
            </button>
          ))}
          {searchResult !== undefined && searchResult.length === 0 && (
            <div className="text-gray-500 text-sm col-span-4 text-center">No results</div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Modal