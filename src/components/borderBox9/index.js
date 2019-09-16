import React, { useState } from 'react'

import PropTypes from 'prop-types'

import useAutoResize from '../../use/autoResize'

import './style.less'

const BorderBox = ({ children }) => {
  const { width, height, domRef } = useAutoResize()

  const [{ gradientId, maskId }] = useState(() => {
    const timestamp = Date.now()

    return {
      gradientId: `border-box-9-gradient-${timestamp}`,
      maskId: `border-box-9-mask-${timestamp}`
    }
  })

  return (
    <div className='dv-border-box-9' ref={domRef}>
      <svg className='dv-svg-container' width={width} height={height}>
        <defs>
          <linearGradient id={gradientId} x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#11eefd' />
            <stop offset='100%' stopColor='#0078d2' />
          </linearGradient>

          <mask id={maskId}>
            <polyline
              stroke='#fff'
              strokeWidth='3'
              fill='transparent'
              points={`8, ${height * 0.4} 8, 3, ${width * 0.4 + 7}, 3`}
            />
            <polyline
              fill='#fff'
              points={`8, ${height * 0.15} 8, 3, ${width * 0.1 + 7}, 3
                ${width * 0.1}, 8 14, 8 14, ${height * 0.15 - 7}
              `}
            />

            <polyline
              stroke='#fff'
              strokeWidth='3'
              fill='transparent'
              points={`${width * 0.5}, 3 ${width - 3}, 3, ${width -
                3}, ${height * 0.25}`}
            />
            <polyline
              fill='#fff'
              points={`
                ${width * 0.52}, 3 ${width * 0.58}, 3
                ${width * 0.58 - 7}, 9 ${width * 0.52 + 7}, 9
              `}
            />
            <polyline
              fill='#fff'
              points={`
                ${width * 0.9}, 3 ${width - 3}, 3 ${width - 3}, ${height * 0.1}
                ${width - 9}, ${height * 0.1 - 7} ${width - 9}, 9 ${width *
                0.9 +
                7}, 9
              `}
            />

            <polyline
              stroke='#fff'
              strokeWidth='3'
              fill='transparent'
              points={`8, ${height * 0.5} 8, ${height - 3} ${width * 0.3 +
                7}, ${height - 3}`}
            />
            <polyline
              fill='#fff'
              points={`
                8, ${height * 0.55} 8, ${height * 0.7}
                2, ${height * 0.7 - 7} 2, ${height * 0.55 + 7}
              `}
            />

            <polyline
              stroke='#fff'
              strokeWidth='3'
              fill='transparent'
              points={`${width * 0.35}, ${height - 3} ${width - 3}, ${height -
                3} ${width - 3}, ${height * 0.35}`}
            />
            <polyline
              fill='#fff'
              points={`
                ${width * 0.92}, ${height - 3} ${width - 3}, ${height -
                3} ${width - 3}, ${height * 0.8}
                ${width - 9}, ${height * 0.8 + 7} ${width - 9}, ${height -
                9} ${width * 0.92 + 7}, ${height - 9}
              `}
            />
          </mask>
        </defs>

        <rect
          x='0'
          y='0'
          width={width}
          height={height}
          fill={`url(#${gradientId})`}
          mask={`url(#${maskId})`}
        />
      </svg>

      <div className='border-box-content'>{children}</div>
    </div>
  )
}

BorderBox.propTypes = {
  children: PropTypes.node
}

export default BorderBox