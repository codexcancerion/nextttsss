import { NextResponse } from "next/server"

export async function GET() {
    const data = ["Melbert", "Linson", "Rey", "Kenneth", "Mark", "Charlie", "Lando"]

    const response = NextResponse.json({
        message: "API was successfully created",
        data: data
    });

    // Adding CORS headers to allow any origin
    response.headers.set("Access-Control-Allow-Origin", "*");  // Allow any origin
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");  // Allow specific methods
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");  // Allow specific headers

    return response;
}
