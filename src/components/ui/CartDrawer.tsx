import React, { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, X, MessageSquare, MapPin, User, Phone, ClipboardList } from 'lucide-react';
import toast from 'react-hot-toast';
import { getWhatsAppLink } from '../../lib/whatsapp';

interface CartItem {
  id: number;
  name: string;
  price: string; // can be "79" or "79 / 149"
  quantity: number;
  category: string;
}

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Form states for delivery choice & details
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [instructions, setInstructions] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'category' | 'price-low' | 'price-high'>('name');

  // Parse price string to number for calculation
  const parsePrice = (priceStr: string): number => {
    const basePrice = priceStr.split('/')[0].trim();
    const parsed = parseInt(basePrice, 10);
    return isNaN(parsed) ? 0 : parsed;
  };

  useEffect(() => {
    // Load initial cart from localStorage
    const savedCart = localStorage.getItem('snp_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error(e);
      }
    }

    const handleAddToCart = (e: Event) => {
      const item = (e as CustomEvent).detail;
      setCart((prevCart) => {
        const existing = prevCart.find((i) => i.id === item.id);
        let updated;
        if (existing) {
          updated = prevCart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
          toast.success(`Increased ${item.name} quantity to ${existing.quantity + 1}!`);
        } else {
          updated = [...prevCart, { ...item, quantity: 1 }];
          toast.success(`Added ${item.name} to order!`);
        }
        localStorage.setItem('snp_cart', JSON.stringify(updated));
        return updated;
      });
      setIsOpen(true); // Automatically slide open cart on adding
    };

    window.addEventListener('add-to-cart', handleAddToCart);

    // Listen for navbar cart icon clicks
    const handleOpenDrawer = () => setIsOpen(true);
    window.addEventListener('open-cart-drawer', handleOpenDrawer);

    return () => {
      window.removeEventListener('add-to-cart', handleAddToCart);
      window.removeEventListener('open-cart-drawer', handleOpenDrawer);
    };
  }, []);

  const updateQuantity = (id: number, delta: number) => {
    setCart((prevCart) => {
      const updated = prevCart
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: Math.max(0, item.quantity + delta) };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);

      localStorage.setItem('snp_cart', JSON.stringify(updated));
      return updated;
    });
  };

  const removeItem = (id: number, name: string) => {
    setCart((prevCart) => {
      const updated = prevCart.filter((item) => item.id !== id);
      localStorage.setItem('snp_cart', JSON.stringify(updated));
      toast.error(`Removed ${name} from order`);
      return updated;
    });
  };

  // Sorting helper
  const getSortedCart = () => {
    const sorted = [...cart];
    if (sortBy === 'name') {
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === 'category') {
      return sorted.sort((a, b) => a.category.localeCompare(b.category));
    }
    if (sortBy === 'price-low') {
      return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    }
    if (sortBy === 'price-high') {
      return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }
    return sorted;
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);

  const handleSendOrder = () => {
    if (cart.length === 0) return;

    let message = `Hi SNP Cafe! I would like to place an order from Satkar Chowk outstation:\n\n`;
    
    // Get sorted items
    const sortedCart = getSortedCart();
    
    sortedCart.forEach((item) => {
      const price = parsePrice(item.price);
      message += `• ${item.quantity}x ${item.name} (₹${price} each) - [Category: ${item.category}]\n`;
    });
    
    message += `\n*Total Order Amount:* ₹${totalPrice}\n`;
    message += `*Order Type:* ${orderType === 'delivery' ? '🚗 Delivery' : '🥡 Self-Pickup'}\n`;
    
    if (customerName.trim()) {
      message += `*Customer Name:* ${customerName.trim()}\n`;
    }
    if (customerPhone.trim()) {
      message += `*Contact Phone:* ${customerPhone.trim()}\n`;
    }
    if (orderType === 'delivery' && deliveryAddress.trim()) {
      message += `*Delivery Address:* ${deliveryAddress.trim()}\n`;
    }
    if (instructions.trim()) {
      message += `*Instructions:* ${instructions.trim()}\n`;
    }

    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <>
      {/* Floating Cart Launcher Button */}
      {totalItems > 0 && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-[49] bg-[#9C0512] hover:bg-[#B70615] text-[#EFEACD] p-4 rounded-full shadow-[0_10px_30px_rgba(156,5,18,0.5)] flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 group border border-[#F8D794]/20 cursor-pointer animate-bounce"
        >
          <div className="relative">
            <ShoppingCart size={24} />
            <span className="absolute -top-3 -right-3 bg-[#EFEACD] text-[#0E0000] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border border-[#9C0512]">
              {totalItems}
            </span>
          </div>
          <span className="font-bebas text-sm tracking-wider pr-1 hidden sm:inline">View Order (₹{totalPrice})</span>
        </button>
      )}

      {/* Cart Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0E0000]/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-md h-full bg-pure-black border-l border-ceramic-yellow/20 flex flex-col z-10 shadow-2xl animate-fade-in-left">
            {/* Header */}
            <div className="p-6 border-b border-[#9C0512]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingCart className="text-ceramic-yellow" size={24} />
                <h3 className="font-display font-bold text-xl text-pastel-beige">Your Order Draft</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#EFEACD]/60 hover:text-white transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Sorting controls */}
            {cart.length > 0 && (
              <div className="px-6 py-3 bg-[#1A0A0B]/40 border-b border-[#F8D794]/10 flex items-center justify-between">
                <span className="text-xs text-[#EFEACD]/50 font-body">Sort items by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-pure-black text-ceramic-yellow text-xs border border-[#F8D794]/20 rounded px-2.5 py-1 focus:outline-none focus:border-[#9C0512]"
                >
                  <option value="name">Name</option>
                  <option value="category">Category</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            )}

            {/* List & Form */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-20">
                  <ShoppingCart className="text-[#EFEACD]/20" size={64} />
                  <p className="font-body text-[#EFEACD]/40 text-sm">Your order is empty.</p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-[#9C0512]/20 hover:bg-[#9C0512]/40 text-ceramic-yellow border border-[#9C0512]/30 px-5 py-2.5 rounded-xl font-body text-xs uppercase tracking-wider transition-all"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {getSortedCart().map((item) => {
                      const basePrice = parsePrice(item.price);
                      return (
                        <div
                          key={item.id}
                          className="bg-[#1A0A0B]/60 border border-[#F8D794]/10 rounded-2xl p-4 flex gap-4 items-center justify-between hover:border-ceramic-yellow/30 transition-all duration-300"
                        >
                          <div className="flex-1 min-w-0">
                            <span className="font-bebas text-[10px] tracking-wider text-ceramic-yellow uppercase block mb-1">
                              {item.category}
                            </span>
                            <h4 className="font-display font-semibold text-pastel-beige text-base truncate">
                              {item.name}
                            </h4>
                            <span className="font-body text-xs text-[#EFEACD]/50 block mt-0.5">
                              ₹{basePrice} each
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            {/* Quantity controls */}
                            <div className="flex items-center bg-pure-black border border-[#F8D794]/15 rounded-lg p-1">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="text-[#EFEACD]/60 hover:text-white p-1 hover:bg-white/5 rounded-md transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="font-bebas text-pastel-beige text-sm px-2.5 min-w-[20px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="text-[#EFEACD]/60 hover:text-white p-1 hover:bg-white/5 rounded-md transition-colors"
                              >
                                <Plus size={14} />
                              </button>
                            </div>

                            {/* Delete */}
                            <button
                              onClick={() => removeItem(item.id, item.name)}
                              className="text-[#9C0512] hover:text-red-500 p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Order Details & Address Choice Form */}
                  <div className="mt-8 pt-6 border-t border-[#F8D794]/10 space-y-4">
                    <h4 className="font-display font-semibold text-pastel-beige text-sm uppercase tracking-wider">Order Details</h4>
                    
                    {/* Order Type Tabs */}
                    <div className="grid grid-cols-2 gap-2 bg-pure-black p-1 border border-[#F8D794]/15 rounded-lg">
                      <button
                        type="button"
                        onClick={() => setOrderType('delivery')}
                        className={`py-2 text-xs font-body font-semibold rounded-md transition-all cursor-pointer ${
                          orderType === 'delivery'
                            ? 'bg-[#9C0512] text-white shadow-md'
                            : 'text-[#EFEACD]/50 hover:text-white'
                        }`}
                      >
                        🚗 Home Delivery
                      </button>
                      <button
                        type="button"
                        onClick={() => setOrderType('pickup')}
                        className={`py-2 text-xs font-body font-semibold rounded-md transition-all cursor-pointer ${
                          orderType === 'pickup'
                            ? 'bg-[#9C0512] text-white shadow-md'
                            : 'text-[#EFEACD]/50 hover:text-white'
                        }`}
                      >
                        🥡 Self-Pickup
                      </button>
                    </div>

                    {/* Customer Info Form */}
                    <div className="space-y-3">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#EFEACD]/40 mb-1 font-body">Your Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F8D794]/50 w-3.5 h-3.5" />
                          <input
                            type="text"
                            placeholder="e.g. Asmit Kumar"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="w-full bg-[#1A0A0B]/60 border border-[#F8D794]/20 hover:border-[#F8D794]/40 focus:border-[#9C0512] rounded-xl py-2 pl-9 pr-3 text-xs text-[#EFEACD] focus:outline-none placeholder:text-[#EFEACD]/30"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#EFEACD]/40 mb-1 font-body">Contact Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F8D794]/50 w-3.5 h-3.5" />
                          <input
                            type="tel"
                            placeholder="e.g. 7091653582"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="w-full bg-[#1A0A0B]/60 border border-[#F8D794]/20 hover:border-[#F8D794]/40 focus:border-[#9C0512] rounded-xl py-2 pl-9 pr-3 text-xs text-[#EFEACD] focus:outline-none placeholder:text-[#EFEACD]/30"
                          />
                        </div>
                      </div>

                      {/* Address Choice Field (only if orderType is delivery) */}
                      {orderType === 'delivery' && (
                        <div className="transition-all duration-300">
                          <label className="block text-[10px] uppercase tracking-wider text-[#EFEACD]/40 mb-1 font-body">Delivery Address Choice</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-3 text-[#F8D794]/50 w-3.5 h-3.5" />
                            <textarea
                              placeholder="Please provide your full delivery address in Kahalgaon..."
                              rows={3}
                              value={deliveryAddress}
                              onChange={(e) => setDeliveryAddress(e.target.value)}
                              className="w-full bg-[#1A0A0B]/60 border border-[#F8D794]/20 hover:border-[#F8D794]/40 focus:border-[#9C0512] rounded-xl py-2.5 pl-9 pr-3 text-xs text-[#EFEACD] focus:outline-none placeholder:text-[#EFEACD]/30 resize-none"
                            />
                          </div>
                        </div>
                      )}

                      {/* Instructions */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-[#EFEACD]/40 mb-1 font-body">Special Instructions</label>
                        <div className="relative">
                          <ClipboardList className="absolute left-3 top-3 text-[#F8D794]/50 w-3.5 h-3.5" />
                          <textarea
                            placeholder="e.g. Extra cheese, make it spicy, no onions..."
                            rows={2}
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            className="w-full bg-[#1A0A0B]/60 border border-[#F8D794]/20 hover:border-[#F8D794]/40 focus:border-[#9C0512] rounded-xl py-2.5 pl-9 pr-3 text-xs text-[#EFEACD] focus:outline-none placeholder:text-[#EFEACD]/30 resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer summary & checkout */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#9C0512]/20 bg-[#0E0000]/90 backdrop-blur-md">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-[#EFEACD]/60 font-body text-sm">
                    <span>Total items</span>
                    <span>{totalItems}</span>
                  </div>
                  <div className="flex justify-between items-baseline border-t border-white/5 pt-3">
                    <span className="font-display font-bold text-pastel-beige text-base">Estimated Total</span>
                    <span className="font-bebas text-ceramic-yellow text-3xl">₹{totalPrice}</span>
                  </div>
                  <span className="text-[10px] text-[#EFEACD]/30 block text-right">
                    *Excludes packaging & delivery taxes where applicable
                  </span>
                </div>

                <button
                  onClick={handleSendOrder}
                  className="w-full bg-[#25D366] hover:bg-[#1ebd5d] text-white font-body font-bold uppercase tracking-wider text-sm py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  <MessageSquare size={18} />
                  Send Order to WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
