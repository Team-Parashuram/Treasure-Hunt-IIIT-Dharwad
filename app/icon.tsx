import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 192,
  height: 192,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          border: '8px solid #ff8c00',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              fontSize: 64,
              color: '#ff8c00',
              textShadow: '2px 2px 0px #000',
            }}
          >
            💼
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#ffd700',
              fontWeight: 'bold',
              textShadow: '1px 1px 0px #000',
              letterSpacing: '2px',
            }}
          >
            NAUKRI?
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
