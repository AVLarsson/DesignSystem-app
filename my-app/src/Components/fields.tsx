// CONSTANTS
// eslint-disable-next-line
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let date = new Date();

export const bankCardFields = {
    firstName: {
        initialValue: '',
        validator: (currentValue: any) => checkIfNumber(currentValue) ? 'You can only enter letters' : currentValue.length < 1 ? 'Please enter your first name' : null,
        label: 'First Name'
    },
    lastName: {
        initialValue: '',
        validator: (currentValue: any) => checkIfNumber(currentValue) ? 'You can only enter letters' : currentValue.length < 1 ? 'Please enter your last name' : null,
        label: 'Last Name'
    },
    bankNumber: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a number' : currentValue.length < 10 ? 'Please enter at least 10 digits' : null,
        label: 'Card Number',
    },
    cvc: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a number' : currentValue.length !== 3 ? 'Please enter 3 numbers' : null,
        label: 'CVC',
    },
    month: {
        help: 'Month',
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a number' : currentValue > 12 ? 'Please enter a valid month' : null,
    },
    year: {
        help: 'Year',
        initialValue: '',
        className: "txt-b",
        validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a number' : currentValue < date.getFullYear() || currentValue > 9999 ? 'Your card has expired' : null,
    }
}

export const klarnaFields = {
    firstName: {
        initialValue: '',
        validator: (currentValue: any) => checkIfNumber(currentValue) ? 'You can only enter letters' : currentValue.length < 1 ? 'Please enter your first name' : null,
        label: 'First Name'
    },
    lastName: {
        initialValue: '',
        validator: (currentValue: any) => checkIfNumber(currentValue) ? 'You can only enter letters' : currentValue.length < 1 ? 'Please enter your last name' : null,
        label: 'Last Name'
    },
    email: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfEmail(currentValue) || currentValue.length < 1 ? 'Please enter a valid email as yourname@gmail.com' : null,
        label: 'Email',
        help: 'Hint: yourname@gmail.com'
    },
}

export const swishFields = {
    firstName: {
        initialValue: '',
        validator: (currentValue: any) => checkIfNumber(currentValue) ? 'You can only enter letters' : currentValue.length < 1 ? 'Please enter your first name' : null,
        label: 'First Name'
    },
    lastName: {
        initialValue: '',
        validator: (currentValue: any) => checkIfNumber(currentValue) ? 'You can only enter letters' : currentValue.length < 1 ? 'Please enter your last name' : null,
        label: 'Last Name'
    },
    phoneNumber: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a valid phone number' : currentValue.length < 1 ? 'Please enter a valid phone number' : null,
        label: 'Phone Number',
    },
}

export const checkoutInfoFields = {
    firstNameInfo: {
        initialValue: getLocalStorageValues("firstNameInfo"),
        validator: (currentValue: any) => checkIfNumber(currentValue) ? 'You can only enter letters' : currentValue.length < 1 ? 'Please enter your first name' : null,
        label: 'First Name'
    },
    lastNameInfo: {
        initialValue: getLocalStorageValues("lastNameInfo"),
        validator: (currentValue: any) => checkIfNumber(currentValue) ? 'You can only enter letters' : currentValue.length < 1 ? 'Please enter your last name' : null,
        label: 'Last Name'
    },
    emailInfo: {
        initialValue: getLocalStorageValues("emailInfo"),
        validator: (currentValue: any) => !checkIfEmail(currentValue) || currentValue.length < 1 ? 'Please enter a valid email as yourname@gmail.com' : null,
        label: 'Email',
        help: 'Hint: yourname@gmail.com'
    },
    phoneNumberInfo: {
        initialValue: getLocalStorageValues("phoneNumberInfo"),
        validator: (currentValue: any) => !checkIfNumber(currentValue) || currentValue.length < 1 ? 'Please enter a valid phone number' : null,
        label: 'Phone Number',
    },
    adress: {
        initialValue: getLocalStorageValues("adress"),
        validator: (currentValue: any) => currentValue.length < 1 ? 'Please enter your Adress' : null,
        label: 'Adress'
    },
    zipcode: {
        initialValue: getLocalStorageValues("zipcode"),
        validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter your zipcode' : null,
        label: 'Zipcode'
    },
    country: {
        initialValue: getLocalStorageValues("country"),
        validator: (currentValue: any) => checkIfNumber(currentValue) || currentValue.length < 1 ? 'Please enter your country' : null ,
        label: 'Country'
    },

}

/**
 * Get initial input values from local storage
 */
function getLocalStorageValues(field: string) {
    if (field === "firstNameInfo" && localStorage.firstNameInfo) { return JSON.parse(localStorage.firstNameInfo)}
    if (field === "lastNameInfo" && localStorage.lastNameInfo) { return JSON.parse(localStorage.lastNameInfo)}
    if (field === "emailInfo" && localStorage.emailInfo) { return JSON.parse(localStorage.emailInfo).replace('[AT]', '@') }
    if (field === "phoneNumberInfo" && localStorage.phoneNumberInfo) { return JSON.parse(localStorage.phoneNumberInfo)}
    if (field === "adress" && localStorage.adress) { return JSON.parse(localStorage.adress)}
    if (field === "zipcode" && localStorage.zipcode) { return JSON.parse(localStorage.zipcode)}
    if (field === "country" && localStorage.country) { return JSON.parse(localStorage.country)}
    else return ""
}

/**
 * Checks if input matches regex and returns boolean
 */
function checkIfNumber(input: string) {
    const regex = new RegExp(/^[0-9\s]+$/i)
    return regex.test(input);
}

/**
 * Checks if input matches regex pattern and returns boolean
 */
function checkIfEmail(input: string) {
    const regex = new RegExp(EMAIL_REGEX);
    return regex.test(input);
}