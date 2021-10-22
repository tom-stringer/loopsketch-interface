export class StringBuilder {
    private strings: string[];

    constructor(string?: string) {
        if (string) {
            this.strings = [string];
        } else {
            this.strings = [];
        }
    }

    append(string: string) {
        this.strings.push(string);
        return this;
    }

    build() {
        return this.strings.join("");
    }
}
