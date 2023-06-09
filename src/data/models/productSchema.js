import mongoose, { Schema } from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const productsCollection = "products"

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String, },
    code: { type: String, required: true, unique: true },
    stock: { type: Number, required: true },
    enabled: { type: Boolean, default: true }
})

productSchema.plugin(mongoosePaginate)

export default mongoose.model(productsCollection, productSchema)