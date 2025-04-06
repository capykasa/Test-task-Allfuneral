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
    id: number
    name: string
    shortName: string
    businessEntity: string
    contactId: number
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
    phone: number
    email: string
    createdAt: string
    updatedAt: string
}
