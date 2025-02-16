import moment from 'moment';
moment.locale('pt-br');

export abstract class GenerateDate{
    static dateNow = ()=>{
        return moment().format("L")
    }

    static dateDelivery = ()=>{
        return moment().add(15, "days").format("L")
    }

    static dateStart = ()=>{
        return moment().add(5, "days").format("L")
    }

    static dateDelay = (date:string)=>{
        const date1 = moment()
        const date2 = date
        
        return date1.isAfter(date2)
        
    }
}