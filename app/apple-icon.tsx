import { ImageResponse } from 'next/og'
 
// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
// Image generation
export default function AppleIcon() {
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
          background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)',
          borderRadius: '22%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
            }}
          >
            💼
          </div>
          <div
            style={{
              fontSize: 16,
              color: '#fff',
              fontWeight: 'bold',
              textShadow: '1px 1px 0px rgba(0,0,0,0.5)',
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
