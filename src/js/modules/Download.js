export default class Download {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const link = document.createElement('a');
        link.setAttribute('href', path);
        link.setAttribute('download', 'picture');

        link.style.display = 'none';

        document.body.append(link);

        link.click();

        link.remove();
    }

    init() {
        this.btns.forEach(button => {
            button.addEventListener('click', () => {
                this.downloadItem(this.path);
            });
        });
    }
}