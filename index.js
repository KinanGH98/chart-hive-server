const WebSocket = require('ws');
const DataGenerator = require('./generateMockData.js');

const wss = new WebSocket.Server({port: 8080});

// Broadcast mock data to all connected clients.
const broadcastMockData = () =>
{
    const mockData = DataGenerator.generateMockData();
    wss.clients.forEach((client) =>
    {
        if (client.readyState === WebSocket.OPEN)
        {
            client.send(JSON.stringify(mockData));
        }
    });
};

// Set interval to generate and send mock data every n seconds.
setInterval(broadcastMockData, 5000);

wss.on('connection', (ws) =>
{
    console.log('Client connected');

    // Send initial mock data when a client connects
    ws.send(JSON.stringify(DataGenerator.generateMockData()));
    
    ws.on('close', () =>
    {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running.');
