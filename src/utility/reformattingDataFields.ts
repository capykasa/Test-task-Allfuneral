import { TCompany, TContact, TContactForm } from '@/types/data'
import { it } from 'node:test'

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

export function filterCheckboxes(array: string[], newItem: string): string[] {
    let newItemIndex = array.indexOf(newItem)

    newItemIndex >= 0 
        ? array.splice(newItemIndex, 1) 
        : array.push(newItem)

    return array
}

export function reformattingCompanyTypesToView(array: string[]): string[] {
    let reformattingArray = array.map(item => {
        item = item[0].toUpperCase() + item.slice(1)
        return item.split('_').join(' ')
    })

    return reformattingArray
}

export function reformattingPhoneToString(phone: string): string {
    const phoneArr = phone.split(' ')
    phoneArr.shift()

    return phoneArr.join('')
}

export function refformattingContactData(data: TContactForm): TContact {
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

    return data
}
