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

    static dateDelay = ()=>{
        const dateNow = moment().format("L")
        const dateDelivery = moment().add(15, "days").format("L")

        if (dateNow > dateDelivery) return ""
    }
}