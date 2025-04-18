import prisma from "../../app/utils/prisma";
import { IService } from "./serviceRecord.interface";
import { subDays } from 'date-fns';

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

const getAllServicesFromDB = async() => {

    const result = await prisma.serviceRecord.findMany({})

    return result
}


const getServiceRecordByIDFromDB = async (serviceId:string) => {

    const serviceRecord = await prisma.serviceRecord.findUniqueOrThrow({

        where:{
    
          serviceId
    
        },
    
      }
    )

    return serviceRecord
}


const completedServiceRecordByIDInToDB = async(serviceId:string) => {

    const result = await prisma.serviceRecord.update({

        where:{

            serviceId

        },

        data:{

            completionDate:new Date(),

            status:'done'
        }
    }
)
    return result
}

const updateServiceRecordByIDInToDB = async(serviceId:string) => {

    const result = await prisma.serviceRecord.update({

        where:{

            serviceId

        },

        data:{
            status:'in-progress'
        }
    }
)
    return result
}

const overDueServicesRecordFromDB = async() => {

    const sevenDaysAgo = subDays(new Date(), 7);

    const overDueServiceRecord = await prisma.serviceRecord.findMany({

        where:{
    
          status:{
            in:['pending','in-progress']
          },
          
          serviceDate:{
            lt: sevenDaysAgo,
          }

        },
        orderBy:{

            serviceDate:'asc'

        }
    
      }
    )

    return overDueServiceRecord
}

export const ServiceRecordService = {
    createServiceRecordInToDB,
    getAllServicesFromDB,
    getServiceRecordByIDFromDB,
    completedServiceRecordByIDInToDB,
    updateServiceRecordByIDInToDB,
    overDueServicesRecordFromDB
}