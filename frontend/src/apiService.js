export const post = async (CV) => {
    const response = await fetch('http://localhost:5000/api', { 
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(CV)
    })
    return response.body;
}