"use client";
import { useState } from "react";

export default function CompressTest() {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
            setMessage("");
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage("Please select a file to compress.");
            return;
        }

        setLoading(true);
        setMessage("");

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("https://compressly-nine.vercel.app/api/compress", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Compression failed");
            }

            // Convert response to a downloadable blob
            const blob = await response.blob();
            const downloadUrl = URL.createObjectURL(blob);
            
            // Create a download link and trigger the download
            const a = document.createElement("a");
            a.href = downloadUrl;
            a.download = file.name.replace(/\.[^/.]+$/, "-compressed") + blob.type.split("/")[1];
            document.body.appendChild(a);
            a.click();
            a.remove();
            
            setMessage("Compression successful! File downloaded.");
        } catch (error) {
            setMessage("Error during compression. Please try again.");
            console.error(error);
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-xl font-semibold text-center mb-4">Test Compressly</h1>
                <input 
                    type="file" 
                    onChange={handleFileChange} 
                    className="w-full border rounded p-2 mb-4" 
                />
                <button 
                    onClick={handleUpload} 
                    disabled={loading} 
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    {loading ? "Compressing..." : "Upload & Compress"}
                </button>
                {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
            </div>
        </div>
    );
}
