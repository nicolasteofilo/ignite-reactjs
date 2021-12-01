/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
    ];

    return response.json(users);
};
