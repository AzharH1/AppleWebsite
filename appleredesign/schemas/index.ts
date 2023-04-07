

import product from './documents/product'
import category from './documents/category'



const documents = [ product, category]

// Block content
import blockContent from './blocks/blockContent'
const blocks = [blockContent]


export const schemaTypes = [ ...documents, ...blocks]
