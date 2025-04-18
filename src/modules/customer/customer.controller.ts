import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { CustomerService } from "./customer.service";
import  httpStatus  from "http-status";

// Create a new customer
const createCustomer = catchAsync(async(req,res)=>{

    const result = await CustomerService.createCustomerInToDB(req.body)

    sendResponse(res,
        {
            statusCode:httpStatus.OK,
            success:true,
            message:'Customer created successfully',
            data:result
        }
    )

})


// Get All Customer
const getAllCustomers = catchAsync(async(req,res)=>{

    const customers = await CustomerService.getAllCustomersFromDB();

    sendResponse(res,
        {
            statusCode:httpStatus.OK,
            success: true,
            message: 'Customers fetched successfully',
            data:customers
        }
    )
})

// Get Customer By ID

const getCutomerByID = catchAsync(async(req,res)=>{

    const id = req.params.id as string

    const customer = await CustomerService.getCustomerByIDFromDB(id);

    sendResponse(res,
        {
            statusCode:httpStatus.OK,
            success: true,
            message: 'Customer fetched successfully',
            data:customer
        }
    )
})

// Update Customer Data

const updateCustomer = catchAsync(async(req,res)=>{

    const {id} = req.params

    const updatedCustomer = await CustomerService.updateCustomerInToDB(id,req.body)

    sendResponse(res,
        {
            statusCode:httpStatus.OK,
            success: true,
            message: 'Customer updated successfully',
            data: updatedCustomer,
        }
    )

})

// Delete Customer data
const deleteCustomer = catchAsync(async(req,res)=> {

    const {id} = req.params;

    const deletedCustomer = await CustomerService.deleteCustomerFromDB(id)

    sendResponse(res,
        {
            statusCode:httpStatus.OK,
            success: true,
            message: "Customer deleted successfully"
        }
    )

})

export const CustomersController = {
    createCustomer,
    getAllCustomers,
    getCutomerByID,
    updateCustomer,
    deleteCustomer
}