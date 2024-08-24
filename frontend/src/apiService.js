export const post = async (CV) => {
    const response = await fetch('http://localhost:5000/api', {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(CV)
    })
    return await response.json();
}

export const getOpenJobs = async () => {
    const response = await fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/kaikki', {
        method: 'GET',
    })
    return await response.json();
}