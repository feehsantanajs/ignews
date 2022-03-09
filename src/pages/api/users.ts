import { NextApiRequest, NextApiResponse} from "next";

export default function(request:NextApiRequest, response:NextApiResponse){

    const users = [
        { id:1, name: 'Felipe'  },
        { id:2, name: 'Giseli ' },
        { id:3, name: 'Santana' },
    ]

    return response.json(users);
}