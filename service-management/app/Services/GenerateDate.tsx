import moment from 'moment';
moment.locale('pt-br');

export abstract class GenerateDate{
    static dateNow = ()=>{
        return moment().format("L")
    }
    static dateDelivery = ()=>{
        return moment().add(1, "days").format("L")
    }
}