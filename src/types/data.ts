import { refformattingContactData, refformattingInfoData } from "@/utility/reformattingDataFields"

export type TCompanyContract = {
    no: string
    issue_date: string
}

export type TCompanyPhoto = {
    name: string
    filepath: string
    thumbpath: string
    createdAt: string
}

export type TCompany = {
    id: string
    name: string
    shortName: string
    businessEntity: string
    contactId: string
    contract: TCompanyContract
    type: string[]
    status: string
    photos: TCompanyPhoto[]
    createdAt: string
    updatedAt: string
}

export type TContact = {
    id: string
    lastname: string
    firstname: string
    phone: string
    email: string
    createdAt: string
    updatedAt: string
}

export type TContactForm = {
    person: string
} & TContact


export type RefformattingData = typeof refformattingInfoData | typeof refformattingContactData
