import Fuse from 'fuse.js'
import categories from '@lib/types'

const types = categories.map((category) => category.types).flat()

const searchType = (search: string) => {
  const options = {
    keys: [
      {
        name: 'title',
        weight: 1,
      },
      {
        name: 'description',
        weight: 1,
      },
    ],
  }

  const fuse = new Fuse(types, options)
  const results = fuse.search(search)
  return results.map((result) => result.item)
}

export default searchType