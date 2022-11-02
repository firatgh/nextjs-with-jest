
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    console.log('Hello')
    return NextResponse.next({headers: new Headers()})
}