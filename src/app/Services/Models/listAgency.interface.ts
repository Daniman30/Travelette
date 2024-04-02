export interface IApiListUser {
    id: number
    userName: string
    email: string
    nacionality: number
    password: string
    role: string
}

export interface IApiListUserResponse {
    items: IApiListUser[]
    pageNumber: number
    totalPages: number
    totalCount: number
    hasPreviousPage: boolean
    hasNextPage: boolean
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

export interface IApiListAgencyResponse {
    items: IApiListAgency[]
    pageNumber: number
    totalPages: number
    totalCount: number
    hasPreviousPage: boolean
    hasNextPage: boolean
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

export interface IApiListHotelResponse {
    items: IApiListHotel[]
    pageNumber: number
    totalPages: number
    totalCount: number
    hasPreviousPage: boolean
    hasNextPage: boolean
}

export interface IApiCreateHotelOffer {
    hotelId: number
    description: string
    price: number
}

export interface IApiListHotelOfferResponse {
    items: IApiListHotelOffer[]
    pageNumber: number
    totalPages: number
    totalCount: number
    hasPreviousPage: boolean
    hasNextPage: boolean
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

export interface IApiListFacilityResponse {
    items: IApiListFacility[]
    pageNumber: number
    totalPages: number
    totalCount: number
    hasPreviousPage: boolean
    hasNextPage: boolean
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

export interface IApiListExcursionResponse {
    items: IApiListExcursion[]
    pageNumber: number
    totalPages: number
    totalCount: number
    hasPreviousPage: boolean
    hasNextPage: boolean
}

export interface IApiCreatePackage {
    description: string
    price: number
    capacity: number
    duration: number
    startDate: Date
    endDate: Date
    agencyID: number
    facilitiesId: { facilityId: number }[]
    excursionsId: { excursionId: number }[]
}

export interface IApiUpdatePackage {
    id: number
    description: string
    price: number
    capacity: number
    duration: number
    startDate: Date
    endDate: Date
    agencyID: number
    facilitiesId: { facilityId: number }[]
    excursionsId: { excursionId: number }[]
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

export interface IApiListPackageResponse{
    items: IApiListPackage[]
    pageNumber: number
    totalPages: number
    totalCount: number
    hasPreviousPage: boolean
    hasNextPage: boolean
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

export interface LodgingOffer {
    id: number;
    hotelId: number;
    description: string;
    price: number;
}

export interface Hotel {
    lodgingOffers: LodgingOffer[];
    id: number;
    name: string;
    category: string;
    address: string;
}

export interface ListHotel {
    items: Hotel[]
    pageNumber: number
    totalPages: number
    totalCount: number
    hasPreviousPage: boolean
    hasNextPage: boolean
}

export interface IApiBook {
    agencyOfferId: number
    arrivalDate: Date
    depurateDate: Date
}

export interface IApiBookAdmin {
    agencyOfferId: number
    arrivalDate: Date
    depurateDate: Date
    userName: string
    nacionality: number
}

export interface IApiCreateAgencyOffer {
    agencyId: number
    LodgingOffers: {
        offerId: number;
        price: number;
    }[];
}

export interface IApiBookPackage{
    packageId: number
    numberOfPeople: number
    airlineCompany: string
}

export interface IApiBookPackageAdmin{
    packageId: number
    numberOfPeople: number
    airlineCompany: string
    userName: string
    nacionality: number
}

export interface IApiBookExcursion {
    excursionId: number
    numberOfCompanions: number
}

export interface IApiBookExcursionAdmin {
    excursionId: number
    numberOfCompanions: number
    userName: string
    nacionality: number
}

export interface IApiBookOffer {
    agencyOfferId: number
    arrivalDate: Date
    departureDate: Date
}

export interface IApiBookOfferAdmin {
    agencyOfferId: number
    arrivalDate: Date
    departureDate: Date
    userName: string
    nacionality: number
}