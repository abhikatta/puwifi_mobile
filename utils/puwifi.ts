const PU_WIFI_AP = "http://10.0.0.11:8090";

async function login(
  username: string,
  password: string,
  handleOutput: Function
): Promise<any> {
  let output: string;
  try {
    const isConnected = await fetch(`https://google.com`);
    if (isConnected.ok === false) {
      const res = await fetch(`${PU_WIFI_AP}/login.xml`, {
        headers: {
          accept: "*/*",
          "accept-language": "en-IN,en-US;q=0.9,en-GB;q=0.8,en;q=0.7",
          "content-type": "application/x-www-form-urlencoded",
        },
        referrer: "http://10.0.0.11:8090/",
        referrerPolicy: "strict-origin-when-cross-origin",
        method: "POST",
        mode: "cors",
        credentials: "omit",
        body: `mode=191&username=${username}&password=${password}&a=${new Date().getTime()}&producttype=0`,
      });
      const response = JSON.stringify(res);
      console.log("Response : " + res);
      output = "Login Sucessful." + response;
    } else {
      output = "Connection is good.";
    }
    handleOutput(`${output}+" Logged in as ${username}`);
  } catch (error) {
    // TODO: do better
    output = "LOGIN ERROR: " + error;
    console.warn("LOGIN ERROR: " + error);
    handleOutput(output);
  }
}

async function logout(username: string, handleOutput: Function): Promise<any> {
  let output: string;
  try {
    const res = await fetch(`${PU_WIFI_AP}/logout.xml`, {
      headers: {
        accept: "*/*",
        "accept-language": "en-IN,en-US;q=0.9,en-GB;q=0.8,en;q=0.7",
        "content-type": "application/x-www-form-urlencoded",
      },
      referrer: "http://10.0.0.11:8090/",
      referrerPolicy: "strict-origin-when-cross-origin",
      method: "POST",
      mode: "cors",
      credentials: "omit",
      body: `mode=193&username=${username}&a=${new Date().getTime()}&producttype=0`,
    });
    const respose = JSON.stringify(res);
    console.log("Resonse : " + respose);
    output = "Logout Successful" + respose;
    handleOutput(`${output}+"\nLogged out as ${username}`);
  } catch (error) {
    // TODO: do better
    output = "LOGOUT ERROR: " + String(error);
    console.warn("LOGOUT ERROR: " + error);
    handleOutput(output);
  }
}

export { login, logout, PU_WIFI_AP };
