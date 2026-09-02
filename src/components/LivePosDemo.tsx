"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Barcode,
  Printer,
  Trash2,
  Plus,
  Minus,
  CheckCircle2,
  Sparkles,
  Wifi,
  WifiOff,
  CreditCard,
  Banknote,
  Smartphone,
  RotateCcw,
  Search,
  Receipt,
  X,
  Tag,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  sku: string;
  stock: number;
  emoji: string;
}

const DEMO_PRODUCTS: Product[] = [
  { id: "1", name: "Artisan Espresso Blend", category: "Cafe", price: 4.5, sku: "CAF-001", stock: 45, emoji: "☕" },
  { id: "2", name: "Almond Croissant", category: "Cafe", price: 3.75, sku: "CAF-002", stock: 18, emoji: "🥐" },
  { id: "3", name: "Organic Honey (500g)", category: "Retail", price: 12.0, sku: "RET-104", stock: 30, emoji: "🍯" },
  { id: "4", name: "Wireless Barcode Scanner", category: "Electronics", price: 49.99, sku: "ELC-501", stock: 12, emoji: "📟" },
  { id: "5", name: "Thermal Paper Rolls (Box)", category: "Retail", price: 19.5, sku: "RET-202", stock: 60, emoji: "📜" },
  { id: "6", name: "USB-C Fast Charging Hub", category: "Electronics", price: 29.0, sku: "ELC-309", stock: 24, emoji: "🔌" },
  { id: "7", name: "Vitamin C Complex (60ct)", category: "Pharmacy", price: 15.5, sku: "PHR-701", stock: 50, emoji: "💊" },
  { id: "8", name: "Cold-Pressed Olive Oil (1L)", category: "Retail", price: 16.8, sku: "RET-109", stock: 15, emoji: "🫒" },
];

export default function LivePosDemo() {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([
    { product: DEMO_PRODUCTS[0], quantity: 2 },
    { product: DEMO_PRODUCTS[2], quantity: 1 },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isOffline, setIsOffline] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "mpesa" | "card">("mpesa");
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [lastOrderDetails, setLastOrderDetails] = useState<any>(null);
  const [scanAnimation, setScanAnimation] = useState(false);

  const categories = ["All", "Cafe", "Retail", "Electronics", "Pharmacy"];

  const filteredProducts = DEMO_PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; quantity: number }[]
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
    setDiscountPercent(0);
  };

  const simulateBarcodeScan = () => {
    setScanAnimation(true);
    const randomProduct = DEMO_PRODUCTS[Math.floor(Math.random() * DEMO_PRODUCTS.length)];
    setTimeout(() => {
      addToCart(randomProduct);
      setScanAnimation(false);
    }, 400);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const tax = taxableAmount * 0.08; // 8% tax demo
  const total = taxableAmount + tax;

  const handleCompleteSale = () => {
    if (cart.length === 0) return;
    const orderData = {
      orderId: `SB-${Math.floor(100000 + Math.random() * 900000)}`,
      timestamp: new Date().toLocaleString(),
      items: [...cart],
      subtotal,
      discount: discountAmount,
      tax,
      total,
      paymentMethod,
      offlineStatus: isOffline ? "Synced to Local SQLite (Will auto-push to Cloud)" : "Direct Cloud Sync Active",
    };
    setLastOrderDetails(orderData);
    setShowReceiptModal(true);
  };

  return (
    <section id="pos-demo" className="py-20 bg-[#070b14] relative overflow-hidden border-t border-b border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-xs font-semibold text-sky-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Software Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Test Drive Our <span className="gradient-text-cyan">SmartBook POS Terminal</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3">
            Experience the real-time speed, offline resilience, and fluid checkout design we build for our retail and hospitality clients.
          </p>
        </div>

        {/* The POS Terminal Box */}
        <div className="glass-panel rounded-2xl border border-sky-500/20 overflow-hidden shadow-2xl shadow-black/80">
          {/* POS Terminal Top Header */}
          <div className="bg-slate-900/95 px-4 sm:px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide flex items-center gap-1.5">
                <span>SmartBook Terminal #01</span>
                <span className="text-slate-500">|</span>
                <span className="text-sky-400 text-xs font-normal">Cashier: Alex M.</span>
              </span>
            </div>

            {/* Controls: Offline toggle & Scanner Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setIsOffline(!isOffline)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isOffline
                    ? "bg-amber-500/20 border border-amber-500/40 text-amber-300"
                    : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                }`}
                title="Toggle internet connection simulation"
              >
                {isOffline ? <WifiOff className="w-3.5 h-3.5 text-amber-400" /> : <Wifi className="w-3.5 h-3.5 text-emerald-400" />}
                <span>{isOffline ? "Offline Mode (SQLite)" : "Cloud Synced"}</span>
              </button>

              <button
                onClick={simulateBarcodeScan}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  scanAnimation
                    ? "bg-sky-400 text-slate-950 scale-105"
                    : "bg-sky-500/15 border border-sky-400/30 text-sky-300 hover:bg-sky-500/25"
                }`}
              >
                <Barcode className="w-3.5 h-3.5 text-sky-400" />
                <span>{scanAnimation ? "Beep! Scanned" : "Scan Barcode"}</span>
              </button>
            </div>
          </div>

          {/* POS Terminal Body: 2 Column Layout (Products + Register) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            {/* Left: Product Catalog (7 Cols) */}
            <div className="lg:col-span-7 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-800/80 bg-slate-950/40 flex flex-col justify-between">
              <div>
                {/* Search & Category Tabs */}
                <div className="space-y-3 mb-5">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search product name or scan SKU..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-slate-700/60 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 transition"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                          selectedCategory === cat
                            ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20"
                            : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Tiles Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-h-[380px] overflow-y-auto pr-1">
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => addToCart(product)}
                      className="group bg-slate-900/80 hover:bg-slate-850 p-3 rounded-xl border border-slate-800 hover:border-sky-400/50 flex flex-col justify-between text-left transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/10 active:scale-95"
                    >
                      <div className="flex items-start justify-between w-full mb-2">
                        <span className="text-2xl">{product.emoji}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                          {product.sku}
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white line-clamp-1 group-hover:text-sky-300 transition-colors">
                          {product.name}
                        </div>
                        <div className="flex items-center justify-between mt-1 pt-1 border-t border-slate-800/60">
                          <span className="text-xs font-black text-sky-400">
                            ${product.price.toFixed(2)}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            Stock: {product.stock}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Catalog Quick Notice */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>⚡ Real-time inventory sync & barcode lookup ready</span>
                <span className="text-sky-400 font-medium">Touch or Click item to add</span>
              </div>
            </div>

            {/* Right: Active Order & Checkout Register (5 Cols) */}
            <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-900/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-sky-400" />
                    <h3 className="font-bold text-sm text-white">Current Register Bill</h3>
                  </div>
                  {cart.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear</span>
                    </button>
                  )}
                </div>

                {/* Cart Items List */}
                <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                  {cart.length === 0 ? (
                    <div className="py-12 text-center text-slate-500 text-xs">
                      <ShoppingBag className="w-8 h-8 mx-auto mb-2 opacity-40 text-slate-400" />
                      Register is empty. Click any product or scan a barcode to add.
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80 text-xs"
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="font-semibold text-white truncate">{item.product.name}</div>
                          <div className="text-[11px] text-slate-400 font-mono">
                            ${item.product.price.toFixed(2)} x {item.quantity} ={" "}
                            <span className="text-sky-400 font-bold">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-bold text-white text-xs">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-1 text-slate-500 hover:text-rose-400 ml-1"
                            aria-label="Remove item"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Discount Preset Chips */}
                {cart.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Tag className="w-3 h-3 text-sky-400" /> Discount:
                    </span>
                    <div className="flex items-center gap-1">
                      {[0, 5, 10, 15].map((pct) => (
                        <button
                          key={pct}
                          onClick={() => setDiscountPercent(pct)}
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold transition ${
                            discountPercent === pct
                              ? "bg-sky-500 text-slate-950"
                              : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                          }`}
                        >
                          {pct === 0 ? "None" : `${pct}%`}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Checkout Calculation and Pay Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-800">
                {/* Financial Summary */}
                <div className="space-y-1 text-xs text-slate-300 mb-3 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {discountPercent > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Discount ({discountPercent}%):</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tax / VAT (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-white pt-1 border-t border-slate-700 font-sans">
                    <span>Total Due:</span>
                    <span className="gradient-text-cyan text-lg">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div className="grid grid-cols-3 gap-1.5 mb-3">
                  <button
                    onClick={() => setPaymentMethod("mpesa")}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1.5 transition ${
                      paymentMethod === "mpesa"
                        ? "bg-emerald-500/20 border border-emerald-400/50 text-emerald-300"
                        : "bg-slate-900 text-slate-400 border border-slate-800"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>M-Pesa</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("card")}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1.5 transition ${
                      paymentMethod === "card"
                        ? "bg-sky-500/20 border border-sky-400/50 text-sky-300"
                        : "bg-slate-900 text-slate-400 border border-slate-800"
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Card</span>
                  </button>
                  <button
                    onClick={() => setPaymentMethod("cash")}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold flex items-center justify-center gap-1.5 transition ${
                      paymentMethod === "cash"
                        ? "bg-amber-500/20 border border-amber-400/50 text-amber-300"
                        : "bg-slate-900 text-slate-400 border border-slate-800"
                    }`}
                  >
                    <Banknote className="w-3.5 h-3.5" />
                    <span>Cash</span>
                  </button>
                </div>

                {/* Complete Sale CTA Button */}
                <button
                  disabled={cart.length === 0}
                  onClick={handleCompleteSale}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 hover:from-emerald-400 hover:to-sky-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>Complete Sale & Print Receipt (${total.toFixed(2)})</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Callout below demo */}
        <div className="mt-8 text-center bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Need this customized for your store, supermarket, bar, or pharmacy?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              We customize hardware integrations, multi-branch cloud sync, and staff access roles.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg text-xs transition"
          >
            Order Custom POS
          </a>
        </div>
      </div>

      {/* Simulated Thermal Receipt Modal */}
      {showReceiptModal && lastOrderDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm bg-[#fafafa] text-slate-900 rounded-2xl p-6 shadow-2xl font-mono text-xs border border-slate-300 max-h-[90vh] overflow-y-auto">
            {/* Modal Close Button */}
            <button
              onClick={() => setShowReceiptModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 transition"
              aria-label="Close receipt"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Receipt Content Header */}
            <div className="text-center pb-4 border-b border-dashed border-slate-400">
              <div className="font-extrabold text-base tracking-widest text-slate-950">
                SMARTBOOK POS
              </div>
              <div className="text-[11px] text-slate-600">Bespoke Retail & Hospitality Systems</div>
              <div className="text-[10px] text-slate-500 mt-1">Tel: +254 700 000 000 | Nairobi, Kenya</div>
              <div className="mt-2 text-[10px] font-bold bg-emerald-100 text-emerald-800 py-1 px-2 rounded inline-block">
                ✓ SALE COMPLETED SUCCESSFULLY
              </div>
            </div>

            {/* Meta info */}
            <div className="py-2.5 border-b border-dashed border-slate-300 text-[10px] space-y-1">
              <div className="flex justify-between">
                <span>Receipt #:</span>
                <span className="font-bold">{lastOrderDetails.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span>Date/Time:</span>
                <span>{lastOrderDetails.timestamp}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment:</span>
                <span className="uppercase font-bold text-sky-800">{lastOrderDetails.paymentMethod}</span>
              </div>
              <div className="flex justify-between text-slate-500 text-[9px]">
                <span>Status:</span>
                <span>{lastOrderDetails.offlineStatus}</span>
              </div>
            </div>

            {/* Itemized list */}
            <div className="py-3 border-b border-dashed border-slate-400 space-y-1.5">
              {lastOrderDetails.items.map((item: any, i: number) => (
                <div key={i} className="flex justify-between">
                  <span className="truncate pr-2">
                    {item.quantity}x {item.product.name}
                  </span>
                  <span className="font-semibold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="py-2.5 border-b border-dashed border-slate-400 space-y-1">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal:</span>
                <span>${lastOrderDetails.subtotal.toFixed(2)}</span>
              </div>
              {lastOrderDetails.discount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Discount:</span>
                  <span>-${lastOrderDetails.discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-600">
                <span>Tax (8%):</span>
                <span>${lastOrderDetails.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-black text-slate-950 pt-1">
                <span>TOTAL PAID:</span>
                <span>${lastOrderDetails.total.toFixed(2)}</span>
              </div>
            </div>

            {/* Barcode & Footer */}
            <div className="pt-4 text-center space-y-2">
              <div className="font-mono text-[10px] tracking-widest text-slate-500">
                ||| | ||||| ||| |||| |||||| ||||
              </div>
              <div className="text-[10px] text-slate-500">
                Thank you for your business! Powered by SmartBook Software.
              </div>
            </div>

            {/* Action buttons inside modal */}
            <div className="mt-5 pt-3 border-t border-slate-200 flex gap-2">
              <button
                onClick={() => {
                  window.print();
                }}
                className="flex-1 py-2 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-800"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Physical Copy</span>
              </button>
              <button
                onClick={() => {
                  clearCart();
                  setShowReceiptModal(false);
                }}
                className="flex-1 py-2 rounded-lg bg-sky-600 text-white font-bold text-xs hover:bg-sky-500"
              >
                New Sale
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
