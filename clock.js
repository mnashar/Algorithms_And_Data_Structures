class Clock {
    constructor() {
        // 1. Create a Date object.
        const currentTime = new Date();

        // 2. Store the hour, minute, and second.
        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();

        // 3. Call printTime.
        this.printTime();

        // 4. Schedule the tick at 1 second intervals.
        setInterval(this._tick.bind(this), 1000);
    }

    printTime() {
        // Format the time in HH:MM:SS
        const timeString = [this.hours, this.minutes, this.seconds].join(":");

        // Use console.log to print it.
        console.log(timeString);
    }

  
}

const clock = new Clock();
