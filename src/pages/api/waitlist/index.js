import prisma from "@/lib/prismadb"


export default async function handler(
    req, res
  ) {
    const query = req.query;
    const page = parseInt(query.page);
    const limit = parseInt(query.limit);
   try{
    const waitlisted = await prisma.user.findMany({
        skip: (page - 1) * limit,
        take: limit,
    })
    const count = await prisma.user.count();
    return res.status(200).json({ waitlisted, count });
   }catch(err){
    return res.status(500).json({message: "Internal server error", err})
   }
  }