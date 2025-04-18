import catchAsync from "../../app/utils/catchAsync"
import sendResponse from "../../app/utils/sendResponse"
import { ServiceRecordService } from "./serviceRecord.service"
import  httpStatus  from "http-status";

const createServiceRecord = catchAsync(async(req,res)=>{

    const result = await ServiceRecordService.createServiceRecordInToDB(req.body)

    sendResponse(res,
        {
            statusCode:httpStatus.CREATED,
            success:true,
            message: "Service record created successfully",
            data:result
        }
    )

})


export const ServiceRecordController = {
    createServiceRecord
}