import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['table-flags', 'pole-flags', 'hand-flags', 'other-flags']
  },
  images: [{
    type: String,
    required: true
  }],
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  dimensions: {
    width: Number,
    height: Number,
    length: Number,
    unit: {
      type: String,
      default: 'inches'
    }
  },
  material: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

productSchema.index({ name: 'text', description: 'text', country: 'text' });

export default mongoose.model('Product', productSchema);