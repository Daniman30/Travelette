export interface IApiRegister {
    userName: string
    email: string
    nacionality: string
    password: string
}

export interface IApiLogin {
    userName: string
    password: string
}

export interface IApiCreateAgency {
    name: string
    address: string
    fax: string
    electronicAddress: string
}    

export interface IApiListAgency {
    id: number
    name: string
    address: string
    fax: string
    electronicAddress: string
}    

export interface IApiCreateHotel {
    name: string
    category: string
    address: string
}

export interface IApiListHotel {
    id: number
    name: string
    category: string
    address: string
}


