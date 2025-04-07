import { refformattingContactData, refformattingInfoData } from "@/utility/reformattingDataFields"

export type TCompanyContract = {
    no: string
    issue_date: Date
}

export type TCompanyPhoto = {
    name: string
    filepath: string
    thumbpath: string
    createdAt: Date
}

export type TCompany = {
    id: number
    name: string
    shortName: string
    businessEntity: string
    contactId: number
    contract: TCompanyContract
    type: string[]
    status: string
    photos: TCompanyPhoto[]
    createdAt: Date
    updatedAt: Date
}

export type TContact = {
    id: string
    lastname: string
    firstname: string
    phone: string
    email: string
    createdAt: Date
    updatedAt: Date
}

export type TContactForm = {
    person: string
} & TContact


export type RefformattingData = typeof refformattingInfoData | typeof refformattingContactData
