
export class API {

  // API URL API


    private endpointGateway = "https://api.dev.bontrax.com/v1/";
    private _config = {};

    constructor() {
        this._config = {

            "projects": '/mock_data/api/project/project.json',
            "project_detail": '/mock_data/api/project/project_detail.json'

        }
    }

    get(key:string) {
        return this._config[key];
    }
}
