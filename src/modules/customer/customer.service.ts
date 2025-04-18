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


const getAllCustomersFromDB = async() => {

    const customers = await prisma.customer.findMany({

      orderBy: {

        createdAt: 'desc',

      },

    }
  );

    return customers;
}

const getCustomerByIDFromDB = async(id:string) => {

  const customer = await prisma.customer.findUniqueOrThrow({

    where:{

      customerId:id

    },

  }
);

  return customer;
}

const updateCustomerInToDB = async (customerId: string, payload:Partial<ICustomer>) => {
  
  const customer = await prisma.customer.update({

    where: { 
      
      customerId 
    },

    data: payload,

  });

  return customer;
}

// delete customer data
const deleteCustomerFromDB = async(customerId:string) => {
  
  const customer = await prisma.customer.delete({

    where: { 
      
      customerId 

    },
  }
);

  return customer;
}


export const CustomerService = {
    createCustomerInToDB,
    getAllCustomersFromDB,
    getCustomerByIDFromDB,
    updateCustomerInToDB,
    deleteCustomerFromDB
}