export class Task{
    title: string;
    description: string;
    status: boolean

    constructor(title: string, description: string, status: boolean = false){
        this.title = title;
        this.description = description;
        this.status = status
    }
}