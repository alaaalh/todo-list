export class Task{
    ID: number;
    Title: string;
    IsDone: boolean

    constructor(ID: number, Title: string, IsDone: boolean = false){
        this.ID = ID
        this.Title = Title;
        this.IsDone = IsDone
    }
}