import prisma from "../../app/utils/prisma";
import { IService } from "./serviceRecord.interface";

const createServiceRecordInToDB = async(payload:IService) => {

    const { bikeId } = payload

   

    const isBikeExist = await prisma.bike.findUniqueOrThrow({
        where:{
            bikeId
        }
    })

    if(!isBikeExist){
        throw new Error("Bike Not Found")
    }

    const service = await prisma.serviceRecord.create({
        data: payload
      });
  
      return service;
}


export const ServiceRecordService = {
    createServiceRecordInToDB
}