// CONSTANTS
// eslint-disable-next-line
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let date = new Date();


export const IfBankCardFields = {

    firstName: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your first name' : null,
        label: 'First Name'
    },
    lastName: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your last name' : null,
        label: 'Last Name'
    },
    email: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfEmail(currentValue) && currentValue.length < 1 ? 'Please enter a valid email as abc@abc.com' : null,
        label: 'Email',
        help: 'Hint: abc@abc.com'
    },
    phoneNumber: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) && currentValue.length < 1 ? 'Please enter a valid email' : null,
        label: 'Phone Number',
    },
    adress: {
        initialValue: '',
        validator: (currentValue: any) => currentValue.length < 1 ? 'Please enter your Adress' : null,
        label: 'Adress'
    },
    zipcode: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter your zipcode' : currentValue.length !== 3 ? 'Please enter at least 3 numbers' :  null,
        label: 'Zipcode'
    },
    country: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your country' : null,
        label: 'Country'
    },




    firstNamePay: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your first name' : null,
        label: 'First Name'
    },
    lastNamePay: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your last name' : null,
        label: 'Last Name'
    },
    bankNumberPay: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a number' : currentValue.length !== 16 ? 'Please enter 16 digits' : null,
        label: 'Card Number'
    },
    cvc: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a number' : currentValue.length !== 3 ? 'Please enter at least 3 numbers' : null,
        label: 'CVC',
    },
    month: {
        help: 'Month',
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a number' : currentValue > 12 ? 'Please enter a month' : null,
    },
    year: {
        help: 'Year',
        initialValue: '',
        className: "txt-b",
        validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a number' : currentValue < date.getFullYear() || currentValue > 9999 ? 'Your card has expired' : null,
    }
}

export const IfSwishFields = {
    firstName: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your first name' : null,
        label: 'First Name'
    },
    lastName: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your last name' : null,
        label: 'Last Name'
    },
    email: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfEmail(currentValue) && currentValue.length < 1 ? 'Please enter a valid email as abc@abc.com' : null,
        label: 'Email',
        help: 'Hint: abc@abc.com'
    },
    phoneNumber: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) && currentValue.length < 1 ? 'Please enter a valid email' : null,
        label: 'Phone Number',
    },
    adress: {
        initialValue: '',
        validator: (currentValue: any) => currentValue.length < 1 ? 'Please enter your Adress' : null,
        label: 'Adress'
    },
    zipcode: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter your zipcode' : currentValue.length !== 3 ? 'Please enter at least 3 numbers' :  null,
        label: 'Zipcode'
    },
    country: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your country' : null,
        label: 'Country'
    },



    firstNamePay: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your first name' : null,
        label: 'First Name'
    },
    lastNamePay: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your last name' : null,
        label: 'Last Name'
    },
    phoneNumberPay: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) && currentValue.length < 1 ? 'Please enter a valid email' : null,
        label: 'Phone Number',
    },
}

export const IfKlarnaFields = {
    firstName: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your first name' : null,
        label: 'First Name'
    },
    lastName: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your last name' : null,
        label: 'Last Name'
    },
    email: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfEmail(currentValue) && currentValue.length < 1 ? 'Please enter a valid email as abc@abc.com' : null,
        label: 'Email',
        help: 'Hint: abc@abc.com'
    },
    phoneNumber: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) && currentValue.length < 1 ? 'Please enter a valid email' : null,
        label: 'Phone Number',
    },
    adress: {
        initialValue: '',
        validator: (currentValue: any) => currentValue.length < 1 ? 'Please enter your Adress' : null,
        label: 'Adress'
    },
    zipcode: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfNumber(currentValue) && currentValue.length < 1 ? 'Please enter your zipcode' :  null,
        label: 'Zipcode'
    },
    country: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your country' : null,
        label: 'Country'
    },




    firstNamePay: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your first name' : null,
        label: 'First Name'
    },
    lastNamePay: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your last name' : null,
        label: 'Last Name'
    },
    emailPay: {
        initialValue: '',
        validator: (currentValue: any) => !checkIfEmail(currentValue) && currentValue.length < 1 ? 'Please enter a valid email as abc@abc.com' : null,
        label: 'Email',
        help: 'Hint: abc@abc.com'
    },
}

// export const bankCardFields = {
//     firstName: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your first name' : null,
//         label: 'First Name'
//     },
//     lastName: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your last name' : null,
//         label: 'Last Name'
//     },
//     bankNumber: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a number' : currentValue.length !== 16 ? 'Please enter 16 digits' : null,
//         label: 'Card Number'
//     },
//     cvc: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a number' : currentValue.length !== 3 ? 'Please enter at least 3 numbers' : null,
//         label: 'CVC',
//     },
//     month: {
//         help: 'Month',
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a number' : currentValue > 12 ? 'Please enter a month' : null,
//     },
//     year: {
//         help: 'Year',
//         initialValue: '',
//         className: "txt-b",
//         validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter a number' : currentValue < date.getFullYear() || currentValue > 9999 ? 'Your card has expired' : null,
//     }
// }

// export const klarnaFields = {
//     firstName: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your first name' : null,
//         label: 'First Name'
//     },
//     lastName: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your last name' : null,
//         label: 'Last Name'
//     },
//     email: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfEmail(currentValue) && currentValue.length < 1 ? 'Please enter a valid email as abc@abc.com' : null,
//         label: 'Email',
//         help: 'Hint: abc@abc.com'
//     }
// }

// export const swishFields = {
//     firstName: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your first name' : null,
//         label: 'First Name'
//     },
//     lastName: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your last name' : null,
//         label: 'Last Name'
//     },
//     phoneNumber: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfNumber(currentValue) && currentValue.length < 1 ? 'Please enter a valid email' : null,
//         label: 'Phone Number',
//     }
// }

// export const checkoutInfoFields = {
//     firstName: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your first name' : null,
//         label: 'First Name'
//     },
//     lastName: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your last name' : null,
//         label: 'Last Name'
//     },
//     email: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfEmail(currentValue) && currentValue.length < 1 ? 'Please enter a valid email as abc@abc.com' : null,
//         label: 'Email',
//         help: 'Hint: abc@abc.com'
//     },
//     phoneNumber: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfNumber(currentValue) && currentValue.length < 1 ? 'Please enter a valid email' : null,
//         label: 'Phone Number',
//     },
//     adress: {
//         initialValue: '',
//         validator: (currentValue: any) => currentValue.length < 1 ? 'Please enter your Adress' : null,
//         label: 'Adress'
//     },
//     zipcode: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfNumber(currentValue) ? 'Please enter your zipcode' : currentValue.length !== 3 ? 'Please enter at least 3 numbers' :  null,
//         label: 'Zipcode'
//     },
//     country: {
//         initialValue: '',
//         validator: (currentValue: any) => !checkIfLetter(currentValue) && currentValue.length < 1 ? 'Please enter your country' : null,
//         label: 'Country'
//     },

// }

const checkIfNumber = (value: string) => {
    const regex = /^[a-zA-Z]+$/;
    for (let i = 0; i < value.length; i++) {
        if (value[i].match(regex)) {
            return true;
        }else{
            return false;
        }
    }
}

const checkIfLetter = (value: any) => {
    const regex = /^[a-zA-Z]+$/;
    for (let i = 0; i < value.length; i++) {
        if (!value[i].match(regex)) {
            return true;
        }else{
            return false;
        }
    }
}

function checkIfEmail(input: any) {
    const regex = new RegExp(EMAIL_REGEX);
    return regex.test(input);
}
