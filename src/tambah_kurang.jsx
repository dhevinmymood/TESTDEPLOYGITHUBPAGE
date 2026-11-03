import React, { useState } from 'react';
function App() {
    const [angka, setCount] = useState(0);
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'left' }}>
            <h2>Penambahan dan Pengurangan</h2>
            <div>
                <h2>Hasil Hitungan: {angka}</h2>
                <button style={{ marginRight: '10px' }} onClick={() => setCount(angka + 1)}>Tambah</button>
                <button onClick={() => setCount(angka - 1)}>Kurang</button>
            </div>

            <hr style={{margin: '20px 0px 5px', marginRight: '700px', textAlign: 'left'}} />
            <hr style={{margin: '0px', marginRight: '700px', textAlign: 'left'}} />
        </div>
    );
}

export default App;