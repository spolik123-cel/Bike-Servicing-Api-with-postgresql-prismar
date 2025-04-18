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

const getAllServices = catchAsync(async(req,res)=>{

    const result = await ServiceRecordService.getAllServicesFromDB();

    sendResponse(res,
        {
            statusCode:httpStatus.CREATED,
            success:true,
            message: "Service records fetched successfully",
            data:result
        }
    )
})


const getServiceRecord = catchAsync(async(req,res)=>{

    const id = req.params.id as string

    const serviceRecord = await ServiceRecordService.getServiceRecordByIDFromDB(id);

    sendResponse(res,
        {
            statusCode:httpStatus.OK,
            success: true,
            message: 'Service record fetched successfully',
            data:serviceRecord
        }
    )
})


const completedServiceRecord = catchAsync(async(req,res)=>{

    const id = req.params.id as string

    const serviceRecord = await ServiceRecordService.completedServiceRecordByIDInToDB(id);

    sendResponse(res,
        {
            statusCode:httpStatus.OK,
            success: true,
            message: "Service marked as completed",
            data:serviceRecord
        }
    )
})

const updateServiceRecord = catchAsync(async(req,res)=>{

    const id = req.params.id as string

    const serviceRecord = await ServiceRecordService.updateServiceRecordByIDInToDB(id);

    sendResponse(res,
        {
            statusCode:httpStatus.OK,
            success: true,
            message: "Service Record Updated",
            data:serviceRecord
        }
    )
})


const overDueServices = catchAsync(async(req,res)=>{

    const result = await ServiceRecordService.overDueServicesRecordFromDB()

    sendResponse(res,
        {
            statusCode:httpStatus.CREATED,
            success:true,
            message: "Overdue or pending services fetched successfully",
            data:result
        }
    )

})


export const ServiceRecordController = {
    createServiceRecord,
    getAllServices,
    getServiceRecord,
    completedServiceRecord,
    updateServiceRecord,
    overDueServices
}