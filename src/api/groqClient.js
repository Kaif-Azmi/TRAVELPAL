// Call backend API instead of using Groq SDK directly in browser
export async function groqQuery(prompt) {
  try {
    console.log("Sending to backend:", prompt);
    
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: prompt }),
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("❌ Server error:", errorData);
      throw new Error(`HTTP error! status: ${response.status} - ${errorData.details || errorData.error || 'Unknown error'}`);
    }

    const data = await response.json();
    console.log("✅ Received reply:", data.reply);
    return data.reply || "I couldn't understand that.";
  } catch (error) {
    console.error("❌ Error calling backend API:", error);
    
    if (error.message.includes("Failed to fetch")) {
      throw new Error("Cannot connect to server. Make sure the backend is running on http://localhost:5000");
    }
    
    throw error;
  }
}
