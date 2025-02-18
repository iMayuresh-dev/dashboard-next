'use server'

export async function createInvoice(formData : FormData){
    const rawData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    }
    console.log(rawData)
}