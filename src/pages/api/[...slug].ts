import { NextApiRequest, NextApiResponse } from 'next'
import { homeData } from '@utils/home-data';
import { ApiNameEnum } from '@interfaces/index';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {slug} = _req.query;
    const data = getData(slug[0]);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

const getData =(slug: string | ApiNameEnum) =>{
  switch(slug){
    case ApiNameEnum.HOME:
      return homeData;
  }
}

export default handler
