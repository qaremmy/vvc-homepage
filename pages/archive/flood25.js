export default function Flood25Archive() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        FLOOD·25 — Survivor Archive
      </h1>
      <p style={{ fontSize: '0.9rem', marginBottom: '2rem', color: '#aaa' }}>
        Drop 1 — 25 Shirts. Code Unlocked Access.
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        {/* Floating Images */}
        {[...Array(9)].map((_, i) => (
          <img
            key={i}
            src={`/images/flood25/sample${i + 1}.jpg`}
            alt={`Survivor ${i + 1}`}
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0 0 15px rgba(255,255,255,0.1)'
            }}
          />
        ))}
      </div>
    </div>
  );
}

