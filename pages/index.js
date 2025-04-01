import { useState } from 'react';

export default function Home() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleVerify = () => {
    const trimmedCode = code.trim().toUpperCase();

    if (trimmedCode === 'VX9D-Z4P7') {
      window.location.href = '/mission/flood-25-08'; // This works for now
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
      <img
        src="/vvc-logo-final.png"
        alt="Valley Veterano Logo"
        style={{ maxWidth: '300px', marginBottom: '1rem' }}
      />
      <p style={{ marginBottom: '2rem', letterSpacing: '0.15em', fontSize: '0.85rem' }}>
        EARNED, NOT ISSUED.
      </p>
      <input
        type="text"
        placeholder="Enter Clearance Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          marginBottom: '1rem',
          width: '250px',
          color: 'black'
        }}
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
