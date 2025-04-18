import prisma from "../../app/utils/prisma";
import { ICustomer } from "./customer.interface"

// Create customer into DB 
const createCustomerInToDB = async (payload:ICustomer) => {
    
    const { name, email, phone } = payload;

    const customer = await prisma.customer.create({
        data: {
          name,
          email,
          phone,
        },
      });

    return customer
}


export const CustomerService = {
    createCustomerInToDB
}