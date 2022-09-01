import axios from "axios";

class HelloWorldService
{
    executeHelloWorldService()
    {
        console.log("Service Excecuted");
        return axios.get("http://localhost:8080/helloworld");
    }

    executeHelloWorldServiceBean()
    {
        console.log("Service Excecuted");
        return axios.get("http://localhost:8080/helloworldbean");
    }

    executeHelloWorldPathVariableService(name)
    {
        let username = "user"
        let password = 'password'
        let basicAuthHeader = 'Basic ' + window.btoa(`${username}` + ":" + `${password}`)
        //console.log("Service Excecuted");
        return axios.get(`http://localhost:8080/helloworldbean/${name}`/*, {
            headers: {
                Authorization: basicAuthHeader
            }
        }*/);
    }
}

export default new HelloWorldService();