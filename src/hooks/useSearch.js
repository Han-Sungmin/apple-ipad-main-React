import { useState, useRef, useEffect } from 'react'

export function useSearch() {
  const [isSearching, setIsSearching] = useState(false)
  const searchInputRef = useRef(null)

  const showSearch = () => {
    setIsSearching(true)
    document.documentElement.classList.add('fixed')
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus()
      }
    }, 600)
  }

  const hideSearch = () => {
    setIsSearching(false)
    document.documentElement.classList.remove('fixed')
    if (searchInputRef.current) {
      searchInputRef.current.value = ''
    }
  }

  return { isSearching, showSearch, hideSearch, searchInputRef }
}

