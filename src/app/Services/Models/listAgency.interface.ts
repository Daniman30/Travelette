export interface IApiListUser {
    id: number
    userName: string
    email: string
    nacionality: number
    password: string
    role: string
}

export interface IApiRegister {
    userName: string
    email: string
    nacionality: number
    password: string
    role: string
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

export interface IApiCreateHotelOffer {
    hotelId: number
    description: string
    price: number
}

export interface IApiListHotelOffer {
    description: string
    price: number
    hotelDto: number
}

export interface IApiCreateFacility {
    name: string
}

export interface IApiListFacility {
    name: string
}

export interface IApiCreateExcursion {
    name: string
    capacity: number
    price: number
    arrivalDate: Date
    departureDate: Date
    arrivalPlace: string
    departurePlace: string
    guia: string
    agencyID: number
}

export interface IApiListExcursion {
    id: number
    name: string
    capacity: number
    price: number
    arrivalDate: Date
    departureDate: Date
    arrivalPlace: string
    departurePlace: string
    guia: string
    agencyID: number
}

export interface IApiCreatePackage {
    description: string
    price: number
    capacity: number
    duration: number
    startDate: Date
    endDate: Date
    agencyID: number
    facilityDtos: { facilityId: number }[]
}

export interface IApiListPackage {
    id: number
    description: string
    price: number
    capacity: number
    duration: number
    startDate: Date
    endDate: Date
    agencyID: number
    agency: {
        id: number
        name: string
        fax: string
        address: string
        electronicAddress: string
        agencyOffers: [
            {
                id: number
                lodgingOfferId: number
                agencyId: number
                price: number
                lodgingOffer: {
                    id: number
                    hotelId: number
                    hotel: {
                        id: number
                        name: string,
                        category: string,
                        address: string,
                        lodgingOffers: [
                            string
                        ]
                    },
                    description: string
                    price: number
                    availability: number
                    agencyOffers: [
                        string
                    ]
                },
                agency: string,
                bookOffers: [
                    {
                        id: number
                        touristId: number
                        tourist: {
                            id: number
                            userId: string
                            name: string
                            nationality: string
                            bookOffers: [
                                string
                            ]
                        },
                        agencyOfferId: number
                        agencyOffer: string
                        price: number
                        arrivalDate: Date
                        depurateDate: "2024-03-31T21:36:33.389Z"
                    }
                ]
            }
        ],
        packages: [
            string
        ]
    },
    packageFacilities: [
        {
            id: number
            packageId: number
            package: string,
            facilityId: number
            facility: {
                id: number
                name: string
            }
        }
    ]
}

export interface IApiCreateExtendedExcursion {
    name: string
    capacity: number
    price: number
    arrivalDate: Date
    departureDate: Date
    arrivalPlace: string
    departurePlace: string
    guia: string
    numberOfDays: number
}

export interface IApiListExtendedExcursion {
    id: number
    name: string
    capacity: number
    price: number
    arrivalDate: Date
    departureDate: Date
    arrivalPlace: string
    departurePlace: string
    guia: string
    numberOfDays: number
}

