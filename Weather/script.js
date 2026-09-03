setInterval(() => {
    d = new Date(); // Get current date & time

    htime = d.getHours();        // Current hour
    mtime = d.getMinutes();      // Current minute
    stime = d.getSeconds();      // Current second

    // Calculate rotation angles

    hrotation = 30 * htime + mtime / 2;    // Hour hand
    mrotation = 6 * mtime;                // Minute hand
    srotation = 6 * stime;               // Second hand

    // Rotate clock hands
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000); // Run every 1 second