import { useState, useRef, useEffect } from 'react'

export function useBasket() {
  const [isOpen, setIsOpen] = useState(false)
  const basketRef = useRef(null)

  const toggleBasket = (e) => {
    if (e) {
      e.stopPropagation()
    }
    setIsOpen(!isOpen)
  }

  const closeBasket = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false)
    }

    if (isOpen) {
      window.addEventListener('click', handleClickOutside)
    }

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  return { isOpen, toggleBasket, closeBasket, basketRef }
}

