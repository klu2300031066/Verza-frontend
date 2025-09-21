import React, { useEffect, useRef, useState } from 'react'

const slides = [
  {
    id: 1,
    image: 'http://zebronics.com/cdn/shop/files/Zeb-power-pic1.jpg?v=1747306528&width=2048',
    alt: 'Zebronics Gaming Mouse'
  },
  {
    id: 2,
    image: 'https://www.primeabgb.com/wp-content/uploads/2025/08/pre-bult-pc-Heaven-1-PC-Thumb.jpg',
    alt: 'PrimeABGB Gaming PC'
  },
  {
    id: 3,
    image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/Primary_image_1200_black?$mediaCarouselSmall$&fmt=png-alpha',
    alt: 'Sony Gaming Headphones'
  },
  {
    id: 4,
    image: 'https://cdn.mos.cms.futurecdn.net/ScV86zVws5qDnowbP7KsWA.jpg',
    alt: 'Dell Gaming Laptop'
  },
  {
    id: 5,
    image: 'https://cdn.webshopapp.com/shops/277909/files/430023898/1100x720x2/wireless-earpods-xg-true-pro-50.jpg',
    alt: 'Wireless Earpods'
  }
]

const AUTO_MS = 4000

const HeroCarousel = () => {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length)
    }, AUTO_MS)
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (i) => setIndex(((i % slides.length) + slides.length) % slides.length)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  return (
    <div className="hero">
      {slides.map((s, i) => (
        <img
          key={s.id}
          src={s.image}
          alt={s.alt}
          className={`hero__slide ${i === index ? 'is-active' : ''}`}
          draggable={false}
        />
      ))}

      <button className="hero__nav hero__nav--left" onClick={prev} aria-label="Previous slide">‹</button>
      <button className="hero__nav hero__nav--right" onClick={next} aria-label="Next slide">›</button>

      <div className="hero__dots">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`hero__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroCarousel



