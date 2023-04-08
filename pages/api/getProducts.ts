// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "products"] {
    _id, ...,
    } | order(price desc)
`
type Data = {
    products: Products[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const products: Products[] = await sanityClient.fetch(query)
    res.status(200).json({products})
}