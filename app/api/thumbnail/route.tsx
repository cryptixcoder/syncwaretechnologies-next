import { NextResponse } from 'next/server';
import chromium from 'chrome-aws-lambda'
import puppeteer from 'puppeteer';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');

    if(url) {
        try {
            const browser = await puppeteer.launch({});
            const page = await browser.newPage();
            await page.setViewport({width: 1920, height: 1024});
            await page.goto(url);

            const screenshot = await page.screenshot({ type: 'jpeg', quality: 80 });

            await browser.close();

            return new NextResponse(screenshot, {
                status: 200,
                headers: {
                    'Content-Type': 'image/jpeg'
                }
            });
        }
        catch(error: any) {
            console.error('Error taking screenshot:', error);
            return NextResponse.json({
                error: 'Failed to capture screenshot.'
            }, { status: 500 })
        }
    }

    return NextResponse.json({
        error: 'No URL provided'
    }, { status: 400 })

}