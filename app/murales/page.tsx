'use client'

import { getContent } from '@/lib/content'
import { useEffect, useRef } from 'react'

const content = getContent()

export default function MuralesPage() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const locations = content.murales.locations as any[]
  const mapInitialized = useRef(false)

  useEffect(() => {
    if (mapInitialized.current || !mapContainer.current) return
    mapInitialized.current = true

    // Dynamic import of Leaflet (client-side only)
    import('leaflet').then((L) => {
      // Fix default icon paths
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      if (!mapContainer.current) return
      const map = L.map(mapContainer.current).setView([-25.28, -57.58], 6)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map)

      locations.forEach((loc) => {
        const marker = L.marker([loc.lat, loc.lng]).addTo(map)
        marker.bindPopup(`
          <div style="font-family:sans-serif;max-width:200px">
            <strong>${loc.title}</strong><br/>
            <span style="font-size:12px;color:#666">${loc.address}</span><br/>
            <span style="font-size:11px;color:#999">${loc.year}</span>
          </div>
        `)
      })

      // Fit bounds to show all markers
      if (locations.length > 0) {
        const bounds = L.latLngBounds(locations.map((l: any) => [l.lat, l.lng]))
        map.fitBounds(bounds, { padding: [50, 50] })
      }
    })
  }, [])

  return (
    <>
      <section className="pt-32 pb-8">
        <div className="container-art">
          <div className="text-center mb-8">
            <h1 className="section-title mb-4">{content.murales.title}</h1>
            <p className="section-subtitle mx-auto">{content.murales.description}</p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-art">
          <div className="rounded-2xl overflow-hidden border border-zinc-800/50">
            <div 
              ref={mapContainer}
              className="w-full h-[60vh] md:h-[70vh]"
              style={{ background: '#18181b' }}
            />
          </div>

          {/* Legend */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <div key={loc.id} className="glass-panel p-4 flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex-shrink-0 flex items-center justify-center">
                  <span className="text-lg">📍</span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">{loc.title}</h4>
                  <p className="text-xs text-zinc-500 mt-0.5">{loc.address}</p>
                  <p className="text-xs text-amber-500 mt-0.5">{loc.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
