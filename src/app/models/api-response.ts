interface data {
    CreatedDate: string,
    ID: number,
    IsDone: boolean,
    Title: string
}

export class APIResponse{
    Data: any;
    Message: string;
    Success: boolean

    constructor(Data: any, Message: string, Success: boolean = false){
        this.Data = Data;
        this.Message = Message;
        this.Success = Success
    }
}