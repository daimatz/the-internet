class App {
    constructor() {
        this.timeout = undefined;
        this.order = [
            {
                refresh_ms: 600000,
                url: 'https://newspicks.com/'
            }, {
                refresh_ms: 300000,
                url: 'https://www.inoreader.com/'
            }, {
                refresh_ms: 300000,
                url: 'https://jp.inoreader.com/'
            }
        ];
    }

    getIndex(url) {
        for (let i = 0; i < this.order.length; i++) {
            if (url.indexOf(this.order[i].url) != -1) { return i; }
        }
        return -1;
    }

    getNextUrl(url) {
        this.order[(this.getIndex(url) + 1) % this.order.length].url;
    }

    resetTimeout() {
        let index = this.getIndex(location.href);
        if (index < 0) { index = 0; }
        this.timeout = + new Date() + this.order[index].refresh_ms;
    }

    goNext() {
        location.href = this.getNextUrl(location.href);
    }

    check() {
        console.log("check");
        if (this.timeout === undefined) { this.resetTimeout(); }
        if (this.timeout - new Date() < 0) { this.goNext(); }
    }

    run() {
        document.addEventListener('mouseover', () => { this.resetTimeout(); });
        document.addEventListener('mouseout', () => { this.resetTimeout(); });
        setInterval(() => { this.check(); }, 500);
    }
}

new App().run();
