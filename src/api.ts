import { checkSchema, dataObjectToSchema } from "./dataschema"
import Req from "./http"
import RequestOptions, { Option } from "./Option"

export default function newApi(serviceName: string, paramSchemaInstace: any = null, option: RequestOptions = Option) {
    var paramSchema: any = null
    if (!!paramSchemaInstace) paramSchema = dataObjectToSchema(paramSchemaInstace)
    //ensure service name  is standardized
    //strip prefix "api:" if it exists
    if (serviceName.toLowerCase().startsWith("api:")) {
        serviceName = serviceName.slice(4)
    }
    //first character of Service should be lower case
    if (serviceName.length > 0) {
        serviceName = serviceName[0].toLowerCase() + serviceName.slice(1)
    }
    //error if service name is empty
    if (serviceName.length === 0) {
        console.error("API service name is empty, which is not allowed")
        //throw new Error("API service name is empty, which is not allowed")
        throw new Error("API service name is empty, which is not allowed")
    }
    return function (data: any = {}, opt: RequestOptions = option): Promise<any> {
        if (!!paramSchema) {
            var errors = checkSchema(paramSchema, data)
            if (errors.length > 0) {
                return Promise.reject("shema unmatch of api: " + serviceName + " " + JSON.stringify(errors))
            }
        }

        return Req(opt).post(`${opt.baseUrl}/API-${serviceName}`, data)
    }
}
