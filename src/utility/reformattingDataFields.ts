import { TCompany, TContact, TContactForm } from '@/types/data'

export function splitPersonName(person: string): string[] {
    const personArr = person.trim().split(' ')
    const firstname = personArr.shift()
    const lastname = personArr.join(' ')

    return [firstname, lastname]
}

export function reformattingStringToPhone(phone: string): string {
    const phoneArr = [phone.slice(0, 1), phone.slice(1, 4), phone.slice(4, 7), phone.slice(7)]

    return `+${phoneArr.join(' ')}`
}

export function reformattingPhoneToString(phone: string): string {
    const phoneArr = phone.split(' ')
    phoneArr.shift()

    return phoneArr.join('')
}

export function refformattingContactData(data: TContactForm): TContact {
    console.log('1')
    if (data.person) {
        let personArr = splitPersonName(data.person)

        data.firstname = personArr[0]
        data.lastname = personArr[1]

        delete data.person
    }

    if (data.phone) data.phone = reformattingPhoneToString(data.phone)

    return data
}

export function refformattingInfoData(data: TCompany): TCompany {
    console.log('2')

    return data
}
