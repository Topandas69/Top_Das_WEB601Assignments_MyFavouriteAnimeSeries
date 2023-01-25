import { Content } from "./content-interface";

export class ContentList{
    private contents: Content[] = [];

    constructor(){
    }

    get contentsList() {
        return this.contents;
    }

    add(content: Content){
        this.contents.push(content);
    }

    count(){
        return this.contents.length;
    }

    getContentDetails(index: number){
        let content = this.contents[index];
        return `<div>
                    <h1>${content.title}</h1>
                    <p>${content.description}</p>
                    <p>Creator: ${content.creator}</p>
                    <p>Type: ${content.type}</p>
                    <img src="${content.imgURL}">
                </div>`;
    }
}