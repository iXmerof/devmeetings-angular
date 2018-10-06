
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

    find(searchQuery: string): boolean {
        searchQuery = searchQuery.toLowerCase();
        return this.name.toLowerCase().startsWith(searchQuery) || this.findInTags(searchQuery);
    }

    findInTags(searchQuery: string): boolean {

        for (const tag of this.tags) {
            if (tag.toLowerCase().startsWith(searchQuery)) {
                return true;
            }
        }

        return false;
    }
}
