import prisma from "../../app/utils/prisma";
import { IBike } from "./bike.interface";

// Create customer into DB 
const createBikeInToDB = async (payload:IBike) => {
    
    const bike = await prisma.bike.create({ data: payload });

    return bike;
}


const getAllBikesFromDB = async() => {

    const bikes = await prisma.bike.findMany({});

    return bikes;
}

const getBikeByIDFromDB = async(id:string) => {

  const bike = await prisma.bike.findUniqueOrThrow({

    where:{

      bikeId:id

    },

  }
);

  return bike;
}



export const BikesService = {
    createBikeInToDB,
    getAllBikesFromDB,
    getBikeByIDFromDB,
}