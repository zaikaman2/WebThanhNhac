import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "com.apple.safari",
          paths: ["*"]
        }
      ]
    }
  })
} 