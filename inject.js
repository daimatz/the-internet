class App {
    constructor() {
        this.timeout = undefined;
        this.intervalId = undefined;
        this.order = [
            {
                refresh_ms: 300000,
                url: 'https://newspicks.com/'
            }, {
                refresh_ms: 300000,
                url: 'https://newspicks.com/series/'
            }, {
                refresh_ms: 300000,
                url: 'https://www.stockclip.net/'
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
        for (let i = this.order.length - 1; i >= 0; i--) {
            if (url.indexOf(this.order[i].url) != -1) { return i; }
        }
        return -1;
    }

    getNextUrl(url) {
        return this.order[(this.getIndex(url) + 1) % this.order.length].url;
    }

    resetTimeout() {
        let index = this.getIndex(location.href);
        if (index < 0) { index = 0; }
        this.timeout = (new Date()).getTime() + this.order[index].refresh_ms;
    }

    goNext() {
        location.href = this.getNextUrl(location.href);
        clearInterval(this.intervalId);
    }

    check() {
        if (this.timeout === undefined) { this.resetTimeout(); }
        if (this.timeout - (new Date()).getTime() < 0) { this.goNext(); }
    }

    createNextButton() {
        let div = document.createElement('div');
        div.style.position = 'fixed';
        div.style.top = '0px';
        div.style.right = '0px';
        div.style.zIndex = '999999';
        let button = document.createElement('button');
        button.style.width = '40px';
        button.style.height = '40px';
        button.style.fontSize = '24px';
        button.style.cursor = 'default';
        button.addEventListener('click', () => { this.goNext(); });
        button.innerHTML = '&#8634;';
        div.appendChild(button);
        return div;
    }

    run() {
        document.addEventListener('mouseover', () => { this.resetTimeout(); });
        document.addEventListener('mouseout', () => { this.resetTimeout(); });
        document.body.appendChild(this.createNextButton());
        this.intervalId = setInterval(() => { this.check(); }, 500);
    }
}

new App().run();
