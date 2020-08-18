process.env.NTBA_FIX_319 = '1';
import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { json } from 'express';
dotenv.config()
const bot = new TelegramBot(process.env.TOKEN as string, {polling: true})


interface Parauba {
    domingos: Array<string>
    sabados: Array<string>
    diasUteis: Array<string>
}

const paraubaJson = fs.readFileSync(path.resolve(__dirname , 'database', 'json', 'parauba.jsonc'),'utf-8')
const parauba: Parauba = JSON.parse(paraubaJson)

bot.onText(/\/parauba/, (msg) => {
    const date = new Date().getDay()
    let message = ''

    if(date == 0){
        message += 'Domingos:\n'
        parauba.domingos.map((hora:string, index:number)=>{
            message += `[${hora}] `
            if(((index+1)%4)==0) message += '\n'
        })
    }else if(date == 6){
        message += 'Sábados:\n'
        parauba.sabados.map((hora:string, index:number)=>{
            message += `[${hora}] `
            if(((index+1)%4)==0) message += '\n'
        })
    }else {
        message += 'Dias úteis:\n'
        parauba.diasUteis.map((hora:string, index:number)=>{
            message += `[${hora}] `
            if(((index+1)%4)==0) message += '\n'
        })
    }

    bot.sendMessage(msg.chat.id, message)
})

console.table({token:process.env.TOKEN})
