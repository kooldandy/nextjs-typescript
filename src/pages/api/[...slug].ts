import { NextApiRequest, NextApiResponse } from 'next'
import { homeData } from '@utils/home-data';
import { ApiNameEnum } from '@interfaces/index';

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const {slug} = request.query;
    const res = getData(slug[0]);
      response.status(200).json(res);
  } catch (err: any) {
    response.status(500).json({ statusCode: 500, message: err.message })
  }
}

const getData =(slug: string | ApiNameEnum) =>{
  switch(slug){
    case ApiNameEnum.HOME:
      return homeData;
  }
}

export default handler
