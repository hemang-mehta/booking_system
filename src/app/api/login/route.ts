// pages/api/users.ts (assuming TypeScript file extension .ts)
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utils/mongoose';
import User from '../../../models/Customer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error: any) { // Handle errors explicitly here
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, message: 'Method Not Allowed' });
      break;
  }
}
