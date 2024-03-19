export interface IApiListAgency {
    id: number
    name: string;
    address: string;
    fax: string;
    electronicAddress: string;
}

export interface IApiCreateAgency {
    name: string,
    address: string,
    fax: string,
    electronicAddress: string
}

export interface IApiRegister {
    userName: string,
    email: string,
    nacionality: string,
    password: string
}

export interface IApiLogin {
    userName: string,
    password: string
}