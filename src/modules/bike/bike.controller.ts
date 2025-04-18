import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { BikesService } from "./bike.service";
import  httpStatus  from "http-status";

// Create a new bike
const createBike = catchAsync(async(req,res)=>{

    const result = await BikesService.createBikeInToDB(req.body)

    sendResponse(res,
        {
            statusCode:httpStatus.OK,
            success:true,
            message: "Bike added successfully",
            data:result
        }
    )

})


// Get All Bikes
const getAllBikes = catchAsync(async(req,res)=>{

    const bikes = await BikesService.getAllBikesFromDB();

    sendResponse(res,
        {
            statusCode:httpStatus.OK,
            success: true,
            message: 'Bikes fetched successfully',
            data:bikes
        }
    )
})

// Get Bike By ID

const getBikeByID = catchAsync(async(req,res)=>{

    const id = req.params.id as string

    const bike = await BikesService.getBikeByIDFromDB(id);

    sendResponse(res,
        {
            statusCode:httpStatus.OK,
            success: true,
            message: "Bike fetched successfully",
            data:bike
        }
    )
})
export const BikesController = {
    createBike,
    getAllBikes,
    getBikeByID,
}