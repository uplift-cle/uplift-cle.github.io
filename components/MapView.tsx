'use client'

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Point,
} from 'react-simple-maps'
import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MapView({ locations }: { locations: any[] }) {
  return (
    <ComposableMap projection="geoAlbersUsa" width={1000} height={600} className="max-w-full mx-auto">
      <Geographies geography="https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#0B7D44"
              stroke="#1f2937"
              strokeWidth={0.5}
            />
          ))
        }
      </Geographies>

      {locations.map(({ id, name, status, coordinates }) => (
        <Marker key={id} coordinates={coordinates as Point}>
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: id * 0.1, ease: 'easeOut' }}
          >
            <MapPin
              size={16}
              strokeWidth={2}
              color="white"
              fill={status === 'active' ? 'url(#gradientGreen)' : 'url(#gradientGray)'}
              style={{ pointerEvents: 'none' }}
              transform="translate(-8, -8)"
            />
            <text
              textAnchor="middle"
              y={25}
              style={{ fontFamily: 'arial', fill: '#9ca3af', fontSize: 12 }}
            >
              {name}
            </text>
          </motion.g>
        </Marker>
      ))}

      <defs>
        <linearGradient id="gradientGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
        <linearGradient id="gradientGray" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>
    </ComposableMap>
  )
}
