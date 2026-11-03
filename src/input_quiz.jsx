import React, { useState } from 'react';
function App() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [alamat, setAlamat] = useState('');

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'left' }}>
            <h2>Input Data</h2>
            <div style={{marginBottom: '10px'}}>
                <span style={{display: 'inline-block', width: '70px'}}>Nama:</span>
                <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Masukkan Nama ..."/>
            </div>
            <div style={{marginBottom: '10px'}}>
                <span style={{display: 'inline-block', width: '70px'}}>Email:</span>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Email ..."/>
            </div>
            <div style={{marginBottom: '10px'}}>
                <span style={{display: 'inline-block', width: '70px'}}>Alamat:</span>
                <input type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Masukkan Alamat ..."/>
            </div>

            <h2>Hasil inputan</h2>
            <p>Nama: {nama}</p>
            <p>Email: {email}</p>
            <p>Alamat: {alamat}</p>
        </div>
    );
}

export default App;