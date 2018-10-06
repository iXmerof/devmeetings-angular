
export class Product {

    tags: Array<string> = [];

    constructor(public name: string, public description: string, public isPromoted = false) { }

    assignTag(tag: string) {
        this.tags.push(tag);
    }

    assignTags(tags: Array<string>) {
        for (const tag of tags) {
            this.tags.push(tag);
        }
    }
}
