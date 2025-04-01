
import { useState } from 'react';

export default function Home() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleVerify = () => {
    if (code.trim().toUpperCase() === 'VX9D-Z4P7') {
      window.location.href = '/mission/flood-25-08';
    } else {
      setError('Invalid clearance code. Try again.');
    }
  };

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Valley Veterano</h1>
      <p style={{ marginBottom: '2rem', letterSpacing: '0.1em' }}>EARNED, NOT ISSUED.</p>
      <input
        type="text"
        placeholder="Enter Clearance Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{ padding: '10px', borderRadius: '5px', border: 'none', marginBottom: '1rem', width: '250px', color: 'black' }}
      />
      <button
        onClick={handleVerify}
        style={{
          padding: '10px 20px',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Verify
      </button>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}
