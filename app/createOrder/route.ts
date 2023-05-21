import { NextResponse } from "next/server"
import { createOrder } from "../core/utils/paypalOrder"


export async function POST(req:Request){
    const body = await req.json()
    console.log(body)
    let res = createOrder(body)

    return NextResponse.json(res)
    
}