/**
 * @jest-environment node
 */

// import { render, screen } from '@testing-library/react'
// import Home from '@/pages/index'
import { NextRequest } from "next/server"
import { middleware } from "../middleware"


describe('Middleware', () => {
  it('middleware', async () => {
    const res = await middleware(new NextRequest('http://localhost/'))

    console.log('res', res)
  })
})
