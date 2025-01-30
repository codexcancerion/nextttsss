import { generateStory } from "@/services/gemini/generator";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await generateStory()
    const story = JSON.parse(res)

    const response = NextResponse.json({
        message: "API was successfully created",
        story: story
    });

    // Adding CORS headers to allow any origin
    response.headers.set("Access-Control-Allow-Origin", "*");  // Allow any origin
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");  // Allow specific methods
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");  // Allow specific headers

    return response;
}