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