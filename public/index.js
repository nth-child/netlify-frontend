document.addEventListener("DOMContentLoaded", async function () {
    // const baseUrl = '' // No need to specify the complete URL. We are using "rewrites and proxies." See the redirects inside netlify.toml file. 
    
    // Normal Function
    try {
        const endpoint = `/functions/hello`

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
        const endpoint = `/functions/hello-background`
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }

        const response = await fetch(endpoint, options)

        if (response.status === 202) {
            console.log('Received 202 from background function.')
        }
        
    } catch (error) {
        console.log(error)
    }

})