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


export const CustomersController = {
    createCustomer
}