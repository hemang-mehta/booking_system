// pages/api/users.ts (assuming TypeScript file extension .ts)
import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/utils/mongoose';
import User from '../../../models/Customer';
import { NextRequest, NextResponse } from 'next/server';
connect()
export default async function handler(req: NextRequest, res: NextResponse) {
  const { method } = req;



  switch (method) {
    case 'POST':
      try {
        const user = await User.create(req.body);
        return NextResponse.json({success:true})
       
      } catch (error: any) { // Handle errors explicitly here
        return NextResponse.json({success:false})
      }
    
   
}
}
