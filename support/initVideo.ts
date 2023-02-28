function downloadCameraStreamVideo() {
    fetch('http://localhost:1234/Person_1.y4m').then(res => res.arrayBuffer()).then(buffer => {
        const fs = require('fs');
        fs.writeFileSync('/tmp/Person_1.y4m', buffer);
    });
}

downloadCameraStreamVideo();
