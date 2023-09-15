document.addEventListener("DOMContentLoaded", async function () {
    const baseUrl = 'https://sprightly-melba-c465f8.netlify.app'
    
    // Normal Function
    try {
        const endpoint = `${baseUrl}/.netlify/functions/hello`

        const options = {
            method: 'POST',
            headers: {},
            body: JSON.stringify({})
        }

        const response = await fetch(endpoint, options)

        if (response.status === 200) {
            console.log('Received 200 from normal function.')
        }
        
    } catch (error) {
        console.log(error)
    }

    // Background Function
    try {
        const endpoint = `${baseUrl}/.netlify/functions/hello-background`
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }

        const response = await fetch(endpoint, options)

        if (response.status === 202) {
            // Why doesn't this work?
            console.log('Received 202 from background function.')
        }
        
    } catch (error) {
        console.log(error)
    }

})