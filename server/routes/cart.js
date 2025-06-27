import express from 'express';
import Cart from '../models/Cart.js';
import Product from '../models/Product.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

// Get user's cart
router.get('/', requireAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.session.userId })
      .populate('items.product');
    
    if (!cart) {
      return res.json({ items: [] });
    }
    
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add item to cart
router.post('/add', requireAuth, async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    
    const product = await Product.findById(productId);
    if (!product || !product.isActive) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    if (product.stock < quantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }
    
    let cart = await Cart.findOne({ user: req.session.userId });
    
    if (!cart) {
      cart = new Cart({ user: req.session.userId, items: [] });
    }
    
    const existingItem = cart.items.find(item => 
      item.product.toString() === productId
    );
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    
    await cart.save();
    await cart.populate('items.product');
    
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update cart item quantity
router.put('/update', requireAuth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    const cart = await Cart.findOne({ user: req.session.userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    const item = cart.items.find(item => 
      item.product.toString() === productId
    );
    
    if (!item) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }
    
    if (quantity <= 0) {
      cart.items = cart.items.filter(item => 
        item.product.toString() !== productId
      );
    } else {
      item.quantity = quantity;
    }
    
    await cart.save();
    await cart.populate('items.product');
    
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Remove item from cart
router.delete('/remove/:productId', requireAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.session.userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    cart.items = cart.items.filter(item => 
      item.product.toString() !== req.params.productId
    );
    
    await cart.save();
    await cart.populate('items.product');
    
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Clear cart
router.delete('/clear', requireAuth, async (req, res) => {
  try {
    await Cart.findOneAndUpdate(
      { user: req.session.userId },
      { items: [] }
    );
    
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;