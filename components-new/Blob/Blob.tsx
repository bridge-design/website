import React from 'react'
import * as styles from './Blob.module.css'

interface BlobProps {
  color?: string
  size?: number
  animate?: boolean
}

export const Blob: React.FC<BlobProps> = ({
  color = 'var(--btg-color-accent-500)',
  size = 300,
  animate = false,
}) => {
  return (
    <div className="w-fit" style={{ width: size }}>
      <div className="group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          style={{ color: color }}
          className={`${styles.blob} ${animate ? styles.animate : ''}`}
        >
          <path
            className={styles.blob1}
            d="M29.7,-29C36.5,-22.8,38.8,-11.4,37.2,-1.6C35.6,8.2,30,16.3,23.2,24.3C16.3,32.2,8.2,40,-1.1,41.1C-10.3,42.1,-20.6,36.5,-26.2,28.6C-31.7,20.6,-32.4,10.3,-32.3,0.1C-32.2,-10.2,-31.3,-20.3,-25.8,-26.5C-20.3,-32.6,-10.2,-34.8,0.6,-35.4C11.4,-36,22.8,-35.1,29.7,-29Z"
            fill="currentColor"
            opacity="0.5"
          />
          <path
            className={styles.blob2}
            d="M24.6,-10C28.1,2.9,24.7,16.1,14.9,24.1C5,32.2,-11.3,35,-19.7,28.6C-28.1,22.1,-28.6,6.3,-24,-8.1C-19.4,-22.4,-9.7,-35.4,0.4,-35.5C10.5,-35.7,21,-23,24.6,-10Z"
            fill="currentColor"
            opacity="0.4"
          />
          <path
            className={styles.blob3}
            d="M24,-28.5C31,-22.7,36.5,-15.1,38.4,-6.4C40.4,2.2,38.8,11.8,33.5,17.7C28.2,23.6,19.2,25.7,10.4,29.2C1.7,32.7,-6.8,37.4,-14.7,36.3C-22.6,35.2,-29.8,28.3,-33.6,20.2C-37.4,12,-37.7,2.7,-35.7,-5.9C-33.7,-14.5,-29.5,-22.3,-23.1,-28.2C-16.8,-34.1,-8.4,-38.1,0.1,-38.1C8.5,-38.2,17,-34.3,24,-28.5Z"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>
    </div>
  )
}
