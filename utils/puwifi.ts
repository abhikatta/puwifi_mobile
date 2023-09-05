const PU_WIFI_AP = "http://10.0.0.11:8090"

async function login(
    username: string,
    password: string,
): Promise<any> {
    
    try {

        const res = await fetch(`${PU_WIFI_AP}/login.xml`, {
            headers: {
                "accept": "*/*",
                "accept-language": "en-IN,en-US;q=0.9,en-GB;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded"
            },
            "referrer": "http://10.0.0.11:8090/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "method": "POST",
            "mode": "cors",
            "credentials": "omit",
            "body": `mode=191&username=${username}&password=${password}&a=1693906373061&producttype=0`
        })

        return res
        
    } catch (error) {
        // TODO: do better
        console.warn("LOGIN: " + error)
    }
}

async function logout(
    username: string,
): Promise<any> {

    try {

        const res = await fetch(`${PU_WIFI_AP}/logout.xml`, {
            headers: {
                "accept": "*/*",
                "accept-language": "en-IN,en-US;q=0.9,en-GB;q=0.8,en;q=0.7",
                "content-type": "application/x-www-form-urlencoded"
            },
            "referrer": "http://10.0.0.11:8090/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "method": "POST",
            "mode": "cors",
            "credentials": "omit",
            "body": `mode=193&username=${username}&a=1693906373061&producttype=0`
        })

        return res
        
    } catch (error) {
        // TODO: do better
        console.warn("LOGOUT: " + error)
    }
    

    return
}

export { login, logout, PU_WIFI_AP }
