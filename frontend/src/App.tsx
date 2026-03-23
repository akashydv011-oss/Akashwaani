import React from 'react';

const App: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', padding: '20px', boxSizing: 'border-box' }}>
            <header style={{ marginBottom: '20px' }}>
                <h1>AI Assistant Chat Interface</h1>
            </header>
            <main style={{ flex: 1, border: '1px solid #ccc', borderRadius: '5px', padding: '10px', overflowY: 'auto' }}>
                {/* Chat messages will be displayed here */}
                <div id="chat-window">
                    <p><strong>AI Assistant:</strong> Hello! How can I assist you today?</p>
                </div>
            </main>
            <footer style={{ marginTop: '20px' }}>
                <input type="text" placeholder="Type your message..." style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                <button style={{ marginTop: '10px', padding: '10px', borderRadius: '5px', background: '#007bff', color: 'white', border: 'none' }}>Send</button>
            </footer>
        </div>
    );
};

export default App;