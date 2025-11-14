import { ImageResponse } from 'next/og'
 
// Image metadata
export const alt = 'Kya Tumhe Naukri Milegi? - The Ultimate Job Hunting Adventure'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          border: '16px solid #ff8c00',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: '#ff0000',
              textShadow: '4px 4px 0px rgba(0,0,0,0.8), 8px 8px 0px rgba(255,140,0,0.3)',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            KYA TUMHE NAUKRI MILEGI?
          </div>
          
          <div
            style={{
              fontSize: 48,
              color: '#ffd700',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            The Ultimate Job Hunting Adventure
          </div>
          
          <div
            style={{
              fontSize: 32,
              color: '#ffffff',
              textAlign: 'center',
              marginTop: '20px',
              opacity: 0.9,
            }}
          >
            🎮 Test your hacking skills | 🧩 Solve riddles | 🏆 Prove you deserve the job
          </div>
          
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '40px',
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                background: '#ff0000',
                border: '4px solid #000',
              }}
            />
            <div
              style={{
                width: 40,
                height: 40,
                background: '#ffd700',
                border: '4px solid #000',
              }}
            />
            <div
              style={{
                width: 40,
                height: 40,
                background: '#00ff00',
                border: '4px solid #000',
              }}
            />
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
