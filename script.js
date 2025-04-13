async function checkTone() {
  const input = document.getElementById('userInput').value;
  const resultBox = document.getElementById('resultBox');
  resultBox.style.display = 'block';
  resultBox.innerHTML = "Analyzing tone...";

  try {
    const response = await fetch("https://your-api-url.com/neutralize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: input })
    });

    const data = await response.json();
    resultBox.innerHTML = `<strong>Neutralized Message:</strong><br>${data.neutralizedText}`;
  } catch (error) {
    resultBox.innerHTML = "Something went wrong. Please try again.";
    console.error(error);
  }
}